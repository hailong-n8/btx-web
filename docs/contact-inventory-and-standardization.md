# Contact Inventory and Standardization (Website)

This document defines the final contact standard for the website and where those values are used.

## 1) Canonical Email Policy (Final)

Only two external email addresses are allowed:

- `technical@iqex.io`
  - Scope: API integration, developer support, technical troubleshooting.

- `contact@iqex.io`
  - Scope: All non-technical matters (partnerships, liquidity, general enquiries, legal/privacy/compliance, media, business requests).

## 2) Current Usage After Standardization

- `src/pages/Contact.tsx`
  - Partnerships: `contact@iqex.io`
  - Liquidity: `contact@iqex.io`
  - API & technical integration: `technical@iqex.io`
  - General enquiries: `contact@iqex.io`

- `src/pages/PrivacyPolicy.tsx`
  - Legal/privacy contact mailbox: `contact@iqex.io`

- `src/pages/Terms.tsx`
  - Legal contact mailbox: `contact@iqex.io`

- `src/i18n/locales/*.json`
  - Privacy-rights contact line (`privacyPolicy.section6Item5`) points to `contact@iqex.io`

## 3) Related External Endpoints (Not Email)

- `https://github.com/iqex-api/iqex-api` (API repository)
- `docs.iqex.io` (documentation endpoint label)
- `status.iqex.io` (status endpoint label)
- `api.iqex.io:443` (gRPC endpoint sample)

## 4) Maintenance Recommendation

To prevent drift, centralize contact values in one config file and reference it from pages and i18n interpolation:

- Suggested file: `src/config/contact.ts`
- Suggested keys:
  - `emails.technical`
  - `emails.contact`
  - `endpoints.docs`
  - `endpoints.status`
  - `endpoints.grpc`
  - `links.githubApiRepo`
