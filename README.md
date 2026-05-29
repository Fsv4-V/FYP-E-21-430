# Smart Diabetic Wound pH Sensor — FYP Portfolio Website

A professional, interactive single-page portfolio for the Final Year Project
**"Smart Diabetic Wound Monitoring Patch"** — a hand-fabricated flexible PANI pH sensor.
Built as a static site for **GitHub Pages** (no build tools, no frameworks).

---

## ✨ What's in this version

- **Refined Academic** theme — light, professional palette (deep navy-blue + refined teal),
  Fraunces / IBM Plex Sans / IBM Plex Mono typography.
- **Interactive features:** scroll progress bar, animated hero counters, reveal-on-scroll
  animations, filterable timeline & resources, Drive-linked weekly resource folders, sticky active-nav, back-to-top.
- **Weekly Progress = 5 weeks only** (Weeks 01–05). Each week shows the **screenshot of that
  week's working folder** plus a full breakdown (goals, findings, decisions, rejected options,
  evidence) reconstructed from the actual folder contents.
- The old **"Supervisor Review Guide"** section has been **removed**.

---

## 📁 File structure

```
fyp-portfolio/
├── index.html      ← page structure (sections + render targets)
├── style.css       ← Refined Academic theme
├── script.js       ← renders all content from data.js + interactivity
├── data.js         ← ◀ EDIT THIS to change any text/content
├── README.md
└── assets/
    └── No week images are embedded. Weekly evidence is linked through Google Drive folders.
```

> Optional folders you can add for live file links:
> `documents/` (your .xlsx / .pdf / .docx) and `documents/datasheets/` (component PDFs).
> The links already point to these paths in `data.js`.

---

## ✏️ Editing content

**Almost everything lives in `data.js`.** You usually never touch HTML/CSS/JS.

1. **Your personal details** — edit the `PROJECT` object at the top of `data.js`:
   - `student` (your full name + ID), `university`, `supervisor`,
     `githubRepo`, `contactEmail`.
2. **Weekly content** — edit the `WEEKS` array. Each week has:
   `label, dates, phase, title, image, folders[], summary, goals, keyFindings[],
   decisions, rejected, nextWeek, evidence`.
3. **Update weekly evidence links** — edit the `driveLink:` field in each `WEEKS` object inside `data.js`.

> ⚠️ The weekly write-ups were reconstructed from your Drive resource folders. **Verify dates
> and details before submission** and adjust wording in `data.js` as needed.

---

## 🚀 Deploying to GitHub Pages

**If you already have the repo live (updating an existing site):**
1. Download these files.
2. Go to your repo → **Add file ▸ Upload files**.
3. Drag the changed files in — keep the **same names** so they overwrite:
   `index.html`, `style.css`, `script.js`, and `data.js`. Weekly resources are accessed through the Google Drive buttons.
4. ⚠️ If you previously edited your name/email in `data.js`, **merge** those edits instead of
   blindly overwriting.
5. Commit. Pages redeploys in ~1 minute.

**First-time setup:**
1. Create a public repo (e.g. `fyp-wound-sensor`).
2. Upload all files (keep the folder structure).
3. Repo **Settings ▸ Pages ▸ Source: `main` / root ▸ Save**.
4. Your site appears at `https://<username>.github.io/<repo>/`.

**Git CLI alternative:**
```bash
git add .
git commit -m "Update portfolio: 5-week timeline, new professional theme"
git push origin main
```

---

## 🎨 Changing colours / fonts

Open `style.css` → the `:root { ... }` block at the top holds every colour and font variable
(`--primary`, `--accent`, `--font-display`, etc.). Change them once and the whole site updates.

---

*Built with plain HTML/CSS/JS · No dependencies · Works offline once fonts are cached.*


## Weekly Google Drive Resource Links

- Week 01: https://drive.google.com/drive/folders/1tkGkRAXig2UpzIEpuL-YDCpxefRbUTq2?usp=drive_link
- Week 02: https://drive.google.com/drive/folders/15nu7y297LGzbr29fADAJ7siThBSDOKnj?usp=drive_link
- Week 03: https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link
- Week 04: https://drive.google.com/drive/folders/1TXObdQxO2R-fMgzQKd96bVRRzY6lFjVY?usp=drive_link
- Week 05: https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link


## Latest Update
- Reworked color theme for clearer visibility with a dark blue/teal/yellow palette.
- Added short descriptions for Week 01–05.
- Added Week 06–14 as Coming Soon placeholders.
- Added supervisors: Dr. Ruwan Ranaweera and Dr. Manjula Peiris, University of Peradeniya.
- Updated temperature sensor from NTC thermistor to TMP117.
- Added datasheet Drive folder link in the datasheet section.
