# Step A - i18n Audit Report

Date: 2026-03-30  
Scope: `src/`, `index.html`, locale resources in `src/i18n/locales/`

## 1) Current i18n architecture (as-is)

- Initialization is in `src/i18n/index.ts` using `i18next`, `initReactI18next`, and `i18next-browser-languagedetector`.
- Config uses:
  - `fallbackLng: 'en'`
  - detection order: `localStorage`, then `navigator`
  - localStorage caching enabled
- App bootstrap imports i18n in `src/main.tsx`.
- Locale resources are bundled from 9 files:
  - `en`, `zh-CN`, `zh-TW`, `es`, `pt`, `fr`, `hi`, `ja`, `ar`
- Language picker list is separately hardcoded in `src/components/Navbar.tsx`.

## 2) Key findings

### 2.1 i18n usage is very limited in runtime UI

- `useTranslation()`/`t(...)` is used only in `src/components/Navbar.tsx`.
- Most pages/components currently render hardcoded English strings directly.

### 2.2 Language source of truth is duplicated

- Active locales are defined in both:
  - `src/i18n/index.ts` (resource imports/registry)
  - `src/components/Navbar.tsx` (UI language list)
- Adding/removing a language currently requires editing multiple places.

### 2.3 Hardcoded document titles

- `src/hooks/useDocumentTitle.ts` receives plain strings from pages and appends a static suffix.
- Current page title values are hardcoded in these files:
  - `src/pages/Home.tsx`
  - `src/pages/Technology.tsx`
  - `src/pages/Liquidity.tsx`
  - `src/pages/WhiteLabel.tsx`
  - `src/pages/Markets.tsx`
  - `src/pages/Developers.tsx`
  - `src/pages/Compliance.tsx`
  - `src/pages/About.tsx`
  - `src/pages/Contact.tsx`
  - `src/pages/Web3.tsx`
  - `src/pages/PrivacyPolicy.tsx`
  - `src/pages/Terms.tsx`

### 2.4 Locale coverage mismatch by route

- Locale files include major namespaces like `home`, `about`, `technology`, `liquidity`, `whiteLabel`, `markets`, `developers`, `compliance`, `contact`, `footer`, `nav`.
- Missing explicit top-level namespaces for pages/components with large hardcoded copy:
  - `web3`
  - `privacy` / `privacyPolicy`
  - `terms`

### 2.5 RTL readiness is incomplete

- Arabic locale exists (`ar.json`), but UI direction switching is not implemented.
- No global update of `document.documentElement.dir` / `lang` on language change.
- Layout uses physical direction classes in many places (`left-*`, `right-*`, `ml-*`, etc.), which will need RTL treatment.

## 3) Concrete hardcoded-string hotspots (high priority)

- `src/components/Footer.tsx`
- `src/pages/Home.tsx`
- `src/pages/Technology.tsx`
- `src/pages/Liquidity.tsx`
- `src/pages/WhiteLabel.tsx`
- `src/pages/Markets.tsx`
- `src/pages/Developers.tsx`
- `src/pages/Compliance.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Web3.tsx`
- `src/pages/PrivacyPolicy.tsx`
- `src/pages/Terms.tsx`
- `src/components/ComingSoonBadge.tsx`
- `src/components/SectionHeader.tsx` (props usage patterns are mostly string-literal driven from pages)

## 4) Risks if kept as-is

- New language onboarding is error-prone (multi-file manual edits).
- Translations can drift because locale keys exist but are not actually consumed by components.
- Hardcoded legal and SEO strings prevent true localization quality.
- Arabic text without RTL handling creates layout/readability issues.

## 5) Recommended execution order for Step B+

1. Create a single language registry module (one source of truth for locale metadata).
2. Refactor language picker + i18n init to consume that registry.
3. Move shared UI copy first (`Footer`, badges, navbar utility labels) to `t(...)`.
4. Refactor pages in batches to i18n keys (start with Home and Contact).
5. Move document titles to translation keys.
6. Add namespaces for `web3`, `privacy`, `terms`.
7. Add RTL support (`dir`, `lang`, targeted layout fixes).
8. Add automated locale parity checks (missing keys / placeholder mismatch).

## 6) Step A deliverables completed

- As-is architecture inventory completed.
- File-level hardcoded-string hotspot inventory completed.
- Language management and RTL gap analysis completed.
- Prioritized remediation sequence prepared for Step B review.
