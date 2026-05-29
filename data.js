// ============================================================
//  data.js  –  FYP Portfolio: Smart Diabetic Wound pH Sensor
//  Edit this file to update all website content easily.
//  Weekly content below is reconstructed from the actual
//  Week 01–05 working folders (see assets/images/weekN.png).
// ============================================================

// ── PROJECT IDENTITY ────────────────────────────────────────
const PROJECT = {
  title: "Smart Diabetic Wound Monitoring Patch",
  subtitle: "A Hand-Fabricated Flexible PANI pH Sensor for Real-Time Chronic Wound Assessment",
  student: "VIKUM · e21430",                 // ← update to your full name
  degree: "B.Sc. in Electrical & Electronic Engineering",
  university: "University · Sri Lanka",       // ← update to your exact university
  year: "2025 – 2026",
  supervisor: "Project Supervisor (Department of EEE)",  // ← update
  tagline: "Bridging advanced biomedical sensing with accessible, low-cost fabrication for diabetic wound care in resource-limited settings.",
  githubRepo: "https://github.com/your-username/fyp-wound-sensor",  // ← update
  contactEmail: "your.email@university.lk",                          // ← update
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
    { icon: "🌡️", text: "NTC 10kΩ bead thermistor for wound surface temperature" },
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

// ── WEEKLY PROGRESS (5 WEEKS — from actual working folders) ──
// Each `image` is the screenshot of that week's resource folder.
// `folders` lists the actual sub-folders you created that week.
const WEEKS = [
  {
    id: 1,
    label: "Week 01",
    dates: "5 May",
    phase: "Problem Definition",
    title: "Defining the Problem: pH Variation, Sensor Landscape & the Smart Dressing Concept",
    image: "assets/images/week1.png",
    folders: ["PH VARIATIONS", "SENSOR COMPARISON", "SMART WOUND DRESSING"],
    summary: "Week 01 established the project's foundation. Three research folders were created: PH VARIATIONS (to understand how wound pH changes during healing and infection), SENSOR COMPARISON (to survey available pH sensing technologies), and SMART WOUND DRESSING (to study the overall product concept). Together these defined the core problem and confirmed wound pH as the central sensing parameter.",
    goals: "Identify the core biomedical problem, understand how wound pH varies across healing states, survey candidate sensing technologies, and study the smart wound dressing concept as a product.",
    keyFindings: [
      "Wound pH shifts from acidic (5.5–6.5, healthy) to alkaline (>7.0, infected) — establishing pH as a measurable early biomarker.",
      "A sensor comparison was started to weigh optical, ISFET, antimony, microelectrode and lab-grade pH technologies.",
      "The 'smart wound dressing' concept (a sensor integrated into a dressing, read without removal) was adopted as the product vision."
    ],
    decisions: "Selected wound pH as the primary sensing parameter and committed to a wound-dressing-integrated form factor rather than a benchtop probe.",
    rejected: "Benchtop / handheld probe form factors were set aside in favour of a wearable dressing-integrated approach.",
    nextWeek: "Move from the problem to its clinical and engineering foundations — study wound pathology, flexible circuit printing, similar products and wearable sensors.",
    evidence: "Folders: PH VARIATIONS, SENSOR COMPARISON, SMART WOUND DRESSING. Related files: PH_Sensor_Matrix, Smart_Diabetic_Wound_Patch_Reference_Report."
  },
  {
    id: 2,
    label: "Week 02",
    dates: "May",
    phase: "Clinical & Concept Research",
    title: "Clinical Pathology, Flexible Printing & Similar-Product Benchmarking",
    image: "assets/images/week2.png",
    folders: ["Flexible Circuit Print", "Robbins Basic Pathology – Textbook Extractions", "Similar Product Details", "Wearable Sensor"],
    summary: "Week 02 deepened the foundation in two directions at once — clinical and engineering. Extractions from Robbins Basic Pathology grounded the project in the actual biology of wound healing and inflammation, while the Flexible Circuit Print and Wearable Sensor folders explored how such a sensor could physically be made. A Similar Product Details folder benchmarked existing solutions (notably SmartHEAL, the 2022 James Dyson Award winner).",
    goals: "Build the clinical justification using pathology literature, understand flexible/printed circuit fabrication, and benchmark against existing similar products and wearable sensors.",
    keyFindings: [
      "Robbins Basic Pathology extractions confirmed the inflammatory and healing phases that drive wound pH change — strengthening the clinical rationale.",
      "Flexible circuit printing was identified as the realistic fabrication route for a conformable, low-cost dressing-integrated sensor.",
      "SmartHEAL (Warsaw University of Technology) was found as the closest real-world product: an RFID, battery-free, screen-printed pH sensor in a dressing — proving the concept's clinical viability.",
      "Wearable-sensor literature confirmed the need for an ultra-high-impedance buffer to read high-resistance pH electrodes."
    ],
    decisions: "Confirmed a printed flexible-substrate sensor as the fabrication direction and adopted SmartHEAL as the primary product benchmark to differentiate against.",
    rejected: "Rigid PCB and conventional electrode approaches were rejected as incompatible with a conformable wound dressing.",
    nextWeek: "Begin gathering the concrete engineering resources — datasheets, reference links, fabrication companies, a refined sensor matrix and similar-device papers.",
    evidence: "Folders: Flexible Circuit Print, Robbins Basic Pathology Extractions, Similar Product Details, Wearable Sensor. Related files: YouTube_links_and_Found_Similar_Product_Details, flexible_medical_pcb_materials."
  },
  {
    id: 3,
    label: "Week 03",
    dates: "May",
    phase: "Resource & Component Gathering",
    title: "Datasheets, Reference Links, Fabrication Companies & the pH Sensor Matrix",
    image: "assets/images/week3.png",
    folders: ["Datasheets", "Links", "Medical Graded Fabrication Company", "pH Sensor Matrix", "Similar Device Papers"],
    summary: "Week 03 shifted from concept to concrete engineering resources. Five folders were created: Datasheets (component electrical references), Links (curated online resources), Medical Graded Fabrication Company (potential suppliers/manufacturers), pH Sensor Matrix (a structured comparison of candidate pH sensors), and Similar Device Papers (the key academic comparisons). This week assembled the evidence base used for every later technical decision.",
    goals: "Collect component datasheets, identify medical-grade fabrication companies, build a structured pH sensor comparison matrix, and consolidate the most relevant academic papers.",
    keyFindings: [
      "A pH Sensor Matrix compared commercial options (e.g. Microsens SMD ISFET, Zimmer & Peacock flexible printed, Sentron bare-die ISFET, PreSens optical) on cost, accuracy, response time and wound safety.",
      "Medical-grade fabrication companies were catalogued: Zimmer & Peacock (printed electrodes), Microsens SA (SMD ISFET), Sentron (bare-die ISFET), Analog Devices (medical AFE).",
      "Similar-device papers (Shirzaei Sani, Tang, Iversen) were gathered to benchmark performance and feasibility.",
      "Datasheets were collected for the candidate readout components and a reference pH-303 ceramic sensor."
    ],
    decisions: "Shortlisted the flexible printed sensor (Zimmer & Peacock-style) as the most FYP-feasible commercial reference, and confirmed the potentiometric PANI direction over alternatives.",
    rejected: "Bare-die ISFET (custom quote, complex integration) and optical foil (slow 120 s response, expensive reader) were rejected for this FYP.",
    nextWeek: "Decide where/how the device will be fabricated and design the electronics 'brain' — the coin-size core module.",
    evidence: "Folders: Datasheets, Links, Medical Graded Fabrication Company, pH Sensor Matrix, Similar Device Papers. Related files: Facbrication_Facility, Filterd_Best_PH_matrix_As_final, Filtered_PH_matrix, Most_Suitable_Dtasheet_compair, Vertion_4_PH, Comparative_Analysis_Matrix, pH_Sensor_Analysis_Matrix_Iversen_V2, TDS_Sensor_pH_303_ceramic."
  },
  {
    id: 4,
    label: "Week 04",
    dates: "May",
    phase: "Fabrication & Electronics Core",
    title: "Fabrication Facility Decision & the Coin-Size 'FYP Brain'",
    image: "assets/images/week4.png",
    folders: ["Fabrication Facility", "FYP Brain (Coin Size)"],
    summary: "Week 04 narrowed to two decisive folders: Fabrication Facility (how and where the sensor will be built) and FYP Brain (Coin Size) — the design of the compact electronics core. This week produced the system architecture and the complete bill of materials for the coin-size module that reads, processes and transmits the sensor signals.",
    goals: "Decide the fabrication facility/route and design the coin-size electronics 'brain' — selecting MCU, ADC, instrumentation amplifier, power supply and communications.",
    keyFindings: [
      "Coin-size 'brain' architecture defined: ESP32-S3 (MCU, BLE 5.0 + Wi-Fi) + ADS1115 (16-bit ADC) + INA333 (instrumentation amp) + NTC (temperature) + CR2032 (power) + XC6206 (LDO).",
      "ADS1115 (7.8 µV resolution) was chosen over the ESP32 internal 12-bit ADC (1.2 mV) — roughly 150× finer, essential for resolving 59 mV/pH.",
      "INA333 selected for 100 dB CMRR, 25 µV offset and 3.3 V single-supply operation.",
      "XC6206 LDO (1 µA quiescent) chosen for CR2032 compatibility; AMS1117 explicitly rejected (1.2 V dropout).",
      "Target board: 20 mm circular, 2-layer, 0.8 mm — stacking directly above a CR2032 cell."
    ],
    decisions: "Finalised the coin-size electronics architecture and BOM (~USD 12 / ~LKR 3,900 for the electronics core), and committed to in-house / contract-printed fabrication rather than full cleanroom processing.",
    rejected: "nRF52840 (no Wi-Fi for OTA), RP2040 (no wireless), AMS1117 LDO, and ESP32-internal-ADC-only approaches were rejected.",
    nextWeek: "Compare flexible PCB options in detail, estimate the hand-made FPCB cost, and consolidate the PANI sensing methodology.",
    evidence: "Folders: Fabrication Facility, FYP Brain (Coin Size). Related files: Facbrication_Facility, Coin_Module_Architecture_Comparison."
  },
  {
    id: 5,
    label: "Week 05",
    dates: "May",
    phase: "FPCB Comparison & Costing",
    title: "Flexible PCB Comparison, Hand-Made FPCB Costing & Methodology Consolidation",
    image: "assets/images/week5.png",
    folders: ["Comparison of FPCs", "Hand-make FPCB Cost Estimate", "Medical Fabrication Circuits Research Papers", "Second Option FPCB", "PANI_pH_Sensor_Literature_Review.pdf", "pH Sensing Methodology Document.pdf"],
    summary: "Week 05 brought the design toward execution. Flexible PCB options were compared (Comparison of FPCs, Second Option FPCB), the cost of hand-making an FPCB was estimated, medical fabrication-circuit research papers were collected, and two consolidated documents were produced: a PANI pH-sensor literature review and a pH sensing methodology document. This week effectively defined how the sensor would be built, what it would cost, and the exact measurement methodology.",
    goals: "Compare flexible PCB material/process options, estimate hand-made FPCB cost, gather medical fabrication-circuit research, and consolidate the PANI literature review and pH sensing methodology.",
    keyFindings: [
      "Flexible substrate/material comparison confirmed the PET + silver-ink + carbon + PANI + Ag/AgCl stack as the optimal low-cost choice; PANI is the only intrinsically pH-responsive conductive polymer.",
      "A hand-made FPCB cost estimate showed local synthesis chemicals (Glorchem LK) are 5–12× cheaper than international suppliers, keeping the prototype within ~LKR 15,000–20,000.",
      "A 'Second Option FPCB' (commercial / contract-printed) was documented as a fallback to the hand-made route.",
      "The PANI pH-sensor literature review and pH sensing methodology document consolidated the theory: V_cell = K − 59 mV·pH (PANI WE vs Ag/AgCl RE)."
    ],
    decisions: "Adopted hand-fabrication as the primary route (with a documented commercial 'second option' fallback) and locked in the PET-based material stack and three-point (pH 4/7/9) calibration methodology.",
    rejected: "A fully cleanroom-fabricated FPCB was rejected on cost/access grounds; retained only as an aspirational future upgrade.",
    nextWeek: "Begin physical fabrication: PANI synthesis, electrode screen-printing, and first calibration runs. (Weeks 06+ not yet completed.)",
    evidence: "Folders: Comparison of FPCs, Hand-make FPCB Cost Estimate, Medical Fabrication Circuits Research Papers, Second Option FPCB. Documents: PANI_pH_Sensor_Literature_Review.pdf, pH_Sensing_Methodology_Document.pdf. Related files: Flexible_Medical_PCB_Materials_Comparison, Budget_Estimation_FPCB_Wound_Sensor_FYP, Hand_FPCB_Fabrication_Guide_SriLanka_FYP."
  }
];

// ── TECHNICAL ARCHITECTURE ───────────────────────────────────
const ARCHITECTURE = {
  layers: [
    { id: "sensor", label: "Sensor Layer (FPCB Patch)", color: "#0E8B8B", components: ["PANI Working Electrode (pH)", "Ag/AgCl Reference Electrode", "NTC Bead (Temperature)", "Impedance Layer (Moisture)"], output: "mV-level potentiometric signals" },
    { id: "signal", label: "Signal Conditioning", color: "#2563C9", components: ["INA333 Instrumentation Amp (100 dB CMRR)", "TL071 Buffer (NTC)", "Anti-Aliasing Filter (100 Hz)"], output: "0–3.3 V clean analog" },
    { id: "adc", label: "ADC", color: "#7C3AED", components: ["ADS1115 16-bit I²C", "PGA ±256 mV", "4 channels"], output: "Digital stream @ up to 860 SPS" },
    { id: "mcu", label: "Brain / MCU", color: "#B45309", components: ["ESP32-S3 (240 MHz dual-core)", "Deep-sleep < 10 µA", "BLE 5.0 + Wi-Fi", "MCP4725 DAC (AC excitation)"], output: "Processed data packet" },
    { id: "comms", label: "Wireless Comms", color: "#C2410C", components: ["BLE 5.0 GATT", "Wi-Fi (OTA updates)"], output: "BLE advertisement → phone" },
    { id: "power", label: "Power", color: "#475569", components: ["CR2032 (220 mAh, 3.0 V)", "XC6206 LDO (1 µA Iq)", "100 µF bulk cap"], output: "Regulated 3.3 V, ~6–12 mo. life" }
  ]
};

// ── RESOURCES LIBRARY ────────────────────────────────────────
const RESOURCES = [
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
  { name:"FYP_Fabrication__Authority_Guide.pdf", type:"PDF — Guide", week:"Week 05", content:"Fabrication routes and authority/regulatory guidance", importance:"Fabrication & compliance guidance", section:"Documents" },
  { name:"WhatsApp_Image_20260509...jpeg", type:"Image — Photo", week:"Week 05", content:"Project work photograph", importance:"Visual evidence of progress", section:"Resources" }
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
  { title:"Wearable Sensors and Systems for Wound Healing-Related pH Detection", repo:"PMC8070747", note:"Foundational review: why wound pH matters, infected-wound pH ranges, electrochemical sensing, flexible wearable wound sensors.", link:"https://pmc.ncbi.nlm.nih.gov/articles/PMC8070747/" },
  { title:"Flexible Wearable Fully-Printed Smart Patch for pH and Hydration Sensing", repo:"PMC8852199", note:"Printed electronics, flexible fabrication, low-cost printable sensors, wearable patch integration (corresponds to Iversen analysis).", link:"https://pmc.ncbi.nlm.nih.gov/articles/PMC8852199/" }
];

const DATASHEETS = [
  { component:"ESP32-S3-WROOM-1", role:"MCU / Brain — BLE 5.0 + Wi-Fi, 240 MHz dual-core, deep-sleep 10 µA", category:"Microcontroller", link:"documents/datasheets/ESP32-S3_datasheet.pdf" },
  { component:"ADS1115", role:"16-bit I²C ADC — 7.8 µV resolution at ±256 mV PGA, 4 channels", category:"Data Converter", link:"documents/datasheets/ADS1115_datasheet.pdf" },
  { component:"INA333", role:"Instrumentation Amplifier — 100 dB CMRR, 25 µV offset, 0.1 µV/°C drift", category:"Analog Front-End", link:"documents/datasheets/INA333_datasheet.pdf" },
  { component:"TL071", role:"Unity-gain buffer for NTC thermistor divider output", category:"Op-Amp", link:"documents/datasheets/TL071_datasheet.pdf" },
  { component:"XC6206P332", role:"LDO — 1 µA quiescent, 3.3 V fixed, CR2032-compatible", category:"Power", link:"documents/datasheets/XC6206_datasheet.pdf" },
  { component:"MCP4725", role:"12-bit I²C DAC — AC excitation for impedance moisture sensing", category:"Data Converter", link:"documents/datasheets/MCP4725_datasheet.pdf" },
  { component:"NTC 10kΩ B3950", role:"Temperature sensor — flexible 2 mm bead, 20–45 °C", category:"Sensor", link:"documents/datasheets/NTC_10k_B3950.pdf" },
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
