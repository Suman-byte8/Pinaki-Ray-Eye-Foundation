# TODO - Common Layout (Navbar/Footer) + Shared CTA

- [ ] Update `src/app/layout.js` to wrap pages with global `Navbar` and `Footer`.
- [ ] Refactor `src/app/page.js` (Home) to remove duplicated `Navbar`/`Footer` wrappers.
- [ ] Refactor `src/app/about/page.js` to remove duplicated `Navbar`/`Footer` wrappers.
- [ ] Refactor `src/app/doctors/page.js` to remove duplicated `Navbar`/`Footer` wrappers.
- [ ] Refactor `src/app/doctors/[slug]/page.js` to remove duplicated `Navbar`/`Footer` wrappers.
- [ ] Refactor `src/app/services/page.js` to remove duplicated `Navbar`/`Footer` wrappers.
- [ ] Refactor `src/app/insurance/page.js` to use shared layout (Navbar/Footer come from global) and align CTA.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Manual route verification: `/`, `/about`, `/services`, `/doctors`, `/doctors/:slug`, `/insurance`.

