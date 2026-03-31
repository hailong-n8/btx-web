import fs from 'node:fs'
import path from 'node:path'

function flattenKeys(input, prefix = '') {
  const output = []
  for (const [key, value] of Object.entries(input)) {
    const full = prefix ? `${prefix}.${key}` : key
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      output.push(...flattenKeys(value, full))
    } else {
      output.push(full)
    }
  }
  return output
}

function getByPath(input, keyPath) {
  return keyPath.split('.').reduce((curr, key) => {
    if (!curr || typeof curr !== 'object') return undefined
    return curr[key]
  }, input)
}

function placeholders(value) {
  return [...value.matchAll(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g)].map((m) => m[1]).sort()
}

const localesDir = path.resolve(process.cwd(), 'src/i18n/locales')
const localeFiles = fs.readdirSync(localesDir).filter((f) => f.endsWith('.json')).sort()
if (!localeFiles.includes('en.json')) {
  console.error('Missing base locale: en.json')
  process.exit(1)
}

const localeData = Object.fromEntries(
  localeFiles.map((file) => {
    const full = path.join(localesDir, file)
    return [file, JSON.parse(fs.readFileSync(full, 'utf8'))]
  }),
)

const errors = []
const baseKeys = flattenKeys(localeData['en.json']).sort()

for (const [file, json] of Object.entries(localeData)) {
  if (file === 'en.json') continue
  const keys = flattenKeys(json).sort()
  const missing = baseKeys.filter((k) => !keys.includes(k))
  const extra = keys.filter((k) => !baseKeys.includes(k))
  if (missing.length) errors.push(`${file}: missing keys (${missing.length})`)
  if (extra.length) errors.push(`${file}: extra keys (${extra.length})`)
}

for (const keyPath of baseKeys) {
  const baseVal = getByPath(localeData['en.json'], keyPath)
  if (typeof baseVal !== 'string') continue
  const expected = placeholders(baseVal)
  if (!expected.length) continue
  for (const [file, json] of Object.entries(localeData)) {
    if (file === 'en.json') continue
    const targetVal = getByPath(json, keyPath)
    if (typeof targetVal !== 'string') continue
    const got = placeholders(targetVal)
    if (JSON.stringify(got) !== JSON.stringify(expected)) {
      errors.push(`${file}: placeholder mismatch at ${keyPath}`)
    }
  }
}

if (errors.length) {
  console.error('Locale checks failed:')
  for (const err of errors) console.error(`- ${err}`)
  process.exit(1)
}

console.log(`Locale checks passed for ${localeFiles.length} files.`)
