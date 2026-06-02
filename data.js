// ============================================================
//  data.js  –  FYP Portfolio: Smart Diabetic Wound pH Sensor
//  Edit this file to update all website content easily.
//  Weekly content below is reconstructed from the actual
//  Week 01–05 working folders are linked through Google Drive resources.
// ============================================================

// ── PROJECT IDENTITY ────────────────────────────────────────
const PROJECT = {
  title: "Smart Diabetic Wound Monitoring Patch",
  subtitle: "A Hand-Fabricated Flexible PANI pH Sensor for Real-Time Chronic Wound Assessment",
  student: "Final Year Project Portfolio",
  degree: "Department of Electrical and Electronic Engineering",
  university: "University of Peradeniya, Sri Lanka",
  year: "2025 – 2026",
  supervisor: "Supervisors: Dr. Ruwan Ranaweera, Department Supervisor, University of Peradeniya · Dr. Manjula Peiris, Faculty of Medicine, University of Peradeniya",
  tagline: "Bridging biomedical sensing, flexible electronics, and low-cost embedded monitoring for diabetic wound care.",
  githubRepo: "https://drive.google.com/drive/folders/1-xBttuHcKbzLprP1NRHI01qpF6mVDaKS?usp=drive_link",
  contactEmail: "e21430@eng.pdn.ac.lk",
};

// ── ABSTRACT ─────────────────────────────────────────────────
const ABSTRACT = `
Chronic diabetic wounds affect hundreds of millions of people globally, and wound pH is one of the most reliable
early biomarkers of infection and healing status. This Final Year Project develops a coin-sized, hand-fabricated
flexible wound monitoring patch built around a Polyaniline (PANI) potentiometric pH electrode paired with an
Ag/AgCl reference electrode on a low-cost PET substrate. The work has progressed through five documented weeks of
structured research — from defining the clinical problem and studying wound pH variation, through clinical
pathology and similar-product analysis, to component/datasheet gathering, electronics "brain" design, and flexible
PCB fabrication costing. Every weekly folder of collected resources is preserved as evidence, and each technical
decision is traceable to a specific comparison or reference. The project is intentionally scoped to be reproducible
within a Sri Lankan university laboratory at a prototype cost of roughly LKR 15,000–20,000.
`;

// ── PROBLEM STATEMENT ────────────────────────────────────────
const PROBLEM = {
  headline: "Why Wound pH Monitoring Matters",
  points: [
    { icon: "🩺", title: "Scale of the Problem", text: "Diabetic foot ulcers affect 15–25% of all diabetic patients. Many lower-limb amputations in South Asia are preventable with timely wound assessment." },
    { icon: "🔬", title: "pH as a Clinical Biomarker", text: "Healthy wound pH is acidic (5.5–6.5). Infected chronic wounds shift alkaline (>7.0), often before visible clinical signs appear — making pH an early-warning biomarker." },
    { icon: "🏥", title: "Clinical Access Gap", text: "Commercial wound pH monitors cost USD 450–1,500 per unit — unaffordable for most hospitals in Sri Lanka and other low-to-middle-income settings." },
    { icon: "📡", title: "The Monitoring Gap", text: "Current practice relies on subjective visual inspection during dressing changes, so pH changes between appointments go completely undetected." }
  ]
};

// ── RESEARCH GAP ─────────────────────────────────────────────
const RESEARCH_GAP = {
  headline: "What the Literature Shows — and Where the Gap Lies",
  papers: [
    { citation: "Shirzaei Sani et al. (2023) — Science Advances", finding: "PANI/Au potentiometric sensor at 59.7 mV/pH; full wound closure in 14 days via electrical stimulation; validated in vivo on diabetic rats.", limitation: "Requires cleanroom e-beam evaporation, photolithography, and reactive-ion etching — inaccessible for an undergraduate lab.", relevance: "Validates PANI + Ag/AgCl as the gold-standard wound pH architecture and sets the performance benchmark." },
    { citation: "Tang et al. (2021) — Micromachines Review", finding: "Accessible screen-printed PANI / thread-based sensors at ~−50 mV/pH; wound pH > 6.5 reliably indicates biofilm infection.", limitation: "Review only — no complete integrated wireless system.", relevance: "Provides the accessible screen-printing fabrication pathway this FYP adopts." },
    { citation: "Iversen et al. (2022) — Printed Smart Patch", finding: "Fully printed SWCNT resistive pH + hydration patch on PDMS; simple ESP32-compatible readout; high biocompatibility.", limitation: "SWCNT inks are costly and the resistive mechanism is less selective than PANI potentiometric sensing.", relevance: "Confirms an ESP32 + simple analog readout chain is feasible for an FYP budget." }
  ],
  gap: "No existing study demonstrates a hand-fabricated, wireless, multi-parameter wound patch using locally-sourced materials in a developing-country university laboratory at a prototype cost under ~LKR 20,000."
};

// ── PROPOSED SOLUTION ────────────────────────────────────────
const SOLUTION = {
  features: [
    { icon: "🧪", text: "PANI potentiometric pH electrode synthesised in-house (~54–60 mV/pH target)" },
    { icon: "⚡", text: "Ag/AgCl solid-state reference electrode screen-printed on PET" },
    { icon: "🌡️", text: "TMP117 high-accuracy digital temperature sensor for wound surface temperature" },
    { icon: "💧", text: "Impedance-based exudate moisture sensing on the shared electrode pair" },
    { icon: "🔌", text: "INA333 instrumentation amplifier for high-impedance pH buffering" },
    { icon: "📊", text: "ADS1115 16-bit I²C ADC for precise digitisation" },
    { icon: "📡", text: "ESP32-S3 MCU with BLE 5.0 + Wi-Fi for wireless transmission" },
    { icon: "🔋", text: "CR2032 coin cell + XC6206 ultra-low-Iq LDO regulator" }
  ]
};

// ── PROJECT OBJECTIVES ───────────────────────────────────────
const OBJECTIVES = [
  "Design and hand-fabricate a flexible PANI-based potentiometric pH sensor on a PET substrate using screen-printing techniques reproducible in a Sri Lankan university laboratory.",
  "Synthesise Polyaniline (Emeraldine Salt) via controlled oxidative chemical polymerisation and characterise its pH sensitivity (target ≥ 50 mV/pH over pH 4–9).",
  "Fabricate a stable solid-state Ag/AgCl reference electrode and validate it against wound-representative chloride concentrations.",
  "Design an analog signal-conditioning chain (INA333 + ADS1115) achieving < 1 mV noise and ≤ 0.02 pH resolution.",
  "Implement ESP32-S3 firmware for multi-parameter acquisition (pH, temperature, moisture) with BLE transmission and deep-sleep power management.",
  "Validate the system through buffer calibration (pH 4 / 7 / 9) and simulated wound-environment testing.",
  "Demonstrate the complete prototype within a budget of roughly LKR 15,000–20,000 using locally-sourced materials where possible."
];

// ── WEEKLY PROGRESS: WEEKS 01–05 + WEEKS 06–14 COMING SOON ──
const WEEKS = [
  {
    "id": 1,
    "label": "Week 01",
    "dates": "May 2026",
    "phase": "Problem Definition",
    "title": "Problem Definition and pH Background",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/1tkGkRAXig2UpzIEpuL-YDCpxefRbUTq2?usp=drive_link",
    "images": [
      { "src": "week1.png", "caption": "Week 01 uploaded folder evidence" }
    ],
    "folders": [
      "PH VARIATIONS",
      "SENSOR COMPARISON",
      "SMART WOUND DRESSING"
    ],
    "summary": "Focused on the clinical need for diabetic wound monitoring, wound pH variation, sensor comparison, and the smart wound dressing concept. This week defined pH as the main biomarker and set the project direction.",
    "goals": "Study clinical background, compare pH sensing options, and understand the smart dressing concept.",
    "keyFindings": [
      "Focused on the clinical need for diabetic wound monitoring, wound pH variation, sensor comparison, and the smart wound dressing concept. This week defined pH as the main biomarker and set the project direction.",
      "Defined wound pH as the main sensing parameter and selected a dressing-integrated monitoring approach."
    ],
    "decisions": "Defined wound pH as the main sensing parameter and selected a dressing-integrated monitoring approach.",
    "rejected": "Images/screenshots are not displayed on the website; the original folders are linked as external evidence only.",
    "nextWeek": "Move into pathology, flexible electronics, and similar-product research.",
    "evidence": "Google Drive resources for Week 01: https://drive.google.com/drive/folders/1tkGkRAXig2UpzIEpuL-YDCpxefRbUTq2?usp=drive_link"
  },
  {
    "id": 2,
    "label": "Week 02",
    "dates": "May 2026",
    "phase": "Clinical & Concept Research",
    "title": "Clinical Pathology and Wearable Sensor Research",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/15nu7y297LGzbr29fADAJ7siThBSDOKnj?usp=drive_link",
    "images": [
      { "src": "week2.png", "caption": "Week 02 uploaded folder evidence" }
    ],
    "folders": [
      "Flexible Circuit Print",
      "Robbins Basic Pathology",
      "Similar Product Details",
      "Wearable Sensor"
    ],
    "summary": "Reviewed wound healing biology using pathology references, explored flexible circuit printing, and studied wearable sensor designs. SmartHEAL and similar products were used as practical benchmarks.",
    "goals": "Connect the biomedical problem with a realistic wearable sensor design.",
    "keyFindings": [
      "Reviewed wound healing biology using pathology references, explored flexible circuit printing, and studied wearable sensor designs. SmartHEAL and similar products were used as practical benchmarks.",
      "Confirmed that flexible printed electronics are more suitable than rigid sensor assemblies for wound dressing integration."
    ],
    "decisions": "Confirmed that flexible printed electronics are more suitable than rigid sensor assemblies for wound dressing integration.",
    "rejected": "Images/screenshots are not displayed on the website; the original folders are linked as external evidence only.",
    "nextWeek": "Collect datasheets, fabrication company details, and similar device papers.",
    "evidence": "Google Drive resources for Week 02: https://drive.google.com/drive/folders/15nu7y297LGzbr29fADAJ7siThBSDOKnj?usp=drive_link"
  },
  {
    "id": 3,
    "label": "Week 03",
    "dates": "May 2026",
    "phase": "Resources & Components",
    "title": "Datasheets, pH Sensor Matrix and Similar Device Papers",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link",
    "images": [
      { "src": "week3.png", "caption": "Week 03 uploaded folder evidence" },
      { "src": "assets/research/sani_keyimage.jpg", "caption": "Sani et al. benchmark wound bioelectronic system" },
      { "src": "assets/research/sani_fig1.jpg", "caption": "Sani et al. Figure 1 — system design" },
      { "src": "assets/research/sani_fig2.jpg", "caption": "Sani et al. Figure 2 — sensor and electronics architecture" },
      { "src": "assets/research/sani_fig3.jpg", "caption": "Sani et al. Figure 3 — validation results" }
    ],
    "folders": [
      "Datasheets",
      "Links",
      "Medical Grade Fabrication Companies",
      "pH Sensor Matrix",
      "Similar Device Papers"
    ],
    "summary": "Collected component datasheets, technical links, medical fabrication company details, commercial pH sensor comparisons, and academic papers. This week created the evidence base for component selection.",
    "goals": "Gather engineering resources and compare suitable pH sensing technologies.",
    "keyFindings": [
      "Collected component datasheets, technical links, medical fabrication company details, commercial pH sensor comparisons, and academic papers. This week created the evidence base for component selection.",
      "Shortlisted a potentiometric PANI pH sensor approach and rejected costly/complex alternatives such as bare-die ISFET and optical readers."
    ],
    "decisions": "Shortlisted a potentiometric PANI pH sensor approach and rejected costly/complex alternatives such as bare-die ISFET and optical readers.",
    "rejected": "Images/screenshots are not displayed on the website; the original folders are linked as external evidence only.",
    "nextWeek": "Design the compact electronics module and select the fabrication route.",
    "evidence": "Google Drive resources for Week 03: https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link"
  },
  {
    "id": 4,
    "label": "Week 04",
    "dates": "May 2026",
    "phase": "Electronics Architecture",
    "title": "Fabrication Route and Coin-Size Electronics Brain",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/1TXObdQxO2R-fMgzQKd96bVRRzY6lFjVY?usp=drive_link",
    "images": [
      { "src": "week4.png", "caption": "Week 04 uploaded folder evidence" },
      { "src": "assets/research/sani_fig4.jpg", "caption": "Sani et al. Figure 4 — wound monitoring performance" },
      { "src": "assets/research/sani_fig5.jpg", "caption": "Sani et al. Figure 5 — stimulation / treatment results" },
      { "src": "assets/research/sani_fig6.jpg", "caption": "Sani et al. Figure 6 — healing outcome validation" }
    ],
    "folders": [
      "Fabrication Facility",
      "FYP Brain (Coin Size)"
    ],
    "summary": "Worked on the fabrication facility decision and the compact electronics module. The main system architecture was formed using ESP32-S3, ADS1115, INA333, TMP117, CR2032 and a low-power regulator.",
    "goals": "Decide the fabrication path and design the electronics brain for the wound patch.",
    "keyFindings": [
      "Worked on the fabrication facility decision and the compact electronics module. The main system architecture was formed using ESP32-S3, ADS1115, INA333, TMP117, CR2032 and a low-power regulator.",
      "Defined the coin-size electronics architecture and selected the main readout, processing, power and wireless blocks."
    ],
    "decisions": "Defined the coin-size electronics architecture and selected the main readout, processing, power and wireless blocks.",
    "rejected": "Images/screenshots are not displayed on the website; the original folders are linked as external evidence only.",
    "nextWeek": "Compare flexible PCB materials and prepare the fabrication/cost plan.",
    "evidence": "Google Drive resources for Week 04: https://drive.google.com/drive/folders/1TXObdQxO2R-fMgzQKd96bVRRzY6lFjVY?usp=drive_link"
  },
  {
    "id": 5,
    "label": "Week 05",
    "dates": "May 2026",
    "phase": "Materials & Fabrication",
    "title": "Flexible PCB Materials, PANI Methodology and Budget",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link",
    "images": [
      { "src": "week5.png", "caption": "Week 05 uploaded folder evidence" },
      { "src": "assets/research/rsc_d1ra08375a_fig1.jpg", "caption": "RSC Figure 1 — sensor/material concept" },
      { "src": "assets/research/rsc_d1ra08375a_fig2.jpg", "caption": "RSC Figure 2 — fabrication or characterization result" },
      { "src": "assets/research/rsc_d1ra08375a_fig3.jpg", "caption": "RSC Figure 3 — response curve / test result" },
      { "src": "assets/research/rsc_d1ra08375a_fig4.jpg", "caption": "RSC Figure 4 — material or device comparison" },
      { "src": "assets/research/rsc_d1ra08375a_fig5.jpg", "caption": "RSC Figure 5 — extended validation figure" }
    ],
    "folders": [
      "Comparison of FPCs",
      "Second Option FPCB",
      "Hand FPCB Cost",
      "Medical Fabrication Circuit Papers",
      "PANI Literature Review",
      "pH Methodology"
    ],
    "summary": "Compared flexible PCB material options, estimated fabrication cost, collected medical fabrication circuit papers, and prepared PANI pH sensor literature and methodology documents.",
    "goals": "Prepare the practical fabrication plan, budget and pH sensing methodology.",
    "keyFindings": [
      "Compared flexible PCB material options, estimated fabrication cost, collected medical fabrication circuit papers, and prepared PANI pH sensor literature and methodology documents.",
      "Finalised the PET/silver/PANI material direction and documented the low-cost hand fabrication methodology."
    ],
    "decisions": "Finalised the PET/silver/PANI material direction and documented the low-cost hand fabrication methodology.",
    "rejected": "Images/screenshots are not displayed on the website; the original folders are linked as external evidence only.",
    "nextWeek": "Begin prototype fabrication, testing and calibration work.",
    "evidence": "Google Drive resources for Week 05: https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link"
  },
  {
    "id": 6,
    "label": "Week 06",
    "dates": "June 2026",
    "phase": "Hardware Blueprint, Funding and Dataset Preparation",
    "title": "Week 06 — Hardware Blueprint, Tool Requirements and Funding Preparation",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/1VHAVonh6CWdAb2n48IBA_CDyLyqctYkE",
    "images": [
      { "src": "assets/research/petal_fig1.jpg", "caption": "PETAL Figure 1 — multiplexed wound sensor patch concept" },
      { "src": "assets/research/petal_fig2.jpg", "caption": "PETAL Figure 2 — sensor fabrication and sensing layout" },
      { "src": "assets/research/petal_fig3.jpg", "caption": "PETAL Figure 3 — colorimetric sensor response" },
      { "src": "assets/research/petal_fig4.jpg", "caption": "PETAL Figure 4 — data acquisition and analysis flow" },
      { "src": "assets/research/petal_fig5.jpg", "caption": "PETAL Figure 5 — wound assessment results" },
      { "src": "assets/research/petal_fig6.jpg", "caption": "PETAL Figure 6 — extended experimental validation" }
    ],
    "folders": [
      "All two model collaboration",
      "Funding for FYP",
      "Dataset making through papers",
      "NSF requirement of tools",
      "Screen-Printed Carbon-PANI method vs Cleanroom Microfabrication"
    ],
    "summary": "Week 06 converted the project from concept-level planning into a practical implementation roadmap. The work focused on preparing an integrated wound patch hardware/firmware blueprint, creating a structured workbook for transducer channels and electronics planning, comparing low-cost Carbon-PANI screen-printing against expensive cleanroom microfabrication, identifying fabrication and characterization equipment requirements, collecting wound-monitoring literature for dataset building, and completing a funding request form for prototype development.",
    "goals": "Prepare the implementation plan for a disposable flexible sensing patch and reusable coin-size electronics module; define the fabrication method, required tools, component/resource plan, budget justification, and literature/dataset evidence needed for the next prototype stage.",
    "keyFindings": [
      "Prepared a two-part system architecture: Stage A disposable flexible sensing patch and Stage B reusable coin-size electronics brain for signal conditioning, processing, telemetry and power.",
      "Developed a hardware and firmware blueprint covering transducer channels, a 12-contact ZIF/FFC pin map, AFE/MCU interfaces, PCB stack-up, calibration logic and multiplexed sampling sequence.",
      "Created a wound patch workbook containing transducer constants, BOM, pin map, PCB stack-up, live calibration sheet and sequencer timing parameters.",
      "Compared fabrication routes and identified the low-cost screen-printed Carbon-PANI method as more practical for the FYP than cleanroom-based elastomeric microfabrication.",
      "Prepared a tool and facility requirement list covering screen printing, potentiostat/galvanostat use, laser cutting, ultrasonic agitation, precision dispensing, spin coating/doctor blade processing and sterilization options.",
      "Completed a funding request document for the low-cost medical-grade smart wound monitoring patch prototype, including electronics, flexible PCB fabrication, biomedical consumables and nanomaterials.",
      "Collected wound-monitoring papers and figures to support dataset preparation, including multiplexed sensor patch, pH/temperature dressing and PANI-based wound monitoring references."
    ],
    "decisions": "Proceed with a locally feasible, low-cost screen-printed Carbon-PANI flexible patch strategy and keep the electronics as a separate reusable coin-size module. Use the Week 06 hardware blueprint and workbook as the main implementation planning documents for the next prototype stage.",
    "rejected": "Direct cleanroom-based gold/SEBS microfabrication was not selected as the main route because it is expensive and less accessible for undergraduate/local fabrication. Optical/colorimetric-only sensing was also not selected as the main route because it requires camera/image-processing support and does not provide direct electronic telemetry.",
    "nextWeek": "Move from planning to practical prototype work: finalize material purchasing, prepare the first screen-printed Carbon-PANI electrode samples, set up pH buffer calibration, begin analog front-end validation, and document real fabrication/testing evidence for Week 07.",
    "evidence": "Week 06 evidence includes the hardware blueprint markdown file, wound patch workbook, completed funding request form, fabrication comparison workbook, NSF tool/equipment requirement sheets, and wound-monitoring paper dataset folder."
  },
  {
    "id": 7,
    "label": "Week 07",
    "dates": "Coming soon",
    "phase": "Coming Soon",
    "title": "Week 07 — Coming Soon",
    "status": "Coming soon",
    "resourceLink": "#",
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 07 is reserved for upcoming project work. Details, resources, test results and design updates will be added after the work is completed.",
    "goals": "Upcoming work will be updated after completion.",
    "keyFindings": [
      "Coming soon."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "Coming soon.",
    "evidence": "Coming soon."
  },
  {
    "id": 8,
    "label": "Week 08",
    "dates": "Coming soon",
    "phase": "Coming Soon",
    "title": "Week 08 — Coming Soon",
    "status": "Coming soon",
    "resourceLink": "#",
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 08 is reserved for upcoming project work. Details, resources, test results and design updates will be added after the work is completed.",
    "goals": "Upcoming work will be updated after completion.",
    "keyFindings": [
      "Coming soon."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "Coming soon.",
    "evidence": "Coming soon."
  },
  {
    "id": 9,
    "label": "Week 09",
    "dates": "Coming soon",
    "phase": "Coming Soon",
    "title": "Week 09 — Coming Soon",
    "status": "Coming soon",
    "resourceLink": "#",
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 09 is reserved for upcoming project work. Details, resources, test results and design updates will be added after the work is completed.",
    "goals": "Upcoming work will be updated after completion.",
    "keyFindings": [
      "Coming soon."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "Coming soon.",
    "evidence": "Coming soon."
  },
  {
    "id": 10,
    "label": "Week 10",
    "dates": "Coming soon",
    "phase": "Coming Soon",
    "title": "Week 10 — Coming Soon",
    "status": "Coming soon",
    "resourceLink": "#",
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 10 is reserved for upcoming project work. Details, resources, test results and design updates will be added after the work is completed.",
    "goals": "Upcoming work will be updated after completion.",
    "keyFindings": [
      "Coming soon."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "Coming soon.",
    "evidence": "Coming soon."
  },
  {
    "id": 11,
    "label": "Week 11",
    "dates": "Coming soon",
    "phase": "Coming Soon",
    "title": "Week 11 — Coming Soon",
    "status": "Coming soon",
    "resourceLink": "#",
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 11 is reserved for upcoming project work. Details, resources, test results and design updates will be added after the work is completed.",
    "goals": "Upcoming work will be updated after completion.",
    "keyFindings": [
      "Coming soon."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "Coming soon.",
    "evidence": "Coming soon."
  },
  {
    "id": 12,
    "label": "Week 12",
    "dates": "Coming soon",
    "phase": "Coming Soon",
    "title": "Week 12 — Coming Soon",
    "status": "Coming soon",
    "resourceLink": "#",
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 12 is reserved for upcoming project work. Details, resources, test results and design updates will be added after the work is completed.",
    "goals": "Upcoming work will be updated after completion.",
    "keyFindings": [
      "Coming soon."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "Coming soon.",
    "evidence": "Coming soon."
  },
  {
    "id": 13,
    "label": "Week 13",
    "dates": "Coming soon",
    "phase": "Coming Soon",
    "title": "Week 13 — Coming Soon",
    "status": "Coming soon",
    "resourceLink": "#",
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 13 is reserved for upcoming project work. Details, resources, test results and design updates will be added after the work is completed.",
    "goals": "Upcoming work will be updated after completion.",
    "keyFindings": [
      "Coming soon."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "Coming soon.",
    "evidence": "Coming soon."
  },
  {
    "id": 14,
    "label": "Week 14",
    "dates": "Coming soon",
    "phase": "Coming Soon",
    "title": "Week 14 — Coming Soon",
    "status": "Coming soon",
    "resourceLink": "#",
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 14 is reserved for upcoming project work. Details, resources, test results and design updates will be added after the work is completed.",
    "goals": "Upcoming work will be updated after completion.",
    "keyFindings": [
      "Coming soon."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "Coming soon.",
    "evidence": "Coming soon."
  }
];

// ── TECHNICAL ARCHITECTURE ───────────────────────────────────
const ARCHITECTURE = {
  layers: [
    { id: "sensor", label: "Sensor Layer (FPCB Patch)", color: "#0E8B8B", components: ["PANI Working Electrode (pH)", "Ag/AgCl Reference Electrode", "TMP117 Digital Temperature Sensor", "Impedance Layer (Moisture)"], output: "mV-level potentiometric signals" },
    { id: "signal", label: "Signal Conditioning", color: "#2563C9", components: ["INA333 Instrumentation Amp (100 dB CMRR)", "TMP117 I²C Temperature Readout", "Anti-Aliasing Filter (100 Hz)"], output: "0–3.3 V clean analog" },
    { id: "adc", label: "ADC", color: "#7C3AED", components: ["ADS1115 16-bit I²C", "PGA ±256 mV", "4 channels"], output: "Digital stream @ up to 860 SPS" },
    { id: "mcu", label: "Brain / MCU", color: "#B45309", components: ["ESP32-S3 (240 MHz dual-core)", "Deep-sleep < 10 µA", "BLE 5.0 + Wi-Fi", "MCP4725 DAC (AC excitation)"], output: "Processed data packet" },
    { id: "comms", label: "Wireless Comms", color: "#C2410C", components: ["BLE 5.0 GATT", "Wi-Fi (OTA updates)"], output: "BLE advertisement → phone" },
    { id: "power", label: "Power", color: "#475569", components: ["CR2032 (220 mAh, 3.0 V)", "XC6206 LDO (1 µA Iq)", "100 µF bulk cap"], output: "Regulated 3.3 V, ~6–12 mo. life" }
  ]
};

// ── RESOURCES LIBRARY ────────────────────────────────────────
const RESOURCES = [
  { id:"w1drive", type:"document", title:"Week 01 Google Drive Resources", description:"Problem definition, pH variation, sensor comparison and smart wound dressing references.", week:1, tags:["drive","week 01"], link:"https://drive.google.com/drive/folders/1tkGkRAXig2UpzIEpuL-YDCpxefRbUTq2?usp=drive_link" },
  { id:"w2drive", type:"document", title:"Week 02 Google Drive Resources", description:"Clinical pathology, flexible circuit printing, wearable sensor and similar-product resources.", week:2, tags:["drive","week 02"], link:"https://drive.google.com/drive/folders/15nu7y297LGzbr29fADAJ7siThBSDOKnj?usp=drive_link" },
  { id:"w3drive", type:"document", title:"Week 03 Google Drive Resources", description:"Datasheets, links, fabrication companies, pH sensor matrix and similar device papers.", week:3, tags:["drive","week 03"], link:"https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link" },
  { id:"w4drive", type:"document", title:"Week 04 Google Drive Resources", description:"Fabrication facility resources and coin-size electronics brain design files.", week:4, tags:["drive","week 04"], link:"https://drive.google.com/drive/folders/1TXObdQxO2R-fMgzQKd96bVRRzY6lFjVY?usp=drive_link" },
  { id:"w5drive", type:"document", title:"Week 05 Google Drive Resources", description:"Flexible PCB comparison, PANI literature, pH methodology and cost estimation resources.", week:5, tags:["drive","week 05"], link:"https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link" },
  {
    id: "w6drive",
    type: "document",
    title: "Week 06 Google Drive Resources",
    description: "Hardware and firmware blueprint, wound patch workbook, funding request, tool/equipment requirement sheets, fabrication route comparison and wound-monitoring literature dataset resources.",
    week: 6,
    tags: ["drive", "week 06", "hardware blueprint", "funding", "fabrication", "dataset"],
    link: "https://drive.google.com/drive/folders/1VHAVonh6CWdAb2n48IBA_CDyLyqctYkE"
  },
  { id:"datasheetdrive", type:"datasheet", title:"Papers and Datasheets Drive Folder", description:"Shared Google Drive folder containing project papers and component datasheets.", week:"", tags:["datasheets","papers","drive"], link:"https://drive.google.com/drive/folders/1-xBttuHcKbzLprP1NRHI01qpF6mVDaKS?usp=drive_link" },
  { id:"papersdatasheetsdrive", type:"paper", title:"Project Papers Drive Folder", journal:"Google Drive", year:2026, relevance:"Drive folder containing the papers used for literature review and project justification.", tags:["papers","drive","references"], week:"", link:"https://drive.google.com/drive/folders/1-xBttuHcKbzLprP1NRHI01qpF6mVDaKS?usp=drive_link" },
  { id:"r1", type:"paper", title:"Shirzaei Sani et al. (2023)", journal:"Science Advances", year:2023, relevance:"Gold-standard PANI/Au potentiometric wound sensor at 59.7 mV/pH. Performance benchmark for this FYP.", tags:["PANI","potentiometric","benchmark"], week:3, link:"#" },
  { id:"r2", type:"paper", title:"Tang et al. (2021)", journal:"Micromachines", year:2021, relevance:"Accessible screen-printed PANI route; pH > 6.5 confirms biofilm infection.", tags:["screen printing","low-cost"], week:3, link:"#" },
  { id:"r3", type:"paper", title:"Iversen et al. (2022)", journal:"Biosensors", year:2022, relevance:"Fully printed SWCNT pH + hydration patch; confirms ESP32 readout feasibility.", tags:["printed","ESP32","PDMS"], week:3, link:"#" },
  { id:"e1", type:"excel", title:"pH Sensor Comparison Matrix", description:"5-technology comparison: optical, ISFET, antimony, microelectrodes, lab-grade.", week:1, tags:["pH sensor","comparison"], link:"documents/PH_Sensor_Matrix.xlsx" },
  { id:"e2", type:"excel", title:"Comparative Analysis: Shirzaei Sani vs Tang", description:"7-parameter paper comparison: sensor design, circuit, fabrication, cost, results.", week:3, tags:["literature","PANI"], link:"documents/Comparative_Analysis_Matrix.xlsx" },
  { id:"e3", type:"excel", title:"Shirzaei Sani vs Iversen Matrix", description:"10-feature electronics architecture comparison with FYP feasibility ratings.", week:3, tags:["electronics","MCU"], link:"documents/pH_Sensor_Analysis_Matrix_v2.xlsx" },
  { id:"e4", type:"excel", title:"Filtered Commercial pH Sensor Matrix", description:"14-parameter comparison: Microsens, Zimmer & Peacock, Sentron, PreSens.", week:3, tags:["commercial","ISFET"], link:"documents/Filterd_Best_PH_matrix_As_final.xlsx" },
  { id:"e5", type:"excel", title:"Flexible Medical PCB Materials Comparison", description:"6-sheet workbook: substrates, conductors, conductive polymers, PANI deep-dive.", week:5, tags:["PANI","materials","FPCB"], link:"documents/Flexible_Medical_PCB_Materials_Comparison.xlsx" },
  { id:"e6", type:"excel", title:"Coin Module Architecture Comparison", description:"10-sheet architecture workbook + complete BOM with LKR pricing.", week:4, tags:["ESP32","BOM","architecture"], link:"documents/Coin_Module_Architecture_Comparison.xlsx" },
  { id:"e7", type:"excel", title:"Hand FPCB Fabrication Guide (Sri Lanka)", description:"10-sheet protocol: PANI synthesis, screen printing, QC, safety, budget.", week:5, tags:["fabrication","synthesis"], link:"documents/Hand_FPCB_Fabrication_Guide_SriLanka_FYP.xlsx" },
  { id:"e8", type:"excel", title:"Project Budget Estimation (FX-linked)", description:"SL vs international price comparison; 20% contingency; ~LKR 20,000 target.", week:5, tags:["budget","procurement"], link:"documents/Budget_Estimation_FPCB_Wound_Sensor_FYP.xlsx" },
  { id:"e9", type:"excel", title:"Medical Fabrication Facility Comparison", description:"4 medical fabrication companies: Zimmer & Peacock, Microsens, Sentron, ADI.", week:3, tags:["fabrication","suppliers"], link:"documents/Facbrication_Facility.xlsx" }
];

// ── FILE ANALYSIS TABLE ──────────────────────────────────────
const FILE_ANALYSIS = [
  { name:"PH_Sensor_Matrix.xlsx", type:"Excel — Comparison", week:"Week 01/03", content:"pH sensor technology comparison (safety, accuracy, cost, interface)", importance:"Established wound pH target; shortlisted sensor technologies", section:"Weekly Progress / Resources" },
  { name:"Smart_Diabetic_Wound_Patch_Reference_Report.pdf", type:"PDF — Reference Report", week:"Week 01", content:"Smart wound patch state-of-the-art reference report", importance:"Defined the smart-dressing product concept", section:"Documents" },
  { name:"YouTube_links_and_Found_Similar_Product_Details.docx", type:"Doc — Links", week:"Week 02", content:"SmartHEAL (James Dyson Award), Euronews, PMC papers", importance:"Primary similar-product benchmark + foundational publications", section:"Video & References" },
  { name:"flexible_medical_pcb_materials.jsx", type:"Component — Design", week:"Week 02", content:"Interactive flexible PCB materials comparison component", importance:"Explored flexible substrate/conductor options", section:"Sensor Technology" },
  { name:"Facbrication_Facility.xlsx", type:"Excel — Vendor Analysis", week:"Week 03/04", content:"4 medical fabrication companies and their roles", importance:"Identified fabrication route and suppliers", section:"Weekly Progress / Resources" },
  { name:"Filterd_Best_PH_matrix_As_final.xlsx", type:"Excel — Sensor Filter", week:"Week 03", content:"14-parameter commercial pH sensor comparison", importance:"Shortlisted the flexible printed sensor; set target specs", section:"Sensor Technology" },
  { name:"Filtered_PH_matrix.xlsx", type:"Excel — Shortlist", week:"Week 03", content:"Intermediate filtered pH sensor shortlist", importance:"Filtering step before final selection", section:"Resources" },
  { name:"Most_Suitable_Dtasheet_compair.xlsx", type:"Excel — Datasheet Compare", week:"Week 03", content:"Datasheet-level comparison of suitable components", importance:"Verified components against requirements", section:"Datasheets" },
  { name:"Vertion_4_PH.xlsx", type:"Excel — Design Iteration", week:"Week 03", content:"Version 4 of the pH sensor design iteration", importance:"Documents iterative refinement", section:"Weekly Progress" },
  { name:"Comparative_Analysis_Matrix__Shirzaei_Sani_vs__Tang.xlsx", type:"Excel — Literature", week:"Week 03", content:"7-parameter Shirzaei Sani vs Tang comparison", importance:"Confirmed PANI architecture + accessible fabrication", section:"Research Gap / Resources" },
  { name:"pH_Sensor_Analysis_Matrix__Shirzaei_Sani_vs__Iversen_V2.xlsx", type:"Excel — Literature", week:"Week 03", content:"10-feature Shirzaei Sani vs Iversen comparison", importance:"Confirmed ESP32 + ADS1115 readout chain", section:"System Architecture" },
  { name:"TDS_Sensor_pH_303_ceramic.pdf", type:"PDF — Datasheet", week:"Week 03", content:"pH-303 ceramic reference sensor datasheet", importance:"Calibration reference component", section:"Datasheets" },
  { name:"Coin_Module_Architecture_Comparison.xlsx", type:"Excel — Architecture", week:"Week 04", content:"10-sheet electronics architecture + full BOM", importance:"Defined the coin-size 'brain' and complete BOM", section:"System Architecture" },
  { name:"Flexible_Medical_PCB_Materials_Comparison.xlsx", type:"Excel — Materials", week:"Week 05", content:"6-sheet materials workbook + PANI deep-dive", importance:"Justified PET + silver + PANI material stack", section:"Sensor Technology" },
  { name:"Hand_FPCB_Fabrication_Guide_SriLanka_FYP.xlsx", type:"Excel — Fabrication", week:"Week 05", content:"10-sheet DIY fabrication protocol + QC + safety", importance:"Reproducible hand-fabrication protocol", section:"Weekly Progress" },
  { name:"Budget_Estimation_FPCB_Wound_Sensor_FYP.xlsx", type:"Excel — Budget", week:"Week 05", content:"FX-linked SL vs international budget", importance:"Confirmed economic feasibility (~LKR 20,000)", section:"Budget" },
  { name:"PANI_pH_Sensor_Literature_Review_md.pdf", type:"PDF — Lit Review", week:"Week 05", content:"Consolidated PANI pH-sensor literature review", importance:"Theoretical backbone of sensing approach", section:"Documents" },
  { name:"pH_Sensing_Methodology_Document.pdf", type:"PDF — Methodology", week:"Week 05", content:"pH sensing methodology and calibration protocol", importance:"Defines measurement and calibration method", section:"Documents" },
  { name:"PANI_Wound_PCB_FYP_Technical_Reference.docx", type:"Doc — Technical Ref", week:"Cross-week", content:"Material science + electrochemistry reference", importance:"First-principles technical reference", section:"Documents" },
  { name:"PH_SEnsor_Matrix.pdf", type:"PDF — Matrix Export", week:"Week 01/03", content:"PDF export of pH sensor comparison matrix", importance:"Supervisor-friendly matrix view", section:"Documents" },
  { name:"Wound_Monitoring_System_Requirements_md.pdf", type:"PDF — Requirements", week:"Cross-week", content:"System requirements specification", importance:"Formal requirement definition", section:"Documents" },
  { name:"Engineering_Analysis_of_Wound_Healing_Dynamics_1.pdf", type:"PDF — Analysis", week:"Cross-week", content:"Engineering analysis of wound healing dynamics", importance:"Links pH to healing stages quantitatively", section:"Documents" },
  { name:"FYP_Fabrication__Authority_Guide.pdf", type:"PDF — Guide", week:"Week 05", content:"Fabrication routes and authority/regulatory guidance", importance:"Fabrication & compliance guidance", section:"Documents" }
];

// ── TESTING PLAN ──────────────────────────────────────────────
const TESTING = [
  { phase:"Phase 1", title:"PANI Synthesis QC", description:"Verify dark-green Emeraldine Salt colour, ink adhesion bead test on PET, and initial trace resistance.", status:"Planned" },
  { phase:"Phase 2", title:"Electrode Fabrication QC", description:"Trace resistance < 10 Ω/cm; Ag/AgCl colour check; OCP stability in 0.1 M KCl.", status:"Planned" },
  { phase:"Phase 3", title:"pH Calibration", description:"Three-point calibration (pH 4.00 / 7.00 / 9.18). Target ≥ 50 mV/pH, R² > 0.998.", status:"Planned" },
  { phase:"Phase 4", title:"Temperature Cross-Sensitivity", description:"OCP drift across 20–40 °C; apply Nernst temperature correction in firmware.", status:"Planned" },
  { phase:"Phase 5", title:"Full System Integration", description:"FPCB + coin PCB via ZIF connector; verify BLE data to phone; validate live pH display.", status:"Planned" },
  { phase:"Phase 6", title:"Simulated Wound Testing", description:"Test in simulated wound fluid (PBS, pH 5.0–8.5, 130 mM Cl⁻, 37 °C) vs reference meter.", status:"Planned" }
];

// ── FUTURE WORK ───────────────────────────────────────────────
const FUTURE_WORK = [
  "Complete physical fabrication: PANI synthesis, electrode printing and first calibration runs (Weeks 06+).",
  "Integrate electrochemical impedance spectroscopy for simultaneous moisture/ionic characterisation.",
  "Develop a companion smartphone app with healing-trend visualisation and infection alerts.",
  "Add multi-parameter sensing (uric acid, glucose, lactate) via enzyme-functionalised PANI composites.",
  "Explore PANI/Chitosan composites for combined sensing + antibacterial electroactive healing.",
  "Transition from hand-fabrication to professional FPCB fabrication for reproducibility.",
  "Add electrical stimulation (1 V, 100 Hz) for accelerated healing, replicating Shirzaei Sani et al.",
  "Longitudinal 7-day wear testing for drift, stability and biocompatibility."
];

// ── BUDGET SUMMARY ───────────────────────────────────────────
const BUDGET = {
  target: "≤ LKR 20,000",
  currency: "LKR (LKR/USD ≈ 328)",
  categories: [
    { name:"PANI Synthesis Chemicals", local:"LKR 1,300–1,700", notes:"Aniline, APS, HCl (Glorchem LK / Uni dept)" },
    { name:"Substrate & Consumables", local:"LKR 800–1,200", notes:"PET film, IPA, sandpaper, stencils" },
    { name:"Conductive Inks (Silver, Carbon)", local:"LKR 2,000–3,500", notes:"Silver ink best from LCSC" },
    { name:"Electronics (ESP32, ADS1115, etc.)", local:"LKR 4,000–5,500", notes:"LCSC/AliExpress + Lankatronics" },
    { name:"PCB Fabrication (Coin PCB)", local:"LKR 1,500–2,500", notes:"JLCPCB 2-layer circular" },
    { name:"Tools & Equipment", local:"LKR 2,500–5,000", notes:"Mostly borrowed from uni lab" },
    { name:"Buffer Solutions & pH Standards", local:"LKR 1,000–2,000", notes:"pH 4/7/9 calibration buffers" },
    { name:"Contingency (20%)", local:"~LKR 2,600–4,300", notes:"Recommended FYP buffer" }
  ],
  total: "≈ LKR 15,700–25,700 (target within LKR 20,000)"
};

// ============================================================
//  EXTENDED DATA — Videos · Datasheets · Documents · etc.
// ============================================================

const VIDEOS = [
  { title:"SmartHEAL — Smart Plaster Detects How Wounds Are Healing", source:"James Dyson Award 2022 (Reuters/Euronews)", type:"video", note:"The closest real-world product. Warsaw University of Technology students won the 2022 James Dyson Award International prize for a battery-free, RFID-based pH sensor printed into a wound dressing. Validates the dressing-integrated pH monitoring concept (Week 02).", link:"https://youtu.be/jOOnIGT55zk" },
  { title:"SmartHEAL — Official Project Page", source:"James Dyson Award", type:"reference", note:"RFID communication, battery-free operation, screen-printing + thermal transfer manufacturing, monitoring without dressing removal.", link:"https://www.jamesdysonaward.org/en-NZ/2022/project/smartheal" },
  { title:"Polish Students' Smart Sensor Dressing", source:"Euronews Health (Nov 2022)", type:"reference", note:"pH monitor printed on fabric, RFID antenna, smartphone communication, mass-producible at ~0.5 PLN per sensor.", link:"https://www.euronews.com/health/2022/11/29/polish-students-designed-a-smart-sensor-dressing-which-tells-doctors-how-well-a-wound-is-h" },
  { title:"James Dyson Foundation 2022 Annual Report", source:"James Dyson Foundation (PDF)", type:"reference", note:"SmartHEAL summary, problem statement, solution overview, RFID + pH sensing explanation.", link:"https://www.jamesdysonfoundation.co.uk/media/irtfk3ma/jdf_2022_annual-report_digital.pdf" }
];

const KEY_PUBLICATIONS = [
  { title:"Project Papers and Datasheets Drive Folder", repo:"Google Drive", note:"Shared folder containing the papers used for literature review and the datasheets used for component selection.", link:"https://drive.google.com/drive/folders/1-xBttuHcKbzLprP1NRHI01qpF6mVDaKS?usp=drive_link" },
  { title:"Wearable Sensors and Systems for Wound Healing-Related pH Detection", repo:"PMC8070747", note:"Foundational review: why wound pH matters, infected-wound pH ranges, electrochemical sensing, flexible wearable wound sensors.", link:"https://pmc.ncbi.nlm.nih.gov/articles/PMC8070747/" },
  { title:"Flexible Wearable Fully-Printed Smart Patch for pH and Hydration Sensing", repo:"PMC8852199", note:"Printed electronics, flexible fabrication, low-cost printable sensors, wearable patch integration (corresponds to Iversen analysis).", link:"https://pmc.ncbi.nlm.nih.gov/articles/PMC8852199/" }
];


const RESEARCH_IMAGES = [
  {
    title: "Sani et al. — Stretchable Wireless Wound Bioelectronic System",
    source: "Science Advances, 2023",
    note: "Extracted figure set from the wound monitoring and treatment paper used as the high-performance benchmark for this FYP.",
    link: "https://www.science.org/doi/10.1126/sciadv.adf7388",
    images: [
      { src: "assets/research/sani_keyimage.jpg", caption: "Key graphical image — wearable wound bioelectronic system" },
      { src: "assets/research/sani_fig1.jpg", caption: "Figure 1 — system design and wound patch concept" },
      { src: "assets/research/sani_fig2.jpg", caption: "Figure 2 — sensor and electronics architecture" },
      { src: "assets/research/sani_fig3.jpg", caption: "Figure 3 — experimental validation results" },
      { src: "assets/research/sani_fig4.jpg", caption: "Figure 4 — wound monitoring performance" },
      { src: "assets/research/sani_fig5.jpg", caption: "Figure 5 — wound treatment / stimulation results" },
      { src: "assets/research/sani_fig6.jpg", caption: "Figure 6 — biological validation and healing outcome" }
    ]
  },
  {
    title: "Battery-Free AI-Enabled Multiplexed Sensor Patch",
    source: "Science Advances, 2023",
    note: "Research figures used for dataset preparation and comparison with multiplexed wound-sensing approaches.",
    link: "#",
    images: [
      { src: "assets/research/petal_fig1.jpg", caption: "PETAL Figure 1 — multiplexed wound sensor patch concept" },
      { src: "assets/research/petal_fig2.jpg", caption: "PETAL Figure 2 — sensor fabrication and sensing layout" },
      { src: "assets/research/petal_fig3.jpg", caption: "PETAL Figure 3 — colorimetric sensor response" },
      { src: "assets/research/petal_fig4.jpg", caption: "PETAL Figure 4 — data acquisition and analysis flow" },
      { src: "assets/research/petal_fig5.jpg", caption: "PETAL Figure 5 — wound assessment results" },
      { src: "assets/research/petal_fig6.jpg", caption: "PETAL Figure 6 — extended experimental validation" }
    ]
  },
  {
    title: "RSC Paper — pH / Wound Sensor Reference Figures",
    source: "RSC Advances Reference Paper",
    note: "Extracted figures used as supporting visual evidence for wound pH sensing, materials, and sensor response comparison.",
    link: "#",
    images: [
      { src: "assets/research/rsc_d1ra08375a_fig1.jpg", caption: "RSC Figure 1 — sensor/material concept" },
      { src: "assets/research/rsc_d1ra08375a_fig2.jpg", caption: "RSC Figure 2 — fabrication or characterization result" },
      { src: "assets/research/rsc_d1ra08375a_fig3.jpg", caption: "RSC Figure 3 — response curve / test result" },
      { src: "assets/research/rsc_d1ra08375a_fig4.jpg", caption: "RSC Figure 4 — material or device comparison" },
      { src: "assets/research/rsc_d1ra08375a_fig5.jpg", caption: "RSC Figure 5 — extended validation figure" }
    ]
  }
];

const DATASHEETS = [
  { component:"Papers and Datasheets Drive Folder", role:"Google Drive folder for all selected component datasheets and papers used in the project.", category:"Drive Folder", link:"https://drive.google.com/drive/folders/1-xBttuHcKbzLprP1NRHI01qpF6mVDaKS?usp=drive_link" },
  { component:"ESP32-S3-WROOM-1", role:"MCU / Brain — BLE 5.0 + Wi-Fi, 240 MHz dual-core, deep-sleep 10 µA", category:"Microcontroller", link:"documents/datasheets/ESP32-S3_datasheet.pdf" },
  { component:"ADS1115", role:"16-bit I²C ADC — 7.8 µV resolution at ±256 mV PGA, 4 channels", category:"Data Converter", link:"documents/datasheets/ADS1115_datasheet.pdf" },
  { component:"INA333", role:"Instrumentation Amplifier — 100 dB CMRR, 25 µV offset, 0.1 µV/°C drift", category:"Analog Front-End", link:"documents/datasheets/INA333_datasheet.pdf" },
  { component:"TL071", role:"Optional buffer stage for analog test signals; temperature sensing is handled by TMP117", category:"Op-Amp", link:"documents/datasheets/TL071_datasheet.pdf" },
  { component:"XC6206P332", role:"LDO — 1 µA quiescent, 3.3 V fixed, CR2032-compatible", category:"Power", link:"documents/datasheets/XC6206_datasheet.pdf" },
  { component:"MCP4725", role:"12-bit I²C DAC — AC excitation for impedance moisture sensing", category:"Data Converter", link:"documents/datasheets/MCP4725_datasheet.pdf" },
  { component:"TMP117", role:"High-accuracy digital temperature sensor — I²C temperature measurement for wound surface monitoring and pH temperature compensation", category:"Sensor", link:"https://drive.google.com/drive/folders/1-xBttuHcKbzLprP1NRHI01qpF6mVDaKS?usp=drive_link" },
  { component:"pH-303 Ceramic Sensor", role:"Reference ceramic pH electrode — calibration cross-check", category:"Reference Sensor", link:"documents/datasheets/TDS_Sensor_pH_303_ceramic.pdf" }
];

const DOCUMENTS_LIB = [
  { title:"PANI Wound PCB — FYP Technical Reference", type:"Technical Reference", note:"Complete material science & electrochemistry reference: PANI synthesis, pH mechanism, Ag/AgCl theory, material stack, Sri Lanka sourcing.", link:"documents/PANI_Wound_PCB_FYP_Technical_Reference.pdf" },
  { title:"PANI pH Sensor — Literature Review (Week 05)", type:"Literature Review", note:"Consolidated literature review on PANI-based pH sensing for wound applications.", link:"documents/PANI_pH_Sensor_Literature_Review.pdf" },
  { title:"pH Sensing Methodology Document (Week 05)", type:"Methodology", note:"Detailed pH sensing methodology, calibration and measurement protocol.", link:"documents/pH_Sensing_Methodology_Document.pdf" },
  { title:"Smart Diabetic Wound Patch — Reference Report (Week 01)", type:"Reference Report", note:"Reference report on smart diabetic wound patch systems and state of the art.", link:"documents/Smart_Diabetic_Wound_Patch_Reference_Report.pdf" },
  { title:"Wound Monitoring System — Requirements", type:"Requirements Spec", note:"Formal system requirements specification.", link:"documents/Wound_Monitoring_System_Requirements.pdf" },
  { title:"Engineering Analysis of Wound Healing Dynamics", type:"Engineering Analysis", note:"Quantitative analysis of wound healing dynamics and pH correlation.", link:"documents/Engineering_Analysis_of_Wound_Healing_Dynamics.pdf" },
  { title:"FYP Fabrication & Authority Guide", type:"Fabrication Guide", note:"Fabrication routes and relevant authorities/regulations for Sri Lanka.", link:"documents/FYP_Fabrication_Authority_Guide.pdf" },
  { title:"pH Sensor Matrix (PDF export)", type:"Comparison Matrix", note:"PDF export of the pH sensor comparison matrix for easy viewing.", link:"documents/PH_Sensor_Matrix.pdf" }
];

const SIMILAR_PRODUCTS = [
  { name:"SmartHEAL", origin:"Warsaw Univ. of Technology (2022 James Dyson Award)", tech:"RFID, battery-free, screen-printed pH sensor in dressing", cost:"~0.5 PLN/sensor (mass production)", relevance:"Closest concept match — proves clinical viability. This FYP differs by using BLE (vs RFID) and active multi-parameter sensing (pH + temp + moisture)." },
  { name:"Shirzaei Sani Patch", origin:"Science Advances (2023)", tech:"PANI/Au potentiometric + stimulation + drug delivery", cost:"High (cleanroom)", relevance:"Performance benchmark (59.7 mV/pH). This FYP targets comparable sensitivity at a fraction of the cost via hand fabrication." },
  { name:"Commercial pH Probes", origin:"PreSens, Sentron, Unisense", tech:"Optical foil / ISFET / microelectrode", cost:"USD 450 – 1,500", relevance:"Establishes the affordability gap this FYP addresses; used as calibration benchmarks." }
];

const WOUND_PH_TABLE = [
  { state:"Normal skin surface", range:"4.5 – 5.5", interpretation:"Acid mantle; barrier function intact", flag:"ok" },
  { state:"Healthy acute wound (healing)", range:"5.5 – 6.5", interpretation:"Slightly acidic; favours re-epithelialisation", flag:"ok" },
  { state:"Chronic non-healing wound", range:"7.2 – 8.9", interpretation:"Alkaline; proteases upregulated, tissue damage", flag:"warn" },
  { state:"Infected wound", range:"7.4 – 9.0", interpretation:"Bacterial alkalisation; infection indicator", flag:"danger" },
  { state:"Necrotic tissue", range:"> 8.0", interpretation:"Severe alkaline shift; urgent debridement", flag:"danger" }
];

const FILE_CATEGORIES = [
  { category:"Research Papers", icon:"📄", count:"3 papers + 2 PMC reviews", support:"Scientific foundation and performance benchmarks (Shirzaei Sani, Tang, Iversen).", files:"Similar Device Papers (W03), Medical Fabrication Circuits Research Papers (W05)" },
  { category:"Clinical / Pathology", icon:"🧬", count:"1 source", support:"Grounds the project in real wound-healing biology and inflammation.", files:"Robbins Basic Pathology extractions (W02)" },
  { category:"Comparison Matrices (Excel)", icon:"📊", count:"8 workbooks", support:"Document every component/material decision with multi-parameter scoring.", files:"pH Sensor Matrix (W01/W03), FPC comparison (W05), Coin Module (W04)…" },
  { category:"Fabrication & Planning", icon:"🏗️", count:"3 documents", support:"Convert design into an executable, costed lab protocol.", files:"Hand-make FPCB Cost Estimate (W05), Fabrication Facility (W03/W04)" },
  { category:"Component Datasheets", icon:"🔧", count:"8 components", support:"Verify each IC meets requirements from the sensor specs.", files:"Datasheets folder (W03)" },
  { category:"Video / Product References", icon:"▶", count:"4 links", support:"Benchmark against SmartHEAL and validate market need.", files:"Similar Product Details (W02), Links (W03)" },
  { category:"Methodology / Lit Review", icon:"📚", count:"2 documents", support:"Consolidate sensing theory and measurement methodology.", files:"PANI Lit Review, pH Sensing Methodology (W05)" },
  { category:"Images & Evidence", icon:"🖼️", count:"5 week folders + 1 photo", support:"Visual proof of weekly work and lab progress.", files:"Week 01–05 folder screenshots" }
];