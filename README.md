# Smart Diabetic Wound pH Sensor — FYP Portfolio

> **Final Year Project Portfolio** · B.Sc. Electrical & Electronic Engineering  
> Hand-Fabricated Flexible PANI pH Sensor for Diabetic Wound Monitoring  

---

## 🌐 Live Website

```
https://YOUR-USERNAME.github.io/fyp-wound-sensor
```
*(Replace YOUR-USERNAME with your GitHub username after deploying)*

---

## 📂 Repository Structure

```
fyp-wound-sensor/
│
├── index.html          ← Main website page (all sections)
├── style.css           ← All styling (dark navy/teal theme)
├── script.js           ← All interactivity (timeline, filters, animations)
├── data.js             ← ALL CONTENT — edit this to update the website
├── README.md           ← This file
│
├── assets/
│   └── images/         ← Place photos, diagrams, screenshots here
│
└── documents/          ← Place your actual project files here
    ├── PH_Sensor_Matrix.xlsx
    ├── Comparative_Analysis_Matrix.xlsx
    ├── Flexible_Medical_PCB_Materials_Comparison.xlsx
    ├── Coin_Module_Architecture_Comparison.xlsx
    ├── Hand_FPCB_Fabrication_Guide_SriLanka_FYP.xlsx
    ├── Budget_Estimation_FPCB_Wound_Sensor_FYP.xlsx
    └── ... (all other project files)
```

---

## ✏️ How to Edit the Website

**The website content lives entirely in `data.js`.** You rarely need to touch `index.html`, `style.css`, or `script.js`.

### 1. Update Your Personal Details

Open `data.js` and find the `PROJECT` object at the top:

```javascript
const PROJECT = {
  title: "Smart Diabetic Wound Monitoring Patch",
  student: "Your Full Name",              // ← Add your name
  degree: "B.Sc. in Electrical & Electronic Engineering",
  university: "Your University Name",     // ← Add your university
  year: "2025 – 2026",
  supervisor: "Prof. Supervisor Name",    // ← Add supervisor name
  githubRepo: "https://github.com/your-username/fyp-wound-sensor",  // ← Add your repo URL
  contactEmail: "your.email@university.lk",  // ← Add your email
};
```

### 2. Add a New Week

Find the `WEEKS` array in `data.js` and add a new entry at the end:

```javascript
{
  id: 8,                              // Increment from last week
  label: "Week 08",
  dates: "Jun 2025",
  phase: "Fabrication",               // Phase filter label
  title: "PANI Synthesis — First Attempt",
  summary: "The PANI synthesis protocol was executed for the first time in the university chemistry laboratory...",
  goals: "Execute PANI synthesis. Verify emeraldine salt formation. Prepare PANI ink for screen printing.",
  files: ["PANI_Synthesis_Log_Week08.xlsx"],
  keyFindings: [
    "PANI colour confirmed dark green (Emeraldine Salt) after synthesis at 0–5°C.",
    "Synthesis yield: 0.48 g from 1.86 g aniline (literature: 0.5 g expected).",
  ],
  decisions: "Confirmed synthesis protocol is reproducible. Proceeding to screen-printing step.",
  rejected: "First batch had slight blue tint — insufficient HCl doping. Re-doped with 1M HCl for 30 min.",
  nextWeek: "Screen-print silver ink traces and carbon base layer on PET substrate.",
  evidence: "PANI_Synthesis_Log_Week08.xlsx: Reagent masses, reaction time, colour observations, yield calculation."
},
```

### 3. Add a Resource

Find the `RESOURCES` array in `data.js` and add a new entry:

```javascript
{
  id: "e10",
  type: "excel",             // Types: "paper", "excel", "document", "datasheet", "video", "guide"
  title: "My New File Name",
  description: "What this file contains and why it matters.",
  week: 8,                   // Which week it belongs to
  tags: ["PANI", "synthesis", "Week 08"],
  link: "documents/my-file.xlsx"  // Path to file in repository
},
```

### 4. Add a Research Paper

```javascript
{
  id: "r4",
  type: "paper",
  title: "Author et al. (Year) — Paper Title",
  journal: "Journal Name",
  year: 2024,
  relevance: "Why this paper is important to your project.",
  tags: ["keyword1", "keyword2"],
  link: "https://doi.org/..."    // DOI link
},
```

### 5. Update Project Objectives

Edit the `OBJECTIVES` array — just add or modify strings:

```javascript
const OBJECTIVES = [
  "Objective 1 — complete sentence.",
  "Objective 2 — complete sentence.",
  // Add more here...
];
```

### 6. Add Supervisor Meeting Notes

Find `SUPERVISOR_NOTES` in `data.js`. After each meeting, fill in:

```javascript
{
  date: "Meeting 03 — 15 June 2025",   // ← real date
  week: "Week 06",
  topic: "System architecture review",
  feedback: "What your supervisor said...",
  action: "What you did in response..."
}
```

### 7. Add a Component Datasheet

Find `DATASHEETS`. Add your component, then drop the PDF into `documents/datasheets/`:

```javascript
{ component: "AD8232", role: "ECG analog front-end", category: "Analog Front-End", link: "documents/datasheets/AD8232.pdf" }
```

### 8. Add a Video / Reference Link

Find `VIDEOS`:

```javascript
{ title: "Video Title", source: "Channel/Org", type: "video", note: "Why it matters", link: "https://youtu.be/..." }
```

### 9. Other editable arrays in data.js

| Array | Controls |
|-------|----------|
| `WEEKS` | Weekly progress timeline |
| `RESOURCES` | Main resource library |
| `DATASHEETS` | Component datasheets section |
| `DOCUMENTS_LIB` | Word/PDF document library |
| `VIDEOS` / `KEY_PUBLICATIONS` | Video & external references |
| `SUPERVISOR_NOTES` | Supervisor meeting record |
| `SIMILAR_PRODUCTS` | Competitive analysis |
| `WOUND_PH_TABLE` | Clinical pH reference table |
| `FILE_CATEGORIES` | File classification section |
| `FILE_ANALYSIS` | Complete file index table |
| `TESTING` | Testing & validation plan |
| `FUTURE_WORK` | Future work list |
| `BUDGET` | Budget breakdown |
| `OBJECTIVES` | Project objectives |

---

## 🚀 How to Upload to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `fyp-wound-sensor` *(or any name you prefer)*
3. Set to **Public** *(required for free GitHub Pages)*
4. Click **Create repository**

### Step 2: Upload All Files

**Option A — GitHub Web Interface (Easiest):**
1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag all files from the `fyp-portfolio/` folder
3. Write a commit message: "Initial portfolio upload"
4. Click **"Commit changes"**

**Option B — Git Command Line:**
```bash
# In your fyp-portfolio folder
git init
git add .
git commit -m "Initial FYP portfolio"
git remote add origin https://github.com/YOUR-USERNAME/fyp-wound-sensor.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click **Settings**
2. Scroll to **"Pages"** in the left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Branch: **main** | Folder: **/ (root)**
5. Click **Save**
6. Wait 1–2 minutes, then visit `https://YOUR-USERNAME.github.io/fyp-wound-sensor`

### Step 4: Update the PROJECT URL in data.js

```javascript
githubRepo: "https://github.com/YOUR-USERNAME/fyp-wound-sensor",
```

---

## 📁 Adding Your Project Files to the Website

Place all Excel, PDF, Word, and other project files in the `documents/` folder.

Then in `data.js`, update the `link` field of each resource:

```javascript
link: "documents/Coin_Module_Architecture_Comparison.xlsx"
```

Users will be able to click and download directly from your GitHub Pages site.

---

## 🔄 How to Update the Website After Initial Upload

Every time you want to update content:

1. Edit `data.js` (or other files as needed)
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Add Week 08 progress"
   git push
   ```
3. GitHub Pages automatically rebuilds within ~1 minute

---

## 🎨 How to Customise the Design

Open `style.css` and find the `:root` block at the top:

```css
:root {
  --teal: #00D4C8;      ← Primary accent colour
  --amber: #F5A623;     ← Secondary accent colour
  --navy-deepest: #060C18;  ← Background
  --navy-card: #152847;     ← Card background
}
```

Change these hex values to update the entire colour scheme.

---

## 📧 Sharing With Your Supervisor

Send this message to your supervisor:

> "Dear [Supervisor name],  
> Please find my FYP portfolio website at: https://YOUR-USERNAME.github.io/fyp-wound-sensor  
>  
> The portfolio documents all weekly progress from Week 01 to the current week, including:
> - All technical decisions with evidence from comparison matrices
> - Complete system architecture
> - Resource library with all uploaded files
> - Testing and validation plan
>  
> A 'How to Review This Portfolio' guide is available at the bottom of the page to help navigate the content efficiently."

---

## 🗂️ Recommended Folder Structure for GitHub

```
fyp-wound-sensor/
├── index.html
├── style.css
├── script.js
├── data.js
├── README.md
├── assets/
│   └── images/
│       ├── sensor-photo.jpg
│       ├── pani-synthesis.jpg
│       └── pcb-layout.png
└── documents/
    ├── research-papers/
    │   ├── shirzaei-sani-2023.pdf
    │   ├── tang-2021.pdf
    │   └── iversen-2022.pdf
    ├── excel-analysis/
    │   ├── PH_Sensor_Matrix.xlsx
    │   ├── Comparative_Analysis_Matrix.xlsx
    │   └── ... (all other xlsx files)
    ├── datasheets/
    │   ├── ESP32-S3_datasheet.pdf
    │   ├── ADS1115_datasheet.pdf
    │   └── INA333_datasheet.pdf
    └── supervisor-notes/
        └── meeting-notes-week02.pdf
```

---

## 🏆 Tips for a Higher-Quality Portfolio

1. **Add photos**: Take photos of your synthesis setup, PCB, and assembled sensor. Add to `assets/images/`.
2. **Link datasheets**: Download ESP32-S3, ADS1115, INA333 datasheets and link them in the Resources section.
3. **Add supervisor meeting notes**: Create a PDF after each meeting and link it.
4. **Update weekly**: Commit after every lab session with what you did, what worked, and what didn't.
5. **Add calibration data**: When you get calibration readings, add them as a new resource with actual numbers.
6. **Screenshot everything**: Save screenshots of any oscilloscope readings, multimeter measurements, or code output.

---

## 📊 Recommended Repository Name

`fyp-wound-sensor` *(short, memorable, professional)*

Or alternatives:
- `pani-ph-sensor-fyp`
- `flexible-wound-monitoring-fyp`
- `smart-wound-patch-fyp`

---

*Last updated: May 2026 | Smart Diabetic Wound pH Sensor FYP | Sri Lanka*
