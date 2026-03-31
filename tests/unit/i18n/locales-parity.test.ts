import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

type JsonObject = Record<string, unknown>

function flattenKeys(input: JsonObject, prefix = ''): string[] {
  const output: string[] = []
  for (const [key, value] of Object.entries(input)) {
    const full = prefix ? `${prefix}.${key}` : key
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      output.push(...flattenKeys(value as JsonObject, full))
    } else {
      output.push(full)
    }
  }
  return output
}

function getByPath(input: JsonObject, keyPath: string): unknown {
  return keyPath.split('.').reduce<unknown>((curr, key) => {
    if (!curr || typeof curr !== 'object') return undefined
    return (curr as JsonObject)[key]
  }, input)
}

function extractPlaceholders(value: string): string[] {
  const matches = value.matchAll(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g)
  return [...matches].map((m) => m[1]).sort()
}

const localesDir = path.resolve(process.cwd(), 'src/i18n/locales')
const localeFiles = fs.readdirSync(localesDir).filter((f) => f.endsWith('.json')).sort()
const localeData = Object.fromEntries(
  localeFiles.map((file) => {
    const full = path.join(localesDir, file)
    return [file, JSON.parse(fs.readFileSync(full, 'utf8')) as JsonObject]
  }),
)

describe('i18n locale parity', () => {
  it('keeps locale files present', () => {
    expect(localeFiles.length).toBeGreaterThan(1)
    expect(localeFiles).toContain('en.json')
  })

  it('keeps all locale keys aligned to en.json', () => {
    const baseKeys = flattenKeys(localeData['en.json']).sort()
    for (const [file, json] of Object.entries(localeData)) {
      if (file === 'en.json') continue
      const keys = flattenKeys(json).sort()
      expect(keys, `${file} keys differ from en.json`).toEqual(baseKeys)
    }
  })

  it('keeps interpolation placeholders aligned to en.json', () => {
    const baseKeys = flattenKeys(localeData['en.json'])
    for (const keyPath of baseKeys) {
      const baseVal = getByPath(localeData['en.json'], keyPath)
      if (typeof baseVal !== 'string') continue
      const basePlaceholders = extractPlaceholders(baseVal)
      if (!basePlaceholders.length) continue
      for (const [file, json] of Object.entries(localeData)) {
        if (file === 'en.json') continue
        const val = getByPath(json, keyPath)
        if (typeof val !== 'string') continue
        expect(
          extractPlaceholders(val),
          `${file} placeholder mismatch for key: ${keyPath}`,
        ).toEqual(basePlaceholders)
      }
    }
  })
})
