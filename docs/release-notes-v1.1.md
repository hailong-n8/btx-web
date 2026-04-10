# Release Notes — v1.1

**Date:** 10 April 2026
**Environment:** Production ([www.iqex.io](https://www.iqex.io))

## Summary

This release removes all publicly accessible API documentation, code samples, and status page references from the IQEX website. API and documentation access is now treated as invite-only, consistent with the platform's B2B security posture. The `/developers` page has been retired and all developer-oriented entry points now route through the Contact page.

## Changes

### Removed

- **API Docs button** from the top navigation bar (desktop and mobile).
- **Developers link** from the main navigation menu.
- **Developers section** from the site footer (API Documentation, Sandbox Access, Status Page).
- **`/developers` page** — route now redirects (HTTP 302) to `/contact`.
- **gRPC code sample** and all public endpoint references (`api.iqex.io:443`, `docs.iqex.io`, `status.iqex.io`).
- **`src/pages/Developers.tsx`** source file (dead code cleanup).

### Changed

- All "View API Docs" and "Access API Documentation" call-to-action buttons across the site now read **"Request API Access"** and link to `/contact`.
- Secondary CTA buttons that previously linked to `/developers` now read **"Explore Technology"** and link to `/technology`.
- Technology page hero and footer CTA sections simplified to a single button (removed redundant secondary CTA that duplicated the `/contact` destination).
- Footer grid layout adjusted from 5-column to 4-column to accommodate the removed Developers section.

### Localisation

- All 8 non-English locales updated to reflect the new CTA labels:
  - Arabic, Spanish, French, Hindi, Japanese, Portuguese, Simplified Chinese, Traditional Chinese.
- Keys updated: `nav.apiDocs`, `footer.apiDocumentation`, `footer.sandboxAccess`, `footer.statusPage`, `home.ctaAccessApi`, `home.ctaViewApi`, `technology.ctaAccessDocs`, `liquidity.ctaViewDocs`, `markets.ctaDocs`, `web3.ctaViewApi`.

### Infrastructure

- Production domain (`www.iqex.io`) re-pointed to the `btx-website` Vercel project for correct auto-deployment on `git push`.
- Internal documentation (`docs/contact-inventory-and-standardization.md`) updated to reflect removed public endpoints and new private docs repository.

## Context

Requested by Diego (IQEX development team) following the completion of the BTX → IQEX rebrand. Public API documentation has been moved to a private GitHub repository (`iqex-docs/api`, invite-only). Removing public API surface information reduces exposure to application-layer attacks and aligns with the platform's B2B access model.

## Verification

- `npm run test:unit` — 8 tests passed (including i18n key parity)
- `npm run build` — TypeScript compilation and Vite production build successful
- No new linter errors introduced

## Commits

- `56b092c` — Remove public API docs, status page, and code samples per Diego security review.
- `e46403d` — Sync i18n locales for invite-only API access and remove dead Developers page.
