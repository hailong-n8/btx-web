# i18n Language Onboarding SOP

This checklist is the standard way to add a new language.

## 1) Add locale file

- Create `src/i18n/locales/<code>.json`
- Start from `src/i18n/locales/en.json`
- Keep key structure identical to `en.json`

## 2) Register language metadata

- Edit `src/i18n/languages.ts`
- Add one record in `appLanguages`:
  - `code`
  - `label`
  - `short`
  - `dir` (`ltr` or `rtl`)
  - `enabled`
- Add locale import and entry into `languageResources`

## 3) Run automated checks

- `npm run test:i18n:check`
- `npm run test:unit`
- `npm run build`

## 4) Manual smoke checks

- Switch language from navbar and ensure it appears in the menu.
- Verify page navigation keeps selected language.
- Verify footer and navbar labels render correctly.
- If RTL language: verify alignment/layout on key pages.

## 5) Definition of done

- New locale is visible in picker.
- Locale parity checks pass (no missing keys / placeholder mismatch).
- Unit tests and build pass.
- Basic UI smoke checks pass.
