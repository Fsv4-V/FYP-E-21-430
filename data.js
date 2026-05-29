// ============================================================
//  data.js  –  FYP Portfolio: Smart Diabetic Wound pH Sensor
//  Edit this file to update all website content easily.
//  Every section of the website pulls from objects below.
// ============================================================

// ── PROJECT IDENTITY ────────────────────────────────────────
const PROJECT = {
  title: "Smart Diabetic Wound Monitoring Patch",
  subtitle: "A Hand-Fabricated Flexible pH Sensor for Real-Time Chronic Wound Assessment",
  student: "EEE Undergraduate Researcher",
  degree: "B.Sc. in Electrical & Electronic Engineering",
  university: "University of Sri Lanka",  // ← update to your exact university (e.g. Univ. of Moratuwa / Kelaniya)
  year: "2025 – 2026",
  supervisor: "Project Supervisor (Department of EEE)",
  tagline: "Bridging advanced biomedical sensing with accessible, low-cost fabrication for diabetic wound care in resource-limited settings.",
  githubRepo: "https://github.com/your-username/fyp-wound-sensor",  // ← update this
  contactEmail: "your.email@university.lk",                          // ← update this
};

// ── ABSTRACT ─────────────────────────────────────────────────
const ABSTRACT = `
Chronic diabetic wounds affect over 463 million people globally, with wound pH being one of the most reliable 
early biomarkers of infection and healing status. This Final Year Project proposes and develops a coin-sized, 
hand-fabricated Flexible Printed Circuit Board (FPCB) wound monitoring patch that integrates a Polyaniline (PANI) 
potentiometric pH electrode, an Ag/AgCl solid-state reference electrode, an NTC thermistor for temperature, and 
a capacitive impedance layer for wound moisture assessment. The analog signal chain uses an INA333 
instrumentation amplifier for high-impedance pH signal buffering, a 16-bit ADS1115 ADC for precise digitisation, 
and an ESP32-S3 microcontroller for data processing and BLE 5.0 wireless transmission. All fabrication steps — 
from PANI synthesis to silver trace screen-printing — are designed to be reproducible within a Sri Lankan 
university laboratory with a project budget under LKR 20,000. This portfolio documents the full research-to-design 
journey from the initial problem identification through systematic literature review, component selection matrices, 
architecture evaluation, and fabrication planning.
`;

// ── PROBLEM STATEMENT ────────────────────────────────────────
const PROBLEM = {
  headline: "Why Wound pH Monitoring Matters",
  points: [
    {
      icon: "🩺",
      title: "Scale of the Problem",
      text: "Diabetic foot ulcers affect 15–25% of all diabetic patients. Over 80,000 lower-limb amputations are performed annually in South Asia, the majority of which are preventable with timely wound assessment."
    },
    {
      icon: "🔬",
      title: "pH as a Clinical Biomarker",
      text: "Healthy wound pH ranges from 5.5–6.5 (acidic). Infected chronic wounds shift to alkaline pH > 7.0, with biofilm formation detected reliably above pH 6.5 (Tang et al., 2021). This pH shift precedes visible clinical signs by 24–48 hours."
    },
    {
      icon: "🏥",
      title: "Clinical Access Gap",
      text: "Commercial wound pH monitors (e.g., PreSens SP-HP5, Sentron MicroFET) cost USD 450–1,500 per unit — unaffordable for most hospitals in Sri Lanka and across low-to-middle income countries. No wearable continuous monitoring solution is commercially available."
    },
    {
      icon: "📡",
      title: "The Monitoring Gap",
      text: "Current clinical practice relies on subjective visual inspection during scheduled dressing changes, meaning pH changes between appointments go completely undetected — particularly dangerous during night hours or between clinical visits."
    }
  ]
};

// ── RESEARCH GAP ─────────────────────────────────────────────
const RESEARCH_GAP = {
  headline: "What the Literature Shows — and Where the Gap Lies",
  papers: [
    {
      citation: "Shirzaei Sani et al. (2023) — Science Advances",
      finding: "Demonstrated a PANI/Au potentiometric sensor achieving 59.7 mV/pH sensitivity, with full wound closure in 14 days via electrical stimulation. Validated in vivo on diabetic rats.",
      limitation: "Fabrication requires cleanroom e-beam evaporation, photolithography, and reactive-ion etching — completely inaccessible for an undergraduate lab with a limited budget.",
      relevance: "Validates PANI + Ag/AgCl as the gold-standard architecture for wound pH sensing."
    },
    {
      citation: "Tang et al. (2021) — Micromachines Review",
      finding: "Reviewed accessible screen-printed PANI and thread-based sensors achieving −50 mV/pH sensitivity. Highlighted wound pH > 6.5 as a reliable biofilm infection indicator.",
      limitation: "Review paper — does not provide a complete integrated wearable system or wireless data transmission.",
      relevance: "Provides the accessible fabrication pathway (screen printing, dip-coating) suitable for this FYP."
    },
    {
      citation: "Iversen et al. (2022)",
      finding: "Demonstrated a fully printed SWCNT-based resistive pH sensor on PDMS. High biocompatibility, no reference electrode needed, ESP32-compatible readout.",
      limitation: "SWCNT inks are expensive and commercially sourced; the resistive mechanism provides lower pH selectivity than PANI-based potentiometric sensors.",
      relevance: "Confirms ESP32 + simple analog readout chain as a feasible electronics architecture."
    }
  ],
  gap: "No existing study demonstrates a hand-fabricated, BLE-enabled, multi-parameter wound patch (pH + temperature + moisture) at a cost under USD 60, using locally-sourced materials in a developing-country laboratory context."
};

// ── PROPOSED SOLUTION ────────────────────────────────────────
const SOLUTION = {
  headline: "The Proposed System: A Coin-Sized, Hand-Fabricated Wound Sensor Patch",
  description: "A 30×50 mm hand-fabricated FPCB wound sensor patch combined with a 20 mm coin-sized electronics module — fully wireless, battery-powered, and reproducible in a Sri Lankan university lab.",
  features: [
    { icon: "🧪", text: "PANI potentiometric pH electrode (synthesised in-house, ~54–60 mV/pH sensitivity)" },
    { icon: "⚡", text: "Ag/AgCl solid-state reference electrode screen-printed on PET/PI substrate" },
    { icon: "🌡️", text: "NTC 10kΩ bead thermistor for wound surface temperature (±0.5°C, range 20–45°C)" },
    { icon: "💧", text: "Capacitive/impedance-based exudate moisture sensing (100 Hz–100 kHz AC excitation)" },
    { icon: "🔌", text: "INA333 instrumentation amplifier (100 dB CMRR, 25 µV offset, 3.3V single supply)" },
    { icon: "📊", text: "ADS1115 16-bit I²C ADC (7.8 µV resolution at ±256 mV PGA range)" },
    { icon: "📡", text: "ESP32-S3 MCU with built-in BLE 5.0 + Wi-Fi for wireless data transmission" },
    { icon: "🔋", text: "CR2032 coin cell power (XC6206 1µA-Iq LDO regulator) — target >6 months battery life" }
  ]
};

// ── PROJECT OBJECTIVES ───────────────────────────────────────
const OBJECTIVES = [
  "Design and hand-fabricate a flexible PANI-based potentiometric pH sensor on a PET/PI substrate using screen-printing techniques reproducible in a Sri Lankan university laboratory.",
  "Synthesise Polyaniline (Emeraldine Salt form) using a controlled oxidative chemical polymerisation protocol and characterise its pH sensitivity (target: ≥50 mV/pH, pH range 4–9).",
  "Fabricate a solid-state Ag/AgCl reference electrode via electrochemical chloridisation, and validate its stability against wound-representative chloride concentrations.",
  "Design a complete analog signal conditioning chain (INA333 + ADS1115) achieving <1 mV measurement noise, >80 dB CMRR, and a measurement resolution of ≤0.02 pH units.",
  "Implement ESP32-S3 firmware for multi-parameter data acquisition (pH, temperature, moisture), BLE GATT advertising, and deep-sleep power management (<10 µA sleep current).",
  "Validate the full system through buffer calibration (pH 4.0, 7.0, 9.0), temperature cross-sensitivity testing, and benchtop simulated wound environment testing.",
  "Demonstrate complete system operation within a project budget of LKR 20,000 (~USD 61) using locally-sourced materials where possible."
];

// ── WEEKLY PROGRESS ──────────────────────────────────────────
// Each entry represents one week of documented project work.
// Add or edit weeks here; they automatically appear on the timeline.
const WEEKS = [
  {
    id: 1,
    label: "Week 01",
    dates: "Feb 2025",
    phase: "Problem Definition",
    title: "Identifying the Clinical Need: Why Wound pH?",
    summary: "The project began with a systematic survey of unmet clinical needs in biomedical sensing for resource-limited settings. A broad comparison of measurable wound biomarkers (pH, temperature, glucose, uric acid, lactate) was conducted, and wound pH was identified as the highest-value, most technically feasible sensing target for a final year undergraduate project.",
    goals: "Identify the core biomedical problem. Select the primary sensing parameter. Justify the choice with clinical evidence.",
    files: ["PH_Sensor_Matrix.xlsx"],
    keyFindings: [
      "Wound pH shift from 5.5 (healthy) to >7.0 (infected) is a reliable, early indicator of biofilm formation.",
      "Commercial pH monitors (PreSens, Sentron) cost USD 450–1,500 — economically inaccessible in Sri Lanka.",
      "pH sensing is the most technically mature and literature-supported wound biomarker for flexible sensors.",
      "Initial sensor matrix compared 5 technology categories: Optical, Clinical ISFET, Solid Antimony, Microelectrodes, Lab Prototyping."
    ],
    decisions: "Selected wound pH as the primary sensing parameter. Decision supported by the PH_Sensor_Matrix.xlsx comparison showing Clinical ISFET at the highest final grade (9.5/10) for wound safety and accuracy.",
    rejected: "Glucose and uric acid sensing rejected at this stage due to enzymatic sensor complexity and shelf-life challenges beyond FYP scope.",
    nextWeek: "Deep dive into pH sensing transducer technologies — ISFET vs conductive polymer vs electrochemical.",
    evidence: "PH_Sensor_Matrix.xlsx: 5-technology comparative table with wound safety scores, accuracy ratings, data interface types, and unit costs."
  },
  {
    id: 2,
    label: "Week 02",
    dates: "Mar 2025",
    phase: "Literature Review",
    title: "Comparative Analysis: Shirzaei Sani vs Tang — Choosing a Fabrication Path",
    summary: "Two landmark papers were analysed in depth using a structured comparative matrix. Shirzaei Sani et al. (Science Advances, 2023) represented the state-of-the-art cleanroom approach, while Tang et al. (Micromachines, 2021) offered a low-cost accessible review. This week established the fundamental trade-off: performance vs fabrication feasibility.",
    goals: "Analyse state-of-the-art wound pH sensor literature. Compare cleanroom vs accessible fabrication routes. Identify the most relevant technical approach for this FYP.",
    files: ["Comparative_Analysis_Matrix__Shirzaei_Sani_vs__Tang.xlsx"],
    keyFindings: [
      "Shirzaei Sani: PANI on Au electrode, 59.7 mV/pH sensitivity, 100% dermis repair in 14 days with electrical stimulation. But requires cleanroom e-beam evaporation and photolithography.",
      "Tang: Screen-printed PANI on cotton threads achieves −50 mV/pH. Low-cost, accessible, proven in wound environments.",
      "Both validate PANI + Ag/AgCl as the dominant potentiometric architecture for wound pH sensing.",
      "Wound pH >6.5 reliably indicates pathogenic biofilm (P. aeruginosa, MRSA) — confirmed by both papers.",
      "Electrical stimulation at 1V (Shirzaei Sani) offers a future upgrade path for this sensor platform."
    ],
    decisions: "Selected the accessible screen-printing fabrication pathway inspired by Tang et al., with PANI + Ag/AgCl potentiometric sensing architecture. The Shirzaei Sani architecture served as the performance benchmark (target: ≥50 mV/pH).",
    rejected: "Cleanroom microfabrication route (Shirzaei Sani) rejected due to unavailability of e-beam evaporation and photolithography in the project environment.",
    nextWeek: "Extend literature comparison to a third paper (Iversen 2022) focusing on the electronics architecture and MCU selection.",
    evidence: "Comparative_Analysis_Matrix.xlsx: 7-parameter comparison matrix covering sensor design, circuit parameters, biomedical conditions, antimicrobial methods, fabrication, cost, and results."
  },
  {
    id: 3,
    label: "Week 03",
    dates: "Mar 2025",
    phase: "Literature Review",
    title: "Adding Iversen (2022): Electronics Architecture Benchmarking",
    summary: "A third paper — Iversen et al. (2022) — was introduced to benchmark the electronics architecture. The key contribution of this analysis was distinguishing between the sensing transducer (PANI vs SWCNT) and the signal processing chain (potentiometric vs resistive). This week confirmed the ESP32 + ADS1115 readout chain as the optimal architecture for this FYP.",
    goals: "Benchmark electronics architectures. Compare potentiometric (PANI) vs resistive (SWCNT) signal chains. Confirm MCU and ADC selection rationale.",
    files: ["pH_Sensor_Analysis_Matrix__Shirzaei_Sani_vs__Iversen_V2.xlsx"],
    keyFindings: [
      "Iversen uses SWCNT resistive mechanism — no reference electrode, simpler circuit, but lower selectivity vs potentiometric.",
      "Shirzaei Sani uses complex multiplexed CYBLE-222014 BLE PSoC + AD5941 AFE — overkill for FYP, difficult to source locally.",
      "Both confirm ESP32/Arduino as a feasible MCU. Iversen demonstrates direct ESP32 + voltage divider readout.",
      "Potentiometric (PANI) selected over resistive (SWCNT) for superior pH selectivity and established reference electrode theory.",
      "Iversen: FYP feasibility rating = HIGH vs Shirzaei Sani: LOW — confirmed low-cost architecture is preferred."
    ],
    decisions: "Finalised potentiometric sensing (PANI WE + Ag/AgCl RE) with ESP32-based readout. Decided to use an external 16-bit ADS1115 ADC instead of the ESP32 internal 12-bit ADC due to resolution requirements (59 mV/pH needs <1 mV resolution).",
    rejected: "SWCNT-based resistive sensing rejected (higher material cost, lower pH selectivity). AD5941 analog front-end rejected (complex, expensive, difficult to source in Sri Lanka).",
    nextWeek: "Filter and compare commercially available pH sensor modules to find the best ready-to-use option as a baseline reference.",
    evidence: "pH_Sensor_Analysis_Matrix V2.xlsx: 10-feature side-by-side comparison, including feasibility ratings for FYP budget context."
  },
  {
    id: 4,
    label: "Week 04",
    dates: "Apr 2025",
    phase: "Component Selection",
    title: "Filtering Commercial pH Sensors — Establishing the Performance Baseline",
    summary: "A systematic filter of commercial pH sensor modules was conducted to: (a) identify the best commercial sensor as a calibration reference, and (b) confirm that the hand-fabricated PANI sensor can meet specifications comparable to commercial devices. Four sensor categories were compared using a structured scoring matrix.",
    goals: "Compare commercial pH sensor technologies. Select the best reference sensor for calibration. Validate that the PANI approach is competitive.",
    files: ["Filterd_Best_PH_matrix_As_final.xlsx", "Filtered_PH_matrix.xlsx"],
    keyFindings: [
      "Raw SMD ISFET (Microsens MSFET 3330): Best performance (±0.05 pH, <5s response) but requires custom PCB and op-amp — complex sourcing from Switzerland.",
      "Flexible Printed Sensor (Zimmer & Peacock ZPS-CIO): Most accessible for FYP — flat strip, direct voltage output, ±0.10 pH, wound safety 9.0/10.",
      "Bare Die ISFET (Sentron): Highest accuracy (±0.02 pH) but requires custom quote and complex integration.",
      "Optical Foil (PreSens SP-HP5): Safest (10/10 wound safety) but 120s response time and requires expensive optical reader.",
      "Hand-fabricated PANI target: ±0.05 pH — competitive with Microsens SMD ISFET at ~5% of the commercial cost."
    ],
    decisions: "Selected Zimmer & Peacock ZPS-CIO as the commercial reference sensor for calibration cross-checking. Confirmed PANI hand-fabrication as the primary sensing approach, targeting ±0.05 pH accuracy to match commercial ISFET performance.",
    rejected: "Bare Die ISFET (requires custom quote, cannot budget), Optical Foil (120s response too slow for real-time monitoring).",
    nextWeek: "Research PANI material science, substrate options, and flexible PCB conductor materials for the fabrication design.",
    evidence: "Filterd_Best_PH_matrix_As_final.xlsx: 14-parameter comparison across 4 sensor categories. Fabrication_Facility.xlsx: 4 international fabrication companies compared for contract manufacturing options."
  },
  {
    id: 5,
    label: "Week 05",
    dates: "Apr 2025",
    phase: "Materials Research",
    title: "Flexible PCB Materials Deep-Dive — Selecting Substrate, Conductor, and Active Layer",
    summary: "A comprehensive materials comparison was conducted for all layers of the flexible wound patch: substrate (PI, PDMS, PET, PU, Hydrogel), conductor (RA-Cu, Silver Ink, Carbon, Gold, PEDOT:PSS), and active sensing polymer (PANI, PEDOT:PSS, PPy, composites). This week built the scientific foundation for all material selections made in the fabrication guide.",
    goals: "Select the optimal substrate, conductor, and active polymer for the wound patch. Understand PANI material science at depth. Justify all material choices with evidence.",
    files: ["Flexible_Medical_PCB_Materials_Comparison.xlsx"],
    keyFindings: [
      "PANI Emeraldine Salt (ES) is the ONLY intrinsic pH-responsive conductive polymer — unique acid-base doping mechanism gives 54–69 mV/pH Nernstian response.",
      "PET substrate: Lowest cost, excellent for screen printing, available at any stationery shop. Limitation: not stretchable. Suitable for flat wound patches.",
      "Silver Ink / AgNW: Best for screen-printed conductive traces on PET. Inherently antimicrobial. PANI + AgNW hybrid electrodes show improved stability.",
      "Ag/AgCl reference electrode essential: half-reaction is pH-independent, wound [Cl⁻] ≈ 130 mM gives stable +0.249 V vs SHE with <3 mV potential error.",
      "PANI/Chitosan composites promote fibroblast/myoblast proliferation — potential therapeutic benefit beyond passive sensing.",
      "Summary scoring matrix: PANI scores 5/5 for pH sensing (unique), 4/5 wound evidence, 4/5 cost efficiency — highest overall for sensing applications."
    ],
    decisions: "Confirmed material stack: PET substrate + Silver ink traces + Carbon base layer + PANI working electrode + Ag/AgCl reference electrode. PANI chosen over PEDOT:PSS (no intrinsic pH response) and PPy (no pH response).",
    rejected: "PI/Kapton (higher cost than PET, not needed for disposable patch), PDMS (complex surface treatment needed), Gold electrode (cleanroom sputtering required).",
    nextWeek: "Design the complete system electronics architecture — MCU, ADC, InAmp, power, and communications comparison.",
    evidence: "Flexible_Medical_PCB_Materials_Comparison.xlsx: 6-sheet workbook covering substrates (6 materials), conductors (6 materials), conductive polymers (6 materials), deep-dive on PANI oxidation states, and 14-material summary scoring matrix."
  },
  {
    id: 6,
    label: "Week 06",
    dates: "May 2025",
    phase: "System Architecture",
    title: "Coin-Size Electronics Architecture — MCU, ADC, InAmp, Power, and Communications",
    summary: "A complete multi-sheet architecture comparison workbook was built to select every major electronics module for the coin-size brain PCB. Eight module types were evaluated using structured comparison matrices. This week produced the final Bill of Materials (BOM) and established the 20 mm diameter PCB specification.",
    goals: "Select MCU, ADC, InAmp, temperature sensor, power supply, comms module, DAC, and voltage regulator. Build complete BOM with LKR pricing. Define coin PCB specifications.",
    files: ["Coin_Module_Architecture_Comparison.xlsx"],
    keyFindings: [
      "MCU: ESP32-S3 wins — dual-core 240 MHz, 512 KB SRAM, built-in BLE5 + WiFi, I²C/SPI, deep-sleep 10 µA. Only option with both WiFi and BLE.",
      "ADC: ADS1115 (16-bit, I²C, ±256 mV PGA) — 7.8 µV resolution at pH range. Internal ESP32 ADC (12-bit, 1.2 mV resolution) is insufficient for pH measurement.",
      "InAmp: INA333 (100 dB CMRR, 25 µV offset, 0.1 µV/°C drift, rail-to-rail 3.3V) — best for 3.3V single supply wound sensor.",
      "Temperature: NTC 10kΩ bead thermistor — most flexible, 2 mm bead size, easy PET embedding, reads via voltage divider + ADS1115 ch1.",
      "Power: CR2032 (220 mAh, 20 mm, true coin-size) + XC6206 LDO (1 µA quiescent!). AMS1117 explicitly rejected (1.2V dropout incompatible with CR2032 3.0V).",
      "Comms: BLE 5.0 (built-in ESP32-S3) — 6–12 months battery life at 1 reading/min. WiFi only for firmware OTA updates.",
      "DAC: ESP32 built-in 8-bit DAC for AC moisture excitation (100 Hz–1 kHz sine wave generation).",
      "Voltage Regulator: XC6206P332 — 1 µA Iq, 300 mV dropout at 150 mA, critical for CR2032 compatibility."
    ],
    decisions: "Finalised complete BOM: ESP32-S3 + ADS1115 + INA333 + TL071 + NTC 10kΩ + CR2032 + XC6206. Total BOM cost ~USD 12 (~LKR 3,936) for electronics module. 20 mm circular PCB, 2-layer FR4, 0.8 mm thickness.",
    rejected: "nRF52840 (BLE-only, no WiFi for OTA), RP2040 (no wireless), AMS1117 (1.2V dropout), LTC2063 (too expensive for FYP), INA128 (higher cost than INA333).",
    nextWeek: "Create the complete hand-fabrication guide and finalise budget estimation for project execution.",
    evidence: "Coin_Module_Architecture_Comparison.xlsx: 10-sheet workbook — Module Overview, MCU (7 options), Comms (7 options), Power (7 options), InAmp (7 options), ADC (7 options), Temp (7 options), Moisture (7 methods), DAC (6 options), Voltage Regulator (7 options), Full BOM, Coin PCB Spec."
  },
  {
    id: 7,
    label: "Week 07",
    dates: "May 2025",
    phase: "Fabrication Planning",
    title: "Hand FPCB Fabrication Guide — From PANI Synthesis to Completed Sensor",
    summary: "A complete step-by-step fabrication guide was developed covering every stage of the FPCB manufacturing process. This includes PANI synthesis protocol, screen printing procedures, Ag/AgCl electrode fabrication, substrate preparation, QC checkpoints, safety procedures, and a budget tracker. This guide enables reproducible fabrication within a Sri Lankan university laboratory.",
    goals: "Document complete PANI synthesis protocol. Define screen-printing parameters. Establish QC checkpoints. Confirm Sri Lanka material availability and pricing.",
    files: ["Hand_FPCB_Fabrication_Guide_SriLanka_FYP.xlsx", "Budget_Estimation_FPCB_Wound_Sensor_FYP.xlsx"],
    keyFindings: [
      "PANI Synthesis: Oxidative chemical polymerisation — 1.86 g aniline + 4.56 g ammonium persulfate in 1M HCl at 0–5°C. 3–4 hour reaction. Yields ~0.5 g PANI-ES (enough for 50+ sensors).",
      "Key reagents: All synthesis chemicals available locally (Glorchem LK, Colombo) for LKR 1,300–1,700 total. Aniline (LKR 250–400), APS (LKR 150–250), HCl (LKR 50–100 or free from uni dept).",
      "Screen printing: PET substrate treated with IPA + 400-grit sandpaper. Silver ink traces first (60°C × 30 min cure), then carbon base layer, then PANI (2–3 thin layers × 60°C × 10 min each).",
      "Ag/AgCl RE: Electrochemical chloridisation of silver ink pad in 0.1M KCl at +0.8V vs RE for 60 seconds.",
      "QC checkpoints defined: PANI colour (dark green = correct), trace resistance (<10 Ω/cm), OCP vs buffer solution (target: linear response).",
      "Budget comparison: Sri Lanka local sourcing is 5–12× cheaper than international for synthesis chemicals. Silver conductive ink best imported from LCSC (~USD 9.80).",
      "Complete project budget: LKR 20,000 target, 20% contingency. 5 sensors planned (1 practice + 4 final/demo)."
    ],
    decisions: "Confirmed DIY hand-fabrication as the primary fabrication method. Established procurement strategy: synthesis chemicals from Glorchem LK, electronics from LCSC/AliExpress/Lankatronics Kaduwela.",
    rejected: "Commercial FPCB fabrication (JLCPCB: minimum order 5 pcs, 2-week lead time, design upload complexity) deferred to a future iteration.",
    nextWeek: "Begin actual PANI synthesis and sensor fabrication. Develop calibration protocol and testing methodology.",
    evidence: "Hand_FPCB_Fabrication_Guide_SriLanka_FYP.xlsx: 10-sheet workbook (How-To, PANI Synthesis, Screen Print Steps, AgCl Electrode, FPCB Fab Steps, Tools, Chemicals, QC Checklist, Budget Tracker, Safety). Budget_Estimation_FPCB_Wound_Sensor_FYP.xlsx: FX-linked budget with SL vs International market comparison."
  }
];

// ── TECHNICAL ARCHITECTURE ───────────────────────────────────
const ARCHITECTURE = {
  layers: [
    {
      id: "sensor",
      label: "Sensor Layer (FPCB Wound Patch)",
      color: "#10B981",
      components: ["PANI Working Electrode (pH)", "Ag/AgCl Reference Electrode", "NTC 10kΩ Bead (Temperature)", "IDC Capacitive Layer (Moisture)"],
      output: "mV-level potentiometric + resistance signals",
      substrate: "PET 30×50 mm"
    },
    {
      id: "signal",
      label: "Signal Conditioning",
      color: "#3B82F6",
      components: ["INA333 Instrumentation Amp (CMRR 100dB)", "TL071 Unity Buffer (NTC)", "Low-Pass Anti-Aliasing Filter (100 Hz)"],
      output: "0–3.3V clean analog signal"
    },
    {
      id: "adc",
      label: "Analog-to-Digital Conversion",
      color: "#8B5CF6",
      components: ["ADS1115 16-bit I²C ADC", "PGA ±256 mV range", "4 Channels (pH, Temp, Moisture, Ref)"],
      output: "Digital data stream @ 860 SPS"
    },
    {
      id: "mcu",
      label: "Brain / MCU",
      color: "#F59E0B",
      components: ["ESP32-S3-WROOM-1 (240 MHz dual-core)", "Deep-sleep <10 µA", "Built-in BLE 5.0 + Wi-Fi", "MCP4725 DAC for AC excitation"],
      output: "Processed pH/Temp/Moisture data packet"
    },
    {
      id: "comms",
      label: "Wireless Communication",
      color: "#EF4444",
      components: ["BLE 5.0 GATT Service", "Wi-Fi 2.4 GHz (OTA updates)", "Custom BLE profile for wound data"],
      output: "BLE advertisement → phone/gateway"
    },
    {
      id: "power",
      label: "Power Management",
      color: "#6B7280",
      components: ["CR2032 Coin Cell (220 mAh, 3.0V)", "XC6206 LDO (1 µA Iq, 3.3V out)", "100 µF bulk cap (BLE pulse buffering)"],
      output: "Regulated 3.3V rail, ~6–12 month battery life"
    }
  ]
};

// ── RESOURCES LIBRARY ────────────────────────────────────────
// Add, remove, or edit resources here.
// Categories: "paper", "datasheet", "excel", "document", "video", "guide"
const RESOURCES = [
  // Research Papers
  {
    id: "r1",
    type: "paper",
    title: "Shirzaei Sani et al. (2023) — Stretchable Wireless Wound Monitoring Patch",
    journal: "Science Advances",
    year: 2023,
    relevance: "Gold-standard PANI + Au potentiometric wound sensor. 59.7 mV/pH sensitivity. 100% dermis repair with electrical stimulation. Performance benchmark for this FYP.",
    tags: ["PANI", "wound sensing", "potentiometric", "benchmark"],
    link: "#"
  },
  {
    id: "r2",
    type: "paper",
    title: "Tang et al. (2021) — Flexible Wound pH Sensors Review",
    journal: "Micromachines",
    year: 2021,
    relevance: "Validated accessible screen-printing fabrication route. PANI on CNT threads achieves -50 mV/pH. pH >6.5 confirms biofilm infection.",
    tags: ["PANI", "screen printing", "low-cost", "wound infection"],
    link: "#"
  },
  {
    id: "r3",
    type: "paper",
    title: "Iversen et al. (2022) — Printed On-Skin pH and Hydration Patch",
    journal: "Biosensors",
    year: 2022,
    relevance: "Fully printed SWCNT resistive pH sensor on PDMS. Confirms ESP32 readout chain feasibility. High FYP budget compatibility rating.",
    tags: ["SWCNT", "printed sensor", "ESP32", "PDMS"],
    link: "#"
  },
  // Excel Analysis Files
  {
    id: "e1",
    type: "excel",
    title: "pH Sensor Technology Comparison Matrix",
    description: "5-technology comparison: Optical, ISFET, Solid Antimony, Microelectrodes, Lab Prototyping. Wound safety scores, accuracy, cost.",
    week: 1,
    tags: ["pH sensor", "comparison", "Week 01"],
    link: "documents/PH_Sensor_Matrix.xlsx"
  },
  {
    id: "e2",
    type: "excel",
    title: "Shirzaei Sani vs Tang Comparative Matrix",
    description: "7-parameter paper comparison: sensor design, circuit parameters, biomedical conditions, fabrication cost, results.",
    week: 2,
    tags: ["literature review", "PANI", "comparison", "Week 02"],
    link: "documents/Comparative_Analysis_Matrix.xlsx"
  },
  {
    id: "e3",
    type: "excel",
    title: "Shirzaei Sani vs Iversen Electronics Architecture Matrix",
    description: "10-feature comparison including MCU, ADC, sensing mechanism, FYP feasibility ratings.",
    week: 3,
    tags: ["electronics", "MCU", "ADC", "Week 03"],
    link: "documents/pH_Sensor_Analysis_Matrix_v2.xlsx"
  },
  {
    id: "e4",
    type: "excel",
    title: "Filtered Commercial pH Sensor Matrix (Final)",
    description: "14-parameter comparison: Microsens ISFET, Zimmer & Peacock Flexible, Sentron Bare Die, PreSens Optical.",
    week: 4,
    tags: ["commercial sensor", "ISFET", "filtering", "Week 04"],
    link: "documents/Filterd_Best_PH_matrix_As_final.xlsx"
  },
  {
    id: "e5",
    type: "excel",
    title: "Flexible Medical PCB Materials Comparison",
    description: "6-sheet workbook: substrates, conductors, conductive polymers, PANI deep-dive, summary scoring matrix.",
    week: 5,
    tags: ["PANI", "materials", "FPCB", "Week 05"],
    link: "documents/Flexible_Medical_PCB_Materials_Comparison.xlsx"
  },
  {
    id: "e6",
    type: "excel",
    title: "Coin Module Architecture Comparison (Complete BOM)",
    description: "10-sheet: MCU, ADC, InAmp, Temp, Moisture, DAC, Power, Comms, Regulator comparisons + full BOM with LKR pricing.",
    week: 6,
    tags: ["ESP32", "ADS1115", "BOM", "architecture", "Week 06"],
    link: "documents/Coin_Module_Architecture_Comparison.xlsx"
  },
  {
    id: "e7",
    type: "excel",
    title: "Hand FPCB Fabrication Guide — Sri Lanka FYP",
    description: "10-sheet fabrication workbook: PANI synthesis, screen printing, Ag/AgCl electrode, QC checklist, safety guide, budget tracker.",
    week: 7,
    tags: ["PANI synthesis", "fabrication", "screen printing", "Week 07"],
    link: "documents/Hand_FPCB_Fabrication_Guide_SriLanka_FYP.xlsx"
  },
  {
    id: "e8",
    type: "excel",
    title: "Project Budget Estimation — FX-Linked LKR/USD",
    description: "Live FX-linked budget (USD_LKR ~328). SL local vs international market price comparison. 20% contingency. Target: LKR 20,000.",
    week: 7,
    tags: ["budget", "LKR", "procurement", "Week 07"],
    link: "documents/Budget_Estimation_FPCB_Wound_Sensor_FYP.xlsx"
  },
  {
    id: "e9",
    type: "excel",
    title: "Fabrication Facility Comparison",
    description: "4 international medical fabrication companies: Zimmer & Peacock, Microsens SA, Sentron (Millar), Analog Devices Healthcare.",
    week: 4,
    tags: ["fabrication", "contract manufacturing", "Week 04"],
    link: "documents/Facbrication_Facility.xlsx"
  }
];

// ── FILE ANALYSIS TABLE ──────────────────────────────────────
const FILE_ANALYSIS = [
  { name: "PH_Sensor_Matrix.xlsx", type: "Excel — Comparison Matrix", week: "Week 01", content: "5-technology pH sensor comparison with wound safety scores, accuracy, cost, and data interface", importance: "Established wound pH as the primary sensing target; justified ISFET as performance benchmark", section: "Weekly Progress / Resource Library" },
  { name: "Comparative_Analysis_Matrix__Shirzaei_Sani_vs__Tang.xlsx", type: "Excel — Literature Analysis", week: "Week 02", content: "7-parameter comparison between Shirzaei Sani (Science Advances 2023) and Tang (Micromachines 2021)", importance: "Confirmed PANI + Ag/AgCl architecture; selected accessible screen-printing fabrication path", section: "Weekly Progress / Research Gap / Resource Library" },
  { name: "pH_Sensor_Analysis_Matrix__Shirzaei_Sani_vs__Iversen_V2.xlsx", type: "Excel — Literature Analysis", week: "Week 03", content: "10-feature electronics architecture comparison including FYP feasibility ratings", importance: "Confirmed ESP32 + ADS1115 readout chain; selected potentiometric over resistive sensing", section: "Weekly Progress / System Architecture" },
  { name: "Filterd_Best_PH_matrix_As_final.xlsx", type: "Excel — Commercial Sensor Filter", week: "Week 04", content: "14-parameter comparison of 4 commercial pH sensor categories", importance: "Selected Zimmer & Peacock as reference sensor; confirmed PANI target specs (±0.05 pH)", section: "Weekly Progress / Sensor Technology" },
  { name: "Filtered_PH_matrix.xlsx", type: "Excel — Sensor Shortlist", week: "Week 04", content: "Shortlisted filtered pH sensor options", importance: "Intermediate filtering step before final selection", section: "Resource Library" },
  { name: "Most_Suitable_Dtasheet_compair.xlsx", type: "Excel — Datasheet Comparison", week: "Week 04", content: "Datasheet-level comparison of most suitable sensor components", importance: "Verified component specifications against project requirements", section: "Datasheets / Resource Library" },
  { name: "Vertion_4_PH.xlsx", type: "Excel — Design Iteration", week: "Week 04", content: "Version 4 of pH sensor design iteration", importance: "Documents design improvement cycle — shows iterative refinement process", section: "Weekly Progress / Technical Development" },
  { name: "Flexible_Medical_PCB_Materials_Comparison.xlsx", type: "Excel — Materials Research", week: "Week 05", content: "6-sheet materials workbook: substrates, conductors, CPs, PANI deep-dive, scoring matrix", importance: "Justified PET + Silver Ink + PANI material stack; confirmed PANI as the only intrinsic pH-responsive CP", section: "Weekly Progress / Hardware Design / Sensor Technology" },
  { name: "Coin_Module_Architecture_Comparison.xlsx", type: "Excel — System Architecture", week: "Week 06", content: "10-sheet architecture comparison for all electronics modules + complete BOM", importance: "Defined final system: ESP32-S3 + ADS1115 + INA333 + NTC + CR2032 + XC6206. Total ~LKR 3,936", section: "Weekly Progress / System Architecture / Embedded Systems" },
  { name: "Hand_FPCB_Fabrication_Guide_SriLanka_FYP.xlsx", type: "Excel — Fabrication Guide", week: "Week 07", content: "10-sheet complete DIY fabrication protocol with PANI synthesis, QC, safety", importance: "Enables reproducible hand-fabrication of the sensor in a Sri Lankan university lab", section: "Weekly Progress / Hardware Design / Fabrication" },
  { name: "Budget_Estimation_FPCB_Wound_Sensor_FYP.xlsx", type: "Excel — Budget Planning", week: "Week 07", content: "FX-linked budget with SL vs International market comparison, LKR 20,000 target", importance: "Confirms economic feasibility; demonstrates rigorous project planning", section: "Weekly Progress / Project Planning" },
  { name: "Facbrication_Facility.xlsx", type: "Excel — Vendor Analysis", week: "Week 04", content: "4 international medical sensor fabrication companies with roles and capabilities", importance: "Explored contract fabrication options; confirmed hand-fabrication as optimal path for FYP budget", section: "Resource Library / Hardware Design" },
];

// ── TESTING PLAN ──────────────────────────────────────────────
const TESTING = [
  { phase: "Phase 1", title: "PANI Synthesis QC", description: "Verify dark green colour (Emeraldine Salt), ink adhesion bead test on PET, and initial resistance measurement of printed traces.", status: "Planned" },
  { phase: "Phase 2", title: "Electrode Fabrication QC", description: "Verify trace resistance <10 Ω/cm. Check Ag/AgCl electrode colour (purple-brown). Verify OCP stability in 0.1M KCl.", status: "Planned" },
  { phase: "Phase 3", title: "pH Calibration", description: "Three-point calibration using pH 4.00, 7.00, and 9.18 buffer solutions. Target: linear response ≥50 mV/pH, R² > 0.998.", status: "Planned" },
  { phase: "Phase 4", title: "Temperature Cross-Sensitivity", description: "Measure OCP drift across 20–40°C range. Target: <2 mV/°C thermal coefficient. Apply Nernst temperature correction in firmware.", status: "Planned" },
  { phase: "Phase 5", title: "Full System Integration", description: "Connect FPCB sensor to coin PCB via ZIF connector. Verify BLE GATT data transmission to smartphone. Validate real-time pH display accuracy.", status: "Planned" },
  { phase: "Phase 6", title: "Simulated Wound Testing", description: "Test sensor in simulated wound fluid (PBS with adjusted pH 5.0–8.5, [Cl⁻] = 130 mM, 37°C). Validate against reference pH meter.", status: "Planned" }
];

// ── FUTURE WORK ───────────────────────────────────────────────
const FUTURE_WORK = [
  "Integration of electrochemical impedance spectroscopy (EIS) for simultaneous wound moisture and ionic composition characterisation.",
  "Development of a companion smartphone application (React Native) with wound healing trend visualisation and infection alert notifications.",
  "Expansion to multi-parameter sensing: uric acid, glucose, and lactate electrodes using enzyme-functionalised PANI composites.",
  "Exploration of PANI/Chitosan composite electrodes for combined pH sensing and antibacterial electroactive wound healing promotion.",
  "Transition from hand-fabrication to professional FPCB fabrication (JLCPCB or LankaPCB) for improved reproducibility and clinical trials.",
  "Regulatory pathway analysis for Class IIa medical device classification (MDR EU 2017/745 or Sri Lanka NMRA guidelines).",
  "Investigation of electrical stimulation integration (1V AC, 100 Hz) for accelerated wound healing, replicating Shirzaei Sani et al. (2023) results.",
  "Longitudinal wear testing (7-day continuous monitoring) for sensor stability, drift characterisation, and biocompatibility validation."
];

// ── BUDGET SUMMARY ───────────────────────────────────────────
const BUDGET = {
  target: "LKR 20,000",
  currency: "LKR (LKR/USD ≈ 328, May 2026)",
  categories: [
    { name: "PANI Synthesis Chemicals", local: "LKR 1,300–1,700", notes: "Aniline, APS, HCl (Glorchem LK / Uni dept)" },
    { name: "Substrate & Consumables", local: "LKR 800–1,200", notes: "PET transparency film, IPA, sandpaper, stencils" },
    { name: "Conductive Inks (Silver, Carbon)", local: "LKR 2,000–3,500", notes: "Silver ink best from LCSC (~$9.80 + shipping)" },
    { name: "Electronics (ESP32, ADS1115, etc.)", local: "LKR 4,000–5,500", notes: "LCSC/AliExpress + Lankatronics Kaduwela" },
    { name: "PCB Fabrication (Coin PCB)", local: "LKR 1,500–2,500", notes: "JLCPCB 2-layer circular, minimum 5 pcs" },
    { name: "Tools & Equipment", local: "LKR 2,500–5,000", notes: "Mostly borrowed from uni lab. Multimeter required." },
    { name: "Buffer Solutions & pH Standards", local: "LKR 1,000–2,000", notes: "pH 4/7/9 calibration buffers" },
    { name: "Contingency (20%)", local: "~LKR 2,600–4,300", notes: "20% buffer as recommended for FYP projects" }
  ],
  total: "LKR 15,700–25,700 (target within LKR 20,000)"
};

// ── EXPORT ALL DATA ──────────────────────────────────────────
// This makes all data available to index.html via <script src="data.js">


// ============================================================
//  EXTENDED DATA (added to satisfy all requested sections)
//  Video references · Datasheets · Documents · Supervisor notes
//  Competitive analysis · Clinical pH reference · Categories
// ============================================================

// ── VIDEO & PUBLICATION REFERENCES ───────────────────────────
// From YouTube_links_and_Found_Similar_Product_Details.docx
const VIDEOS = [
  {
    title: "SmartHEAL — Smart Plaster Detects How Wounds Are Healing",
    source: "James Dyson Award 2022 (Reuters/Euronews)",
    type: "video",
    note: "The single most relevant reference product. Three Warsaw University of Technology students won the 2022 James Dyson Award International prize for a battery-free, RFID-based pH sensor printed into a wound dressing. Validates this FYP's core concept of dressing-integrated pH monitoring without dressing removal.",
    link: "https://youtu.be/jOOnIGT55zk"
  },
  {
    title: "SmartHEAL — Official Project Page (Technical Description)",
    source: "James Dyson Award",
    type: "reference",
    note: "Primary technical description: RFID communication, battery-free operation, screen-printing + thermal transfer manufacturing, chronic wound monitoring without dressing removal.",
    link: "https://www.jamesdysonaward.org/en-NZ/2022/project/smartheal"
  },
  {
    title: "Polish Students' Smart Sensor Dressing — Euronews/Reuters",
    source: "Euronews Health (Nov 2022)",
    type: "reference",
    note: "Implementation detail: pH monitor printed on fabric, RFID antenna, smartphone/tablet communication, mass-producible via textile-industry methods at ~0.5 PLN per sensor.",
    link: "https://www.euronews.com/health/2022/11/29/polish-students-designed-a-smart-sensor-dressing-which-tells-doctors-how-well-a-wound-is-h"
  },
  {
    title: "James Dyson Foundation 2022 Annual Report",
    source: "James Dyson Foundation (PDF)",
    type: "reference",
    note: "Contains the SmartHEAL summary, problem statement, solution overview, and RFID + pH sensing explanation.",
    link: "https://www.jamesdysonfoundation.co.uk/media/irtfk3ma/jdf_2022_annual-report_digital.pdf"
  }
];

// ── KEY PUBLICATIONS (additional, from references doc) ───────
const KEY_PUBLICATIONS = [
  {
    title: "Wearable Sensors and Systems for Wound Healing-Related pH Detection",
    repo: "PMC8070747",
    note: "Foundational review: why wound pH matters, pH ranges for infected wounds, electrochemical pH sensing, flexible wearable wound sensors, real-time monitoring systems.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8070747/"
  },
  {
    title: "Flexible Wearable Fully-Printed Smart Patch for pH and Hydration Sensing",
    repo: "PMC8852199",
    note: "Highly relevant: printed electronics, flexible sensor fabrication, pH sensing on wound dressings, low-cost printable sensors, integration into wearable patches. (Corresponds to Iversen et al. analysis in Week 03.)",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8852199/"
  }
];

// ── COMPONENT DATASHEETS ─────────────────────────────────────
// Add datasheet PDFs to documents/datasheets/ and update links
const DATASHEETS = [
  { component: "ESP32-S3-WROOM-1", role: "MCU / Brain — BLE 5.0 + Wi-Fi, 240 MHz dual-core, deep-sleep 10 µA", category: "Microcontroller", link: "documents/datasheets/ESP32-S3_datasheet.pdf" },
  { component: "ADS1115", role: "16-bit I²C ADC — 7.8 µV resolution at ±256 mV PGA, 4 channels", category: "Data Converter", link: "documents/datasheets/ADS1115_datasheet.pdf" },
  { component: "INA333", role: "Instrumentation Amplifier — 100 dB CMRR, 25 µV offset, 0.1 µV/°C drift", category: "Analog Front-End", link: "documents/datasheets/INA333_datasheet.pdf" },
  { component: "TL071", role: "Unity-gain buffer for NTC thermistor divider output", category: "Op-Amp", link: "documents/datasheets/TL071_datasheet.pdf" },
  { component: "XC6206P332", role: "LDO Regulator — 1 µA quiescent, 3.3V fixed, 150 mA, CR2032-compatible", category: "Power", link: "documents/datasheets/XC6206_datasheet.pdf" },
  { component: "MCP4725", role: "12-bit I²C DAC — AC excitation for impedance moisture sensing", category: "Data Converter", link: "documents/datasheets/MCP4725_datasheet.pdf" },
  { component: "NTC 10kΩ B3950", role: "Temperature sensor — flexible 2 mm bead, 20–45°C range", category: "Sensor", link: "documents/datasheets/NTC_10k_B3950.pdf" },
  { component: "pH-303 Ceramic Sensor (TDS)", role: "Reference ceramic pH electrode — used for calibration cross-check", category: "Reference Sensor", link: "documents/datasheets/TDS_Sensor_pH_303_ceramic.pdf" },
];

// ── DOCUMENT LIBRARY (PDFs & reference documents) ────────────
const DOCUMENTS_LIB = [
  { title: "PANI Wound PCB — FYP Technical Reference", type: "Technical Reference", note: "Complete material science & electrochemistry reference: PANI synthesis, pH sensing mechanism, Ag/AgCl electrode theory, material stack, Sri Lanka sourcing. The theoretical backbone of the project.", link: "documents/PANI_Wound_PCB_FYP_Technical_Reference.pdf" },
  { title: "PANI pH Sensor — Literature Review", type: "Literature Review", note: "Consolidated literature review on PANI-based pH sensing for wound applications.", link: "documents/PANI_pH_Sensor_Literature_Review.pdf" },
  { title: "Smart Diabetic Wound Patch — Reference Report", type: "Reference Report", note: "Synthesised reference report on smart diabetic wound patch systems and state of the art.", link: "documents/Smart_Diabetic_Wound_Patch_Reference_Report.pdf" },
  { title: "Wound Monitoring System — Requirements", type: "Requirements Spec", note: "Formal system requirements specification for the wound monitoring system.", link: "documents/Wound_Monitoring_System_Requirements.pdf" },
  { title: "pH Sensing Methodology Document", type: "Methodology", note: "Detailed methodology for the pH sensing approach, calibration, and measurement protocol.", link: "documents/pH_Sensing_Methodology_Document.pdf" },
  { title: "Engineering Analysis of Wound Healing Dynamics", type: "Engineering Analysis", note: "Quantitative engineering analysis of wound healing dynamics and how pH correlates with healing stages.", link: "documents/Engineering_Analysis_of_Wound_Healing_Dynamics.pdf" },
  { title: "FYP Fabrication & Authority Guide", type: "Fabrication Guide", note: "Guidance on fabrication routes and relevant authorities/regulations for the FYP context in Sri Lanka.", link: "documents/FYP_Fabrication_Authority_Guide.pdf" },
  { title: "pH Sensor Matrix (PDF export)", type: "Comparison Matrix", note: "PDF export of the pH sensor technology comparison matrix for easy supervisor viewing.", link: "documents/PH_Sensor_Matrix.pdf" },
];

// ── SUPERVISOR MEETING NOTES ─────────────────────────────────
// EDIT THESE after each supervisor meeting. Sample structure provided.
const SUPERVISOR_NOTES = [
  {
    date: "Meeting 01 — (add date)",
    week: "Week 02",
    topic: "Project direction & sensing parameter",
    feedback: "Confirmed wound pH as a strong, well-justified sensing target. Advised focusing on a reproducible low-cost fabrication route rather than cleanroom methods. Requested a clear comparison between commercial and hand-fabricated approaches.",
    action: "Produced the Shirzaei Sani vs Tang comparative matrix; committed to the accessible screen-printing fabrication path."
  },
  {
    date: "Meeting 02 — (add date)",
    week: "Week 04",
    topic: "Component selection & feasibility",
    feedback: "Approved the potentiometric PANI + Ag/AgCl architecture. Asked for a quantified resolution justification for the ADC choice and a documented budget within department limits.",
    action: "Documented ADS1115 (7.8 µV) vs ESP32 internal ADC (1.2 mV) resolution; produced FX-linked LKR budget under 20,000."
  },
  {
    date: "Meeting 03 — (add date)",
    week: "Week 06",
    topic: "System architecture review",
    feedback: "(Add supervisor feedback here after your next meeting.)",
    action: "(Add your follow-up actions here.)"
  }
];

// ── COMPETITIVE / SIMILAR PRODUCT ANALYSIS ───────────────────
const SIMILAR_PRODUCTS = [
  { name: "SmartHEAL", origin: "Warsaw Univ. of Technology (2022 James Dyson Award)", tech: "RFID, battery-free, screen-printed pH sensor in dressing", cost: "~0.5 PLN/sensor (mass production)", relevance: "Closest concept match — proves clinical viability of dressing-integrated pH sensing. This FYP differs by using BLE (vs RFID) and an active multi-parameter approach (pH + temp + moisture)." },
  { name: "Shirzaei Sani Patch", origin: "Science Advances (2023)", tech: "PANI/Au potentiometric + electrical stimulation + drug delivery", cost: "High (cleanroom microfabrication)", relevance: "Performance benchmark (59.7 mV/pH). This FYP targets comparable sensitivity at a fraction of the cost via hand fabrication." },
  { name: "Commercial pH Probes", origin: "PreSens, Sentron, Unisense", tech: "Optical foil / ISFET / microelectrode", cost: "USD 450 – 1,500", relevance: "Establishes the affordability gap this FYP addresses. Used as calibration reference benchmarks." }
];

// ── CLINICAL WOUND pH REFERENCE TABLE ────────────────────────
// From PANI_Wound_PCB_FYP_Technical_Reference
const WOUND_PH_TABLE = [
  { state: "Normal skin surface", range: "4.5 – 5.5", interpretation: "Acid mantle; barrier function intact", flag: "ok" },
  { state: "Healthy acute wound (healing)", range: "5.5 – 6.5", interpretation: "Slightly acidic; favours re-epithelialisation & antimicrobial defence", flag: "ok" },
  { state: "Chronic non-healing wound", range: "7.2 – 8.9", interpretation: "Alkaline; proteases upregulated, tissue damage", flag: "warn" },
  { state: "Infected wound", range: "7.4 – 9.0", interpretation: "Bacterial alkalisation; indicator of infection", flag: "danger" },
  { state: "Necrotic tissue", range: "> 8.0", interpretation: "Severe alkaline shift; urgent debridement needed", flag: "danger" },
];

// ── FILE CATEGORY CLASSIFICATION ─────────────────────────────
// Requirement #4 — classify all uploaded files into categories
const FILE_CATEGORIES = [
  { category: "Research Papers", icon: "📄", count: "3 papers + 2 PMC reviews", support: "Establish the scientific foundation and performance benchmarks (Shirzaei Sani 59.7 mV/pH, Tang biofilm pH>6.5, Iversen printed sensor).", files: "Shirzaei Sani 2023, Tang 2021, Iversen 2022, PMC8070747, PMC8852199" },
  { category: "Technical References", icon: "📚", count: "1 document", support: "Provides first-principles material science, electrochemistry, and the complete PANI synthesis + Ag/AgCl theory underpinning the design.", files: "PANI_Wound_PCB_FYP_Technical_Reference" },
  { category: "Comparison Matrices (Excel)", icon: "📊", count: "8 workbooks", support: "Document every component and material selection decision with multi-parameter scoring — the evidence base for technical reasoning.", files: "PH_Sensor_Matrix, Comparative_Analysis, Filtered matrices, Materials, Coin Module, etc." },
  { category: "Fabrication & Planning", icon: "🏗️", count: "3 documents", support: "Convert the design into an executable, reproducible lab protocol with QC checkpoints, safety, and budget.", files: "Hand_FPCB_Fabrication_Guide, Budget_Estimation, FYP_Fabrication_Authority_Guide" },
  { category: "Component Datasheets", icon: "🔧", count: "8 components", support: "Verify that each selected IC meets the electrical requirements derived from the sensor specifications.", files: "ESP32-S3, ADS1115, INA333, TL071, XC6206, MCP4725, NTC, pH-303" },
  { category: "Video / Product References", icon: "▶", count: "4 links", support: "Benchmark against the closest real-world product (SmartHEAL) and validate market need and concept feasibility.", files: "YouTube_links_and_Found_Similar_Product_Details" },
  { category: "Images & Diagrams", icon: "🖼️", count: "1 photo", support: "Provide visual evidence of lab work / hardware progress.", files: "WhatsApp_Image_20260509 (project photo)" },
  { category: "Simulation / Design Files", icon: "🧩", count: "1 file", support: "Interactive materials comparison component for design exploration.", files: "flexible_medical_pcb_materials.jsx" },
];
