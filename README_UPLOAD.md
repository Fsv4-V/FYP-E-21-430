# Safe GitHub Update — Weeks 11, 12 and 13 Only

This ZIP is an **overlay update**, not a replacement website.

It is designed to preserve the current portfolio exactly and update only:

- Week 11
- Week 12
- Week 13

## Files deliberately NOT included

The package does **not** contain or replace:

- `index.html`
- `data.js`
- `script.js`
- CSS files
- Weeks 01–10 assets or content
- Overview, problem, architecture, sensor, resources, datasheets, references, validation, future-work or contact sections

Therefore, extracting or uploading the package cannot overwrite those earlier website files.

## Included files

```text
week-updates.js
assets/week11/
assets/week12/
assets/week13/
IPR_AND_IMAGE_ATTRIBUTION.md
README_UPLOAD.md
VERIFY_PACKAGE.md
CMJ_MANUSCRIPT_REVISION_LOG.md
```

## Upload procedure

1. Open the GitHub repository that publishes the portfolio.
2. Upload the folders `assets/week11`, `assets/week12` and `assets/week13` into the existing `assets` folder.
3. Upload `week-updates.js` to the repository root.
4. Do not delete or replace existing website files.
5. Confirm that `index.html` already contains the following order:

```html
<script defer src="data.js"></script>
<script defer src="week-updates.js"></script>
<script defer src="script.js"></script>
```

If `week-updates.js` is already linked, no edit to `index.html` is required.

6. Commit the uploaded files and wait for GitHub Pages to redeploy.
7. Open the portfolio and use `Ctrl + F5` to refresh without cache.

## Dates retained in this update

- Week 11: 28 July 2026
- Week 12: Friday, 31 July 2026
- Week 13: 2 August 2026

## Colombo Medical Journal work included

- Week 11: initial supervisor comments and revision checklist
- Week 12: corrected draft, source verification and additional comments
- Week 13: continued section-by-section correction process, current 17-page/38-reference working draft, and preparation for the next review

## Important

Do not use GitHub's **Delete this repository** or remove existing folders. Only add/replace the files listed in this package.

## Current manuscript files added

The following files are included under `assets/week13/`:

```text
CMJ_Current_Revised_Manuscript_38_References.pdf
CMJ_Manuscript_Title_Page.png
CMJ_References_31_to_38_and_Appendix.png
```

These are added only to Week 13. They do not replace any existing earlier portfolio file. The screenshots come directly from the uploaded PDF and are not AI-generated images. Existing future-week cards remain unchanged; Week 13 only describes the planned continuation in its `nextWeek` text.
