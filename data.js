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

// ── WEEKLY PROGRESS: DETAILED WEEK-BY-WEEK PROJECT DEVELOPMENT ──
const WEEKS = [
  {
    "id": 1,
    "label": "Week 01",
    "dates": "May 2026",
    "phase": "Problem Definition",
    "title": "Week 01 — Problem Definition, Wound pH Background and Initial Direction",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/1tkGkRAXig2UpzIEpuL-YDCpxefRbUTq2?usp=drive_link",
    "images": [
      { "src": "week1.png", "caption": "Week 01 uploaded Google Drive folder evidence showing pH variation, sensor comparison and smart wound dressing resources." }
    ],
    "folders": [
      "PH VARIATIONS",
      "SENSOR COMPARISON",
      "SMART WOUND DRESSING"
    ],
    "summary": "Week 01 established the foundation of the Final Year Project by identifying diabetic wound monitoring as a clinically important and engineering-relevant problem. The main focus was to understand why chronic diabetic wounds require continuous monitoring and why wound pH can be used as an early biomarker for healing status, infection risk and chronic wound progression. During this week, pH variation in normal skin, healing wounds, chronic wounds and infected wounds was studied. Different possible sensing methods were compared, including optical pH sensing, electrochemical pH sensing, ISFET-based sensors and wearable smart dressing approaches. This week helped convert the broad idea of wound monitoring into a focused project direction based on flexible pH sensing integrated into a smart wound dressing.",
    "goals": "The main goal of Week 01 was to define the clinical problem, understand the importance of wound pH, compare possible sensing technologies and select a realistic project direction suitable for a final-year engineering project. The week also aimed to identify the gap between ordinary wound inspection and continuous electronic wound monitoring.",
    "keyFindings": [
      "Wound pH is a valuable biomarker because healthy and healing wounds are usually slightly acidic, while chronic or infected wounds often shift toward alkaline pH.",
      "Diabetic wounds require regular monitoring because infection or delayed healing may occur before clear visual symptoms appear.",
      "Conventional wound assessment depends heavily on manual observation during dressing changes, which does not provide continuous information.",
      "Commercial wound monitoring systems and advanced medical sensors are often expensive and not easily accessible in low-resource clinical environments.",
      "Flexible smart dressing technology is more suitable than rigid sensing probes because it can follow skin curvature and remain close to the wound region.",
      "pH sensing was selected as the primary measurable parameter because it has strong clinical relevance and can be implemented using low-cost electrochemical methods."
    ],
    "decisions": "The project direction was narrowed to a smart diabetic wound monitoring patch with wound pH as the primary sensing parameter. A dressing-integrated wearable approach was selected instead of a handheld or laboratory-only measurement system. The project also began focusing on low-cost, locally feasible fabrication methods rather than expensive cleanroom-based devices.",
    "rejected": "A purely visual wound assessment method was rejected because it cannot detect hidden biochemical changes. A laboratory-only pH meter approach was also rejected because it is not suitable for continuous or wearable monitoring. High-cost commercial pH sensing modules were not selected as the main direction because they do not match the low-cost FYP target.",
    "nextWeek": "The next week moved toward clinical background research, wound healing pathology, wearable sensor examples and similar product analysis to strengthen the biomedical and engineering justification of the project.",
    "evidence": "Week 01 evidence includes Google Drive folders on pH variations, sensor comparison and smart wound dressing concepts. These files support the initial problem definition and selection of wound pH as the central biomarker."
  },
  {
    "id": 2,
    "label": "Week 02",
    "dates": "May 2026",
    "phase": "Clinical & Concept Research",
    "title": "Week 02 — Clinical Pathology, Wearable Sensor Study and Similar Product Analysis",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/15nu7y297LGzbr29fADAJ7siThBSDOKnj?usp=drive_link",
    "images": [
      { "src": "week2.png", "caption": "Week 02 uploaded Google Drive folder evidence showing pathology, flexible circuit, wearable sensor and similar product resources." }
    ],
    "folders": [
      "Flexible Circuit Print",
      "Robbins Basic Pathology",
      "Similar Product Details",
      "Wearable Sensor"
    ],
    "summary": "Week 02 connected the engineering idea with real biomedical background. The work focused on understanding wound healing stages, inflammation, infection, tissue repair and chronic wound behavior using pathology references. This helped clarify why diabetic wounds are difficult to heal and why continuous monitoring can support early intervention. In parallel, wearable sensor technologies and flexible circuit printing methods were studied to understand how electronic sensors can be integrated into a wound dressing. Similar products such as SmartHEAL and other wearable wound-monitoring concepts were reviewed as practical benchmarks. This week was important because it confirmed that the project should not be only an electronics device, but a biomedical wearable system designed around clinical needs.",
    "goals": "The goals were to study wound healing biology, identify clinical requirements, review flexible electronics approaches, investigate existing smart wound dressing products and decide how the proposed system should differ from commercial or research-level solutions.",
    "keyFindings": [
      "Wound healing involves inflammation, tissue formation and remodeling stages, and diabetic wounds can become delayed or chronic due to poor circulation, infection and impaired cellular response.",
      "pH variation is linked to bacterial growth, protease activity, tissue degradation and healing progress.",
      "Flexible printed electronics are suitable for wound monitoring because they can be lightweight, thin and compatible with soft dressing materials.",
      "SmartHEAL and similar smart dressing projects validate the concept of pH monitoring inside a wound dressing.",
      "Many existing solutions focus on RFID, optical sensing or single-parameter monitoring, leaving space for a low-cost multi-parameter active electronic patch.",
      "A wearable patch should minimize disturbance to the wound and avoid frequent dressing removal."
    ],
    "decisions": "The project continued with a flexible wearable patch concept rather than a rigid external device. A biomedical design direction was selected: the sensor layer should be disposable or wound-contact-safe, while the electronics module should be reusable where possible. Similar-product research was used to position the project as a low-cost, active monitoring alternative.",
    "rejected": "Rigid sensor assemblies were rejected because they may be uncomfortable and unsuitable for wound dressing integration. A purely RFID-based passive system was not selected as the main direction because the project requires active multi-parameter sensing, signal processing and potential BLE/Wi-Fi communication.",
    "nextWeek": "The next week focused on collecting datasheets, comparing commercial pH sensor technologies, reviewing academic papers and selecting the most feasible sensor architecture for the prototype.",
    "evidence": "Week 02 evidence includes flexible circuit printing resources, pathology references, wearable sensor materials and similar product details. These resources justify the biomedical need and wearable system direction."
  },
  {
    "id": 3,
    "label": "Week 03",
    "dates": "May 2026",
    "phase": "Resources & Components",
    "title": "Week 03 — Datasheets, pH Sensor Matrix and Similar Device Paper Review",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link",
    "images": [
      { "src": "week3.png", "caption": "Week 03 uploaded Google Drive folder evidence showing datasheets, links, pH sensor matrix and similar paper resources." },
      { "src": "assets/research/sani_keyimage.jpg", "caption": "Benchmark paper image showing the stretchable wound bioelectronic system concept." },
      { "src": "assets/research/sani_fig1.jpg", "caption": "Research figure used to study system-level wearable wound patch architecture." },
      { "src": "assets/research/sani_fig2.jpg", "caption": "Research figure used to compare sensor and electronics arrangement for wound monitoring." },
      { "src": "assets/research/sani_fig3.jpg", "caption": "Research figure used to study experimental validation and sensor performance." }
    ],
    "folders": [
      "Datasheets",
      "Links",
      "Medical Grade Fabrication Companies",
      "pH Sensor Matrix",
      "Similar Device Papers"
    ],
    "summary": "Week 03 transformed the project from clinical concept into technical selection. The work focused on collecting datasheets, academic papers, commercial sensor details, fabrication company information and comparison matrices. Different pH sensing approaches were compared, including optical sensors, ISFET sensors, antimony electrodes, commercial pH probes and polymer-based electrochemical sensors. Similar device papers were reviewed to understand high-performance wound monitoring systems and low-cost printed sensor alternatives. This week was important because it provided the evidence base for choosing a potentiometric PANI pH sensor approach with an Ag/AgCl reference electrode and an electronic readout chain suitable for embedded implementation.",
    "goals": "The goals were to compare available pH sensing technologies, collect reliable component datasheets, identify fabrication suppliers or facilities, review similar research devices and select the most feasible sensing method for the FYP prototype.",
    "keyFindings": [
      "PANI-based potentiometric pH sensing is suitable for wound monitoring because it can provide a near-Nernstian voltage response to pH variation.",
      "Ag/AgCl is a widely used reference electrode material and is compatible with electrochemical pH measurement.",
      "Cleanroom-fabricated research devices show excellent performance but require expensive facilities that may not be accessible for undergraduate prototype development.",
      "Screen printing and hand-fabrication methods are more feasible for local university implementation.",
      "Commercial pH sensors are useful for reference and calibration, but many are too bulky or expensive for direct dressing integration.",
      "Component datasheets helped identify suitable electronic blocks such as instrumentation amplifiers, ADCs, low-power MCUs and temperature sensors."
    ],
    "decisions": "The project selected a potentiometric PANI working electrode with an Ag/AgCl reference electrode as the main pH sensing architecture. The design direction moved toward low-cost printed or hand-fabricated electrodes rather than expensive commercial sensor modules. The electronic system began to focus on high-impedance signal buffering, precision ADC conversion and wireless embedded processing.",
    "rejected": "Bare-die ISFET technology was rejected because of packaging complexity, cost and integration difficulty. Optical pH sensing was not selected as the primary method because it may require a camera or optical reader. Large commercial glass pH electrodes were rejected because they are unsuitable for wearable wound dressing integration.",
    "nextWeek": "The next week focused on designing the compact electronics brain, selecting the MCU, ADC, amplifier, temperature sensor and power system, and preparing the system architecture.",
    "evidence": "Week 03 evidence includes datasheets, pH sensor matrices, similar device papers, technical links and fabrication company research. These resources support the selection of PANI potentiometric sensing and the embedded electronics direction."
  },
  {
    "id": 4,
    "label": "Week 04",
    "dates": "May 2026",
    "phase": "Electronics Architecture",
    "title": "Week 04 — Fabrication Route and Coin-Size Electronics Brain Design",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/1TXObdQxO2R-fMgzQKd96bVRRzY6lFjVY?usp=drive_link",
    "images": [
      { "src": "week4.png", "caption": "Week 04 uploaded Google Drive folder evidence showing fabrication facility and coin-size electronics design resources." },
      { "src": "assets/research/sani_fig4.jpg", "caption": "Research figure used to study wound monitoring performance and sensor output interpretation." },
      { "src": "assets/research/sani_fig5.jpg", "caption": "Research figure used to study treatment, stimulation or wound healing response comparison." },
      { "src": "assets/research/sani_fig6.jpg", "caption": "Research figure used to study biological validation and healing outcome results." }
    ],
    "folders": [
      "Fabrication Facility",
      "FYP Brain (Coin Size)"
    ],
    "summary": "Week 04 focused on the electronics architecture and the practical implementation route. The main objective was to define the reusable coin-size electronics module that would interface with the flexible wound patch. The system architecture was developed around signal acquisition, analog conditioning, ADC conversion, microcontroller processing, wireless communication and low-power operation. Components such as ESP32-S3, ADS1115, INA333, TMP117, CR2032 and a low-power regulator were considered for the electronics brain. This week also studied fabrication facility options and helped separate the system into two parts: the wound-contact flexible sensor patch and the reusable electronic module. This separation improves safety, cost-effectiveness and practical usability.",
    "goals": "The goals were to design the core electronics architecture, define the signal path from sensor to microcontroller, select suitable ICs, study power management and decide how the flexible patch should connect to the reusable electronics module.",
    "keyFindings": [
      "The wound pH electrode produces a low-level electrochemical voltage that requires careful buffering and high-input-impedance signal conditioning.",
      "A precision ADC such as ADS1115 can improve measurement resolution compared with direct low-resolution MCU ADC reading.",
      "ESP32-S3 provides sufficient processing power and wireless communication options for BLE and Wi-Fi based monitoring.",
      "TMP117 or a similar temperature sensor is useful because pH response can be affected by temperature.",
      "A coin-size reusable module can reduce recurring cost because only the wound-contact patch may need replacement.",
      "A connector such as FFC/ZIF can support modular connection between the disposable patch and electronics brain."
    ],
    "decisions": "The electronics system was divided into sensor layer, signal conditioning, ADC, microcontroller, wireless communication and power management blocks. A reusable coin-size electronics module was selected as the preferred design direction. The system moved toward ESP32-S3 based wireless processing with precision ADC readout and low-power battery operation.",
    "rejected": "A fully disposable electronics system was rejected because it would increase cost. Direct connection of the pH electrode to the MCU ADC was not selected because the signal requires better buffering and resolution. A large development-board-only solution was not selected as the final target because the final device should be compact and wearable.",
    "nextWeek": "The next week focused on flexible PCB materials, PANI methodology, fabrication cost estimation and practical material selection for the sensor patch.",
    "evidence": "Week 04 evidence includes fabrication facility research and coin-size electronics brain resources. These files support the embedded hardware architecture and reusable electronics concept."
  },
  {
    "id": 5,
    "label": "Week 05",
    "dates": "May 2026",
    "phase": "Materials & Fabrication",
    "title": "Week 05 — Flexible PCB Materials, PANI Methodology and Budget Planning",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link",
    "images": [
      { "src": "week5.png", "caption": "Week 05 uploaded Google Drive folder evidence showing FPCB comparison, PANI review, methodology and budget resources." },
      { "src": "assets/research/rsc_d1ra08375a_fig1.jpg", "caption": "RSC reference figure used for sensor and material concept comparison." },
      { "src": "assets/research/rsc_d1ra08375a_fig2.jpg", "caption": "RSC reference figure used for fabrication or characterization comparison." },
      { "src": "assets/research/rsc_d1ra08375a_fig3.jpg", "caption": "RSC reference figure used for response curve or test result analysis." },
      { "src": "assets/research/rsc_d1ra08375a_fig4.jpg", "caption": "RSC reference figure used for material or device comparison." },
      { "src": "assets/research/rsc_d1ra08375a_fig5.jpg", "caption": "RSC reference figure used for extended validation comparison." }
    ],
    "folders": [
      "Comparison of FPCs",
      "Second Option FPCB",
      "Hand FPCB Cost",
      "Medical Fabrication Circuit Papers",
      "PANI Literature Review",
      "pH Methodology"
    ],
    "summary": "Week 05 focused on materials, fabrication feasibility and budget. The main work was to compare flexible PCB and flexible sensor substrate options, study PANI pH sensing methodology, review medical fabrication papers and estimate the practical cost of the prototype. PET, silver conductive traces, carbon-based electrodes and PANI active sensing material were considered as a low-cost material stack. This week also developed the methodology for PANI-based pH measurement, including electrode fabrication, calibration buffers and expected pH response. Budget planning was important because the project target is to create a prototype that can be developed within a realistic undergraduate FYP cost range in Sri Lanka.",
    "goals": "The goals were to compare flexible substrate materials, prepare the PANI pH sensing methodology, study medical fabrication papers, estimate hand-fabrication cost and identify a realistic low-cost material stack for the wound patch.",
    "keyFindings": [
      "PET is a practical low-cost flexible substrate for early-stage prototype development.",
      "Silver, carbon and PANI materials can be combined to create a low-cost electrochemical sensing structure.",
      "PANI is attractive because its protonation state changes with pH, producing a measurable electrochemical response.",
      "Screen printing or stencil-based hand fabrication is more accessible than cleanroom microfabrication.",
      "Calibration using known pH buffer solutions is essential to convert sensor voltage into wound pH values.",
      "Budget estimation showed that a prototype can potentially be developed within a manageable FYP cost range if expensive fabrication routes are avoided."
    ],
    "decisions": "The project finalized the PET/silver/carbon/PANI direction for the flexible sensing patch. A low-cost hand-fabrication and screen-printing-based method was selected as the practical route. The budget and methodology documents were prepared to support future fabrication and testing.",
    "rejected": "Expensive cleanroom-only material stacks were not selected as the primary route. Fully commercial flexible medical PCB fabrication was considered but not selected as the first prototype method due to cost and accessibility. Complex multi-analyte sensing was postponed until the pH sensing system is validated.",
    "nextWeek": "The next week moved toward a stronger hardware blueprint, funding preparation, equipment requirement identification and dataset preparation through research papers.",
    "evidence": "Week 05 evidence includes FPCB comparison files, second-option FPCB resources, hand fabrication cost planning, PANI literature review and pH methodology documents."
  },
  {
    "id": 6,
    "label": "Week 06",
    "dates": "June 2026",
    "phase": "Hardware Blueprint, Funding and Dataset Preparation",
    "title": "Week 06 — Hardware Blueprint, Tool Requirements, Funding and Dataset Preparation",
    "status": "Completed",
    "resourceLink": "https://drive.google.com/drive/folders/1VHAVonh6CWdAb2n48IBA_CDyLyqctYkE",
    "images": [
      { "src": "assets/research/petal_fig1.jpg", "caption": "PETAL Figure 1 — multiplexed wound sensor patch concept used for dataset and design comparison." },
      { "src": "assets/research/petal_fig2.jpg", "caption": "PETAL Figure 2 — sensor fabrication and sensing layout used for flexible patch comparison." },
      { "src": "assets/research/petal_fig3.jpg", "caption": "PETAL Figure 3 — colorimetric sensor response used for comparison with electronic pH sensing." },
      { "src": "assets/research/petal_fig4.jpg", "caption": "PETAL Figure 4 — data acquisition and analysis flow used for system-level planning." },
      { "src": "assets/research/petal_fig5.jpg", "caption": "PETAL Figure 5 — wound assessment results used for dataset preparation." },
      { "src": "assets/research/petal_fig6.jpg", "caption": "PETAL Figure 6 — extended experimental validation used for benchmark comparison." }
    ],
    "folders": [
      "All two model collaboration",
      "Funding for FYP",
      "Dataset making through papers",
      "NSF requirement of tools",
      "Screen-Printed Carbon-PANI method vs Cleanroom Microfabrication"
    ],
    "summary": "Week 06 expanded the project from material and component selection into a complete implementation roadmap. The work focused on preparing a hardware and firmware blueprint for the smart wound monitoring patch, defining the disposable sensor patch and reusable electronics module, planning the sensor pin map, identifying required fabrication and testing tools, comparing fabrication strategies and preparing funding documents. A major part of this week was comparing low-cost screen-printed Carbon-PANI fabrication against cleanroom microfabrication methods. Research papers were also collected and analyzed to support dataset preparation, wound image interpretation and benchmark comparison. This week strengthened the project’s implementation readiness and provided documentation that can be used for supervisor review, funding requests and future prototype development.",
    "goals": "The goals were to produce a clear implementation blueprint, define the complete hardware architecture, identify equipment and facility requirements, compare fabrication methods, prepare funding justification and organize research-paper figures and datasets for future validation.",
    "keyFindings": [
      "A two-part system architecture is more practical: a disposable flexible sensing patch and a reusable coin-size electronics module.",
      "The flexible patch should include pH sensing electrodes and supporting contact lines, while the electronics module should handle signal conditioning, ADC conversion, processing, wireless transmission and power management.",
      "A 12-contact FFC/ZIF-style connection is suitable for separating the flexible patch from the electronics board.",
      "Low-cost Carbon-PANI screen printing is more feasible than cleanroom-based microfabrication for local undergraduate development.",
      "Important tools include screen printing materials, potentiostat/galvanostat access, laser cutting, precision dispensing, ultrasonic cleaning, spin coating or doctor blade processing and sterilization support.",
      "Funding is required for sensor materials, flexible fabrication, biomedical consumables, electronics components and testing resources.",
      "Research-paper image extraction and dataset preparation can support the explanation of wound sensing principles and benchmark the proposed system against published work."
    ],
    "decisions": "The project decided to continue with a locally feasible Carbon-PANI screen-printed flexible patch strategy and maintain the electronics as a reusable module. Week 06 documentation will be used as the central implementation reference for the next stage of fabrication and testing. The project also decided to include research figures in the portfolio to visually support the technical reasoning.",
    "rejected": "Cleanroom-based gold/SEBS fabrication was not selected as the main prototype route because it is expensive and less accessible. A camera-only or colorimetric-only approach was not selected as the main route because the project focuses on direct electronic sensing and telemetry. Overly complex multi-sensor implementation was postponed until the pH sensing path is physically validated.",
    "nextWeek": "The next week should focus on practical work: preparing the first Carbon-PANI electrode samples, finalizing required materials, setting up pH buffer calibration, validating the analog front-end and documenting real fabrication/test evidence.",
    "evidence": "Week 06 evidence includes hardware blueprint files, wound patch workbook, funding request documents, tool and equipment requirement sheets, fabrication method comparison files and research paper datasets."
  },
  {
    "id": 7,
    "label": "Week 07",
    "dates": "Coming soon",
    "phase": "Prototype Fabrication",
    "title": "Week 07 — Initial Sensor Patch Fabrication and Material Preparation",
    "status": "Coming soon",
    "resourceLink": "#",
    "images": [],
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 07 is planned as the first practical fabrication stage of the project. The expected work is to prepare the flexible substrate, test printing or coating methods, prepare Carbon-PANI sensing material, form initial electrode patterns and document the first physical sensor patch samples. This week should convert the design and methodology from previous weeks into real prototype evidence.",
    "goals": "Prepare the first physical flexible sensor samples, test material adhesion, verify electrode continuity and document the fabrication process step by step.",
    "keyFindings": [
      "Coming soon after fabrication work is completed."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "After initial fabrication, the project should move into calibration and electrical testing.",
    "evidence": "Coming soon."
  },
  {
    "id": 8,
    "label": "Week 08",
    "dates": "Coming soon",
    "phase": "Calibration and Testing",
    "title": "Week 08 — pH Buffer Calibration and Electrode Response Testing",
    "status": "Coming soon",
    "resourceLink": "#",
    "images": [],
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 08 is planned for pH calibration and basic electrochemical response testing. The fabricated sensor should be tested using standard pH buffer solutions such as pH 4, pH 7 and pH 9. The voltage response should be recorded, plotted and compared with the expected pH sensitivity range. This week will be important for proving whether the fabricated PANI electrode responds meaningfully to pH changes.",
    "goals": "Measure sensor response in known pH solutions, estimate sensitivity in mV/pH, evaluate repeatability and identify problems such as drift, noise or poor electrode stability.",
    "keyFindings": [
      "Coming soon after calibration tests are completed."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "The next step should be analog front-end integration and ADC-based digital measurement.",
    "evidence": "Coming soon."
  },
  {
    "id": 9,
    "label": "Week 09",
    "dates": "Coming soon",
    "phase": "Electronics Integration",
    "title": "Week 09 — Analog Front-End and ADC Integration",
    "status": "Coming soon",
    "resourceLink": "#",
    "images": [],
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 09 is planned for integrating the pH sensor with the electronic readout chain. The focus will be on connecting the sensor to the instrumentation amplifier or buffer stage, reading the output using the precision ADC and verifying that the circuit can capture stable pH-related voltage changes. This week will bridge the sensor fabrication stage with the embedded system stage.",
    "goals": "Build and test the analog front-end, connect the ADC, validate signal range, check noise performance and confirm that sensor data can be read digitally.",
    "keyFindings": [
      "Coming soon after electronics testing is completed."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "The next step should be firmware development and BLE data transmission.",
    "evidence": "Coming soon."
  },
  {
    "id": 10,
    "label": "Week 10",
    "dates": "Coming soon",
    "phase": "Firmware and Wireless Communication",
    "title": "Week 10 — ESP32 Firmware, BLE Communication and Data Logging",
    "status": "Coming soon",
    "resourceLink": "#",
    "images": [],
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 10 is planned for firmware development. The ESP32-S3 should be programmed to acquire ADC readings, apply calibration equations, calculate pH, read temperature and prepare data for wireless transmission. BLE communication can be implemented to send sensor data to a phone or computer. This week will make the system operate as a real smart monitoring device rather than only a sensor and circuit.",
    "goals": "Develop firmware for ADC reading, pH conversion, temperature reading, BLE data transfer and basic serial or mobile data logging.",
    "keyFindings": [
      "Coming soon after firmware development is completed."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "The next step should be full system integration with the flexible patch and electronics module.",
    "evidence": "Coming soon."
  },
  {
    "id": 11,
    "label": "Week 11",
    "dates": "Coming soon",
    "phase": "System Integration",
    "title": "Week 11 — Full Patch and Electronics Module Integration",
    "status": "Coming soon",
    "resourceLink": "#",
    "images": [],
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 11 is planned for combining the flexible patch, analog front-end, ADC, microcontroller, battery system and wireless communication into one integrated prototype. Mechanical connection, wiring, packaging and reliability will be important during this stage. The system should be tested as a complete device and not only as separate subsystems.",
    "goals": "Integrate the sensor patch with the electronics brain, verify electrical connections, test complete system operation and document the assembled prototype.",
    "keyFindings": [
      "Coming soon after integration work is completed."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "The next step should be simulated wound environment testing.",
    "evidence": "Coming soon."
  },
  {
    "id": 12,
    "label": "Week 12",
    "dates": "Coming soon",
    "phase": "Simulated Wound Testing",
    "title": "Week 12 — Simulated Wound Fluid Testing and Performance Evaluation",
    "status": "Coming soon",
    "resourceLink": "#",
    "images": [],
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 12 is planned for testing the integrated system in wound-representative conditions. Simulated wound fluid or controlled test solutions can be used to evaluate sensor behavior closer to the intended application environment. Temperature, pH variation, moisture or ionic effects may be tested depending on available facilities.",
    "goals": "Evaluate the system under simulated wound conditions, compare readings with reference instruments, observe drift and validate practical measurement performance.",
    "keyFindings": [
      "Coming soon after simulated wound testing is completed."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "The next step should be data analysis and improvement of the prototype.",
    "evidence": "Coming soon."
  },
  {
    "id": 13,
    "label": "Week 13",
    "dates": "Coming soon",
    "phase": "Data Analysis and Optimization",
    "title": "Week 13 — Data Analysis, Calibration Refinement and Design Optimization",
    "status": "Coming soon",
    "resourceLink": "#",
    "images": [],
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 13 is planned for analyzing the collected calibration and testing data. Sensor sensitivity, repeatability, noise, drift, temperature effect and system limitations should be reviewed. Based on the results, the sensor fabrication process, circuit design or firmware calibration equation can be improved.",
    "goals": "Analyze experimental data, improve calibration accuracy, identify design limitations and prepare final graphs, tables and technical discussion for the report.",
    "keyFindings": [
      "Coming soon after data analysis is completed."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "The next step should be final demonstration preparation, documentation and presentation material development.",
    "evidence": "Coming soon."
  },
  {
    "id": 14,
    "label": "Week 14",
    "dates": "Coming soon",
    "phase": "Final Documentation",
    "title": "Week 14 — Final Prototype Demonstration, Report Preparation and Portfolio Completion",
    "status": "Coming soon",
    "resourceLink": "#",
    "images": [],
    "folders": [
      "Coming soon"
    ],
    "summary": "Week 14 is planned as the final documentation and demonstration preparation stage. The complete project journey, design decisions, prototype results, limitations and future improvements should be organized clearly. The GitHub portfolio, final report, presentation slides and demonstration materials should be updated so supervisors and external reviewers can understand the full engineering process.",
    "goals": "Prepare final report content, update the portfolio website, organize all evidence, create presentation material and document the complete system demonstration.",
    "keyFindings": [
      "Coming soon after final documentation is completed."
    ],
    "decisions": "Coming soon.",
    "rejected": "Coming soon.",
    "nextWeek": "Final project submission and presentation.",
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