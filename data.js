// ============================================================
//  data.js  –  FYP Portfolio: Smart Diabetic Wound pH Sensor
//  Edit this file to update all website content easily.
//  Weekly content below is reconstructed from the actual
//  Week 01–05 working folders are linked through Google Drive resource folders.
// ============================================================

// ── PROJECT IDENTITY ────────────────────────────────────────
const PROJECT = {
  title: "Smart Diabetic Wound Monitoring Patch",
  subtitle: "A Flexible PANI pH, Moisture and TMP117 Temperature Monitoring Patch for Chronic Wound Assessment",
  student: "Final Year Project Portfolio",
  degree: "B.Sc. in Electrical & Electronic Engineering",
  university: "University of Peradeniya, Sri Lanka",
  year: "2025 – 2026",
  departmentSupervisor: "Dr. Ruwan Ranaweera — Department Supervisor, University of Peradeniya",
  medicalSupervisor: "Dr. Manjula Peiris — Medical Faculty Supervisor, University of Peradeniya",
  supervisor: "Department Supervisor: Dr. Ruwan Ranaweera · Medical Faculty Supervisor: Dr. Manjula Peiris · University of Peradeniya",
  tagline: "Bridging biomedical sensing, flexible electronics and low-cost fabrication for diabetic wound care.",
  githubRepo: "#",
  contactEmail: "kkgtharushigimhani@gmail.com",
  datasheetDrive: "https://drive.google.com/drive/folders/1x7yPC0FFnY04jbxwv78BcZvNjyxhlzZH?usp=drive_link"
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

// ── WEEKLY PROGRESS (5 WEEKS — from actual working folders) ──
// `folders` lists the actual sub-folders created that week.
// `driveLink` stores the accessible resource folder for that week.
const WEEKS = [
  {
    id: 1,
    label: "Week 01",
    dates: "5 May",
    phase: "Problem Definition",
    title: "Problem Study, Wound pH Variation and Sensor Direction",
    driveLink: "https://drive.google.com/drive/folders/1tkGkRAXig2UpzIEpuL-YDCpxefRbUTq2?usp=drive_link",
    folders: ["PH VARIATIONS", "SENSOR COMPARISON", "SMART WOUND DRESSING"],
    summary: "The first week was used to understand the real clinical problem and decide which wound parameter should be monitored. The work focused on pH variation in wounds, comparison of different pH sensor types, and early study of smart wound dressing systems.",
    goals: "Identify the main biomedical problem, understand the importance of wound pH, compare possible sensing approaches, and define the initial smart dressing concept.",
    keyFindings: [
      "Healthy wounds usually remain closer to acidic conditions, while infected or delayed-healing wounds tend to shift toward alkaline pH.",
      "pH was selected as a strong early indication parameter because it can change before visible wound deterioration is obvious.",
      "The smart wound dressing concept was selected instead of a separate handheld measurement method."
    ],
    decisions: "Selected wound pH as the main sensing parameter and selected a wearable dressing-based monitoring direction.",
    rejected: "A normal external pH probe or benchtop-only method was not selected because it does not support continuous monitoring.",
    nextWeek: "Continue with clinical background, flexible circuit printing and existing smart dressing product studies.",
    evidence: "Resource folders include PH VARIATIONS, SENSOR COMPARISON and SMART WOUND DRESSING."
  },
  {
    id: 2,
    label: "Week 02",
    dates: "May",
    phase: "Clinical & Concept Research",
    title: "Clinical Background, Flexible Circuits and Similar Product Review",
    driveLink: "https://drive.google.com/drive/folders/15nu7y297LGzbr29fADAJ7siThBSDOKnj?usp=drive_link",
    folders: ["Flexible Circuit Print", "Pathology References", "Similar Product Details", "Wearable Sensor"],
    summary: "The second week connected the medical background with the engineering design. Clinical references were studied to understand wound healing, while flexible circuit printing and wearable sensor examples were reviewed to decide how the sensor could be made as a patch.",
    goals: "Study wound pathology, learn the basics of flexible printed circuits, and compare similar smart wound dressing products.",
    keyFindings: [
      "A wound patch must be flexible, thin and safe for skin-contact use.",
      "Existing smart dressing examples show that pH sensing can be combined with wireless monitoring.",
      "Flexible printed electronics are more suitable than rigid PCB-only designs for wound contact areas."
    ],
    decisions: "Kept the project as a flexible wound patch with a small separate electronics module.",
    rejected: "A fully rigid board on the wound area was avoided because it is uncomfortable and unsuitable for dressing integration.",
    nextWeek: "Move into detailed research paper comparison, datasheet collection and component-level selection.",
    evidence: "Resource folders include Flexible Circuit Print, clinical/pathology references, Similar Product Details and Wearable Sensor."
  },
  {
    id: 3,
    label: "Week 03",
    dates: "May",
    phase: "Literature & Component Selection",
    title: "Research Paper Comparison, Datasheet Collection and Sensor Shortlisting",
    driveLink: "https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link",
    folders: ["Research Papers", "Datasheets", "Sensor Matrices", "Commercial Sensor Comparison"],
    summary: "The third week focused on evidence-based selection. Research papers and commercial sensor information were compared, and datasheets were collected to check whether the selected components could meet the required measurement accuracy and practical constraints.",
    goals: "Compare PANI-based wound pH papers, review commercial pH sensor options, collect datasheets and shortlist components for the prototype.",
    keyFindings: [
      "PANI with Ag/AgCl reference electrode is suitable for potentiometric pH sensing in wound monitoring.",
      "A 16-bit ADC is useful because the pH signal is in the millivolt range.",
      "Commercial wound sensors are useful as references but are not suitable for a low-cost university-built prototype."
    ],
    decisions: "Selected a PANI potentiometric pH sensor direction with ADS1115 ADC and instrumentation-amplifier based readout.",
    rejected: "Expensive commercial complete wound monitoring systems were used only as benchmarks, not as the selected implementation.",
    nextWeek: "Design the electronics architecture and compare the coin-sized module options.",
    evidence: "Resource folders include paper comparisons, component datasheets and sensor selection matrices."
  },
  {
    id: 4,
    label: "Week 04",
    dates: "May",
    phase: "Electronics Architecture",
    title: "Coin-Size Electronics Module and System Architecture Design",
    driveLink: "https://drive.google.com/drive/folders/1TXObdQxO2R-fMgzQKd96bVRRzY6lFjVY?usp=drive_link",
    folders: ["Coin Module Architecture", "BOM", "Wireless and Power Study"],
    summary: "The fourth week converted the sensing idea into an electronics system. The main signal chain, microcontroller, wireless method, ADC, power source and module size were compared to create a practical coin-sized electronics architecture.",
    goals: "Define the analog front-end, ADC, microcontroller, wireless communication, power supply and physical electronics module concept.",
    keyFindings: [
      "ESP32-S3 is suitable because it provides BLE communication and enough processing capability.",
      "ADS1115 is a practical ADC choice for low-level pH voltage measurement.",
      "A separate small electronics module is more realistic than placing all parts directly on the wound-contact flexible patch."
    ],
    decisions: "Selected ESP32-S3, ADS1115, INA333, TMP117 temperature sensing, BLE communication and coin-cell-based low-power operation as the main architecture.",
    rejected: "Large development boards were not selected for the final wearable module because of size and power limitations.",
    nextWeek: "Finalize flexible PCB material choices, fabrication approach and budget estimation.",
    evidence: "Resource folder includes the coin module architecture comparison and related BOM/electronics design files."
  },
  {
    id: 5,
    label: "Week 05",
    dates: "May",
    phase: "Fabrication & Budget",
    title: "Flexible PCB Materials, Hand Fabrication Method and Cost Planning",
    driveLink: "https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link",
    folders: ["Flexible Medical PCB Materials", "Hand FPCB Fabrication", "Budget Estimate", "PANI Methodology"],
    summary: "The fifth week focused on how the prototype can actually be built. Flexible substrate materials, conductive layers, PANI preparation, screen-printing steps, quality checking and budget estimation were organized into a practical fabrication plan.",
    goals: "Select suitable flexible materials, prepare a low-cost fabrication method, estimate the budget and prepare the next steps for prototype development.",
    keyFindings: [
      "PET film is a practical low-cost flexible substrate for the first prototype.",
      "PANI can be prepared and used as the pH-sensitive layer with a controlled fabrication method.",
      "The prototype cost can be kept realistic by using locally available materials where possible."
    ],
    decisions: "Selected PET substrate, screen-printing/hand fabrication, PANI pH layer and budget-controlled prototyping as the working path.",
    rejected: "Cleanroom-only and high-cost fabrication routes were avoided for the first university prototype.",
    nextWeek: "Start prototype planning, prepare detailed circuit implementation and begin initial fabrication preparation.",
    evidence: "Resource folder includes flexible medical PCB material comparison, hand fabrication guide, budget estimate and PANI pH methodology documents."
  },
  {
    id: 6,
    label: "Week 06",
    dates: "Coming soon",
    phase: "Coming Soon",
    title: "Circuit Implementation and Prototype Preparation",
    driveLink: "",
    folders: ["COMING SOON"],
    summary: "Coming soon — this week will document the practical circuit implementation plan and first prototype preparation steps.",
    goals: "Prepare schematic-level implementation, component layout and testing plan.",
    keyFindings: ["This section will be updated after Week 06 work is completed."],
    decisions: "Coming soon.",
    rejected: "Coming soon.",
    nextWeek: "Continue toward sensor fabrication and calibration setup.",
    evidence: "Coming soon."
  },
  {
    id: 7,
    label: "Week 07",
    dates: "Coming soon",
    phase: "Coming Soon",
    title: "Sensor Fabrication Trial",
    driveLink: "",
    folders: ["COMING SOON"],
    summary: "Coming soon — planned for initial sensor layer preparation and fabrication trial documentation.",
    goals: "Start first fabrication trial and record materials, tools and observations.",
    keyFindings: ["This section will be updated after Week 07 work is completed."],
    decisions: "Coming soon.",
    rejected: "Coming soon.",
    nextWeek: "Move toward calibration and early testing.",
    evidence: "Coming soon."
  },
  {
    id: 8,
    label: "Week 08",
    dates: "Coming soon",
    phase: "Coming Soon",
    title: "Calibration Setup and Buffer Testing",
    driveLink: "",
    folders: ["COMING SOON"],
    summary: "Coming soon — planned for pH buffer preparation, calibration setup and first sensor response checking.",
    goals: "Prepare pH calibration method and test sensor voltage response.",
    keyFindings: ["This section will be updated after Week 08 work is completed."],
    decisions: "Coming soon.",
    rejected: "Coming soon.",
    nextWeek: "Improve measurement stability and repeatability.",
    evidence: "Coming soon."
  },
  {
    id: 9,
    label: "Week 09",
    dates: "Coming soon",
    phase: "Coming Soon",
    title: "Electronics Testing and Data Acquisition",
    driveLink: "",
    folders: ["COMING SOON"],
    summary: "Coming soon — planned for ADC, temperature sensor and microcontroller data acquisition testing.",
    goals: "Verify ADS1115 readings, TMP117 temperature readings and ESP32-S3 communication.",
    keyFindings: ["This section will be updated after Week 09 work is completed."],
    decisions: "Coming soon.",
    rejected: "Coming soon.",
    nextWeek: "Integrate sensing and wireless transmission.",
    evidence: "Coming soon."
  },
  {
    id: 10,
    label: "Week 10",
    dates: "Coming soon",
    phase: "Coming Soon",
    title: "Wireless Communication and Display Integration",
    driveLink: "",
    folders: ["COMING SOON"],
    summary: "Coming soon — planned for BLE data transfer and user-side reading/display method.",
    goals: "Send measured pH, temperature and moisture values wirelessly and display them clearly.",
    keyFindings: ["This section will be updated after Week 10 work is completed."],
    decisions: "Coming soon.",
    rejected: "Coming soon.",
    nextWeek: "Test the full prototype as one system.",
    evidence: "Coming soon."
  },
  {
    id: 11,
    label: "Week 11",
    dates: "Coming soon",
    phase: "Coming Soon",
    title: "Full System Integration",
    driveLink: "",
    folders: ["COMING SOON"],
    summary: "Coming soon — planned for combining the sensor patch, electronics, firmware and wireless output.",
    goals: "Integrate all modules and identify practical problems in the full prototype.",
    keyFindings: ["This section will be updated after Week 11 work is completed."],
    decisions: "Coming soon.",
    rejected: "Coming soon.",
    nextWeek: "Carry out repeated testing and improvements.",
    evidence: "Coming soon."
  },
  {
    id: 12,
    label: "Week 12",
    dates: "Coming soon",
    phase: "Coming Soon",
    title: "Repeatability, Stability and Error Analysis",
    driveLink: "",
    folders: ["COMING SOON"],
    summary: "Coming soon — planned for repeated measurements, stability observation and error analysis.",
    goals: "Check repeatability, drift, temperature effect and measurement error.",
    keyFindings: ["This section will be updated after Week 12 work is completed."],
    decisions: "Coming soon.",
    rejected: "Coming soon.",
    nextWeek: "Improve prototype and prepare final demonstration results.",
    evidence: "Coming soon."
  },
  {
    id: 13,
    label: "Week 13",
    dates: "Coming soon",
    phase: "Coming Soon",
    title: "Final Improvements and Demonstration Preparation",
    driveLink: "",
    folders: ["COMING SOON"],
    summary: "Coming soon — planned for final design improvements, result organization and presentation preparation.",
    goals: "Finalize the prototype demonstration and prepare final figures, tables and explanations.",
    keyFindings: ["This section will be updated after Week 13 work is completed."],
    decisions: "Coming soon.",
    rejected: "Coming soon.",
    nextWeek: "Complete final report and portfolio update.",
    evidence: "Coming soon."
  },
  {
    id: 14,
    label: "Week 14",
    dates: "Coming soon",
    phase: "Coming Soon",
    title: "Final Portfolio, Report and Submission Preparation",
    driveLink: "",
    folders: ["COMING SOON"],
    summary: "Coming soon — final week placeholder for completed report, portfolio update and final submission evidence.",
    goals: "Prepare the final documented portfolio, report content and submission-ready material.",
    keyFindings: ["This section will be updated after Week 14 work is completed."],
    decisions: "Coming soon.",
    rejected: "Coming soon.",
    nextWeek: "Project completion and final presentation.",
    evidence: "Coming soon."
  }
];

// ── TECHNICAL ARCHITECTURE ───────────────────────────────────
const ARCHITECTURE = {
  layers: [
    { id: "sensor", label: "Sensor Layer (FPCB Patch)", color: "#0E8B8B", components: ["PANI Working Electrode (pH)", "Ag/AgCl Reference Electrode", "TMP117 Digital Temperature Sensor", "Impedance Layer (Moisture)"], output: "mV-level potentiometric signals" },
    { id: "signal", label: "Signal Conditioning", color: "#2563C9", components: ["INA333 Instrumentation Amp (100 dB CMRR)", "TMP117 I²C Digital Temperature Readout", "Anti-Aliasing Filter (100 Hz)"], output: "0–3.3 V clean analog" },
    { id: "adc", label: "ADC", color: "#7C3AED", components: ["ADS1115 16-bit I²C", "PGA ±256 mV", "4 channels"], output: "Digital stream @ up to 860 SPS" },
    { id: "mcu", label: "Brain / MCU", color: "#B45309", components: ["ESP32-S3 (240 MHz dual-core)", "Deep-sleep < 10 µA", "BLE 5.0 + Wi-Fi", "MCP4725 DAC (AC excitation)"], output: "Processed data packet" },
    { id: "comms", label: "Wireless Comms", color: "#C2410C", components: ["BLE 5.0 GATT", "Wi-Fi (OTA updates)"], output: "BLE advertisement → phone" },
    { id: "power", label: "Power", color: "#475569", components: ["CR2032 (220 mAh, 3.0 V)", "XC6206 LDO (1 µA Iq)", "100 µF bulk cap"], output: "Regulated 3.3 V, ~6–12 mo. life" }
  ]
};

// ── RESOURCES LIBRARY ────────────────────────────────────────
const RESOURCES = [
  { id:"r1", type:"paper", title:"Shirzaei Sani et al. (2023)", journal:"Science Advances", year:2023, relevance:"Gold-standard PANI/Au potentiometric wound sensor at 59.7 mV/pH. Performance benchmark for this FYP.", tags:["PANI","potentiometric","benchmark"], week:3, link:"https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link" },
  { id:"r2", type:"paper", title:"Tang et al. (2021)", journal:"Micromachines", year:2021, relevance:"Accessible screen-printed PANI route; pH > 6.5 confirms biofilm infection.", tags:["screen printing","low-cost"], week:3, link:"https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link" },
  { id:"r3", type:"paper", title:"Iversen et al. (2022)", journal:"Biosensors", year:2022, relevance:"Fully printed SWCNT pH + hydration patch; confirms ESP32 readout feasibility.", tags:["printed","ESP32","PDMS"], week:3, link:"https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link" },
  { id:"e1", type:"excel", title:"pH Sensor Comparison Matrix", description:"5-technology comparison: optical, ISFET, antimony, microelectrodes, lab-grade.", week:1, tags:["pH sensor","comparison"], link:"https://drive.google.com/drive/folders/1tkGkRAXig2UpzIEpuL-YDCpxefRbUTq2?usp=drive_link" },
  { id:"e2", type:"excel", title:"Comparative Analysis: Shirzaei Sani vs Tang", description:"7-parameter paper comparison: sensor design, circuit, fabrication, cost, results.", week:3, tags:["literature","PANI"], link:"https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link" },
  { id:"e3", type:"excel", title:"Shirzaei Sani vs Iversen Matrix", description:"10-feature electronics architecture comparison with FYP feasibility ratings.", week:3, tags:["electronics","MCU"], link:"https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link" },
  { id:"e4", type:"excel", title:"Filtered Commercial pH Sensor Matrix", description:"14-parameter comparison: Microsens, Zimmer & Peacock, Sentron, PreSens.", week:3, tags:["commercial","ISFET"], link:"https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link" },
  { id:"e5", type:"excel", title:"Flexible Medical PCB Materials Comparison", description:"6-sheet workbook: substrates, conductors, conductive polymers, PANI deep-dive.", week:5, tags:["PANI","materials","FPCB"], link:"https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link" },
  { id:"e6", type:"excel", title:"Coin Module Architecture Comparison", description:"10-sheet architecture workbook + complete BOM with LKR pricing.", week:4, tags:["ESP32","BOM","architecture"], link:"https://drive.google.com/drive/folders/1TXObdQxO2R-fMgzQKd96bVRRzY6lFjVY?usp=drive_link" },
  { id:"e7", type:"excel", title:"Hand FPCB Fabrication Guide (Sri Lanka)", description:"10-sheet protocol: PANI synthesis, screen printing, QC, safety, budget.", week:5, tags:["fabrication","synthesis"], link:"https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link" },
  { id:"e8", type:"excel", title:"Project Budget Estimation (FX-linked)", description:"SL vs international price comparison; 20% contingency; ~LKR 20,000 target.", week:5, tags:["budget","procurement"], link:"https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link" },
  { id:"e9", type:"excel", title:"Medical Fabrication Facility Comparison", description:"4 medical fabrication companies: Zimmer & Peacock, Microsens, Sentron, ADI.", week:3, tags:["fabrication","suppliers"], link:"https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link" }
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
  { component:"ESP32-S3-WROOM-1", role:"Main MCU — BLE 5.0, Wi‑Fi and deep-sleep control", category:"Microcontroller", link:PROJECT.datasheetDrive },
  { component:"ADS1115", role:"16-bit I²C ADC for low-level pH voltage measurement", category:"ADC", link:PROJECT.datasheetDrive },
  { component:"INA333", role:"Instrumentation amplifier for high-impedance pH signal conditioning", category:"Analog Front-End", link:PROJECT.datasheetDrive },
  { component:"TMP117", role:"High-accuracy digital temperature sensor for wound surface temperature and pH compensation", category:"Temperature Sensor", link:PROJECT.datasheetDrive },
  { component:"XC6206P332", role:"3.3 V low-quiescent-current LDO for coin-cell operation", category:"Power", link:PROJECT.datasheetDrive },
  { component:"MCP4725", role:"12-bit I²C DAC for optional AC excitation in moisture/impedance sensing", category:"Data Converter", link:PROJECT.datasheetDrive },
  { component:"pH-303 Ceramic Sensor", role:"Reference pH electrode for calibration cross-checking", category:"Reference Sensor", link:PROJECT.datasheetDrive }
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
  { category:"Weekly Drive Evidence", icon:"🔗", count:"5 Drive folders", support:"Accessible resource folders linked to each weekly progress card.", files:"Week 01–05 Google Drive resource folders" }
];
