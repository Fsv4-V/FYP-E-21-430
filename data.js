const PROJECT = {
  title: "Smart Diabetic Wound Monitoring Patch",
  subtitle: "Flexible PANI pH Sensor for Real-Time Wound Monitoring",
  student: "E/21/430",
  degree: "Final Year Project · Department of Electrical and Electronic Engineering",
  university: "University of Peradeniya",
  contactEmail: "e21430@eng.pdn.ac.lk",
  departmentSupervisor: "Dr. Ruwan Ranaweera",
  medicalSupervisor: "Dr. Manjula Peiris",
  medicalFaculty: "Faculty of Medicine, University of Peradeniya",
  datasheetAndPapersLink: "https://drive.google.com/drive/folders/1-xBttuHcKbzLprP1NRHI01qpF6mVDaKS?usp=drive_link",
  previousDatasheetLink: "https://drive.google.com/drive/folders/1x7yPC0FFnY04jbxwv78BcZvNjyxhlzZH?usp=drive_link"
};

const WEEK_LINKS = {
  1: "https://drive.google.com/drive/folders/1tkGkRAXig2UpzIEpuL-YDCpxefRbUTq2?usp=drive_link",
  2: "https://drive.google.com/drive/folders/15nu7y297LGzbr29fADAJ7siThBSDOKnj?usp=drive_link",
  3: "https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link",
  4: "https://drive.google.com/drive/folders/1TXObdQxO2R-fMgzQKd96bVRRzY6lFjVY?usp=drive_link",
  5: "https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link"
};

const WEEKS = [
  {
    week: "Week 01",
    title: "Problem Identification and pH Variation Study",
    status: "Completed",
    phase: "Problem Definition",
    description: "Studied diabetic wound healing, wound pH variation, and why pH is useful as an infection and healing indicator. Initial sensor technologies were compared and the smart wound dressing concept was selected as the main project direction.",
    work: ["Wound pH variation study", "Sensor comparison", "Smart wound dressing concept review"],
    link: WEEK_LINKS[1]
  },
  {
    week: "Week 02",
    title: "Clinical Background and Similar Product Research",
    status: "Completed",
    phase: "Clinical and Concept Research",
    description: "Reviewed clinical wound-healing information, flexible circuit printing, wearable sensor approaches, and similar products such as smart wound dressings. This week helped connect the electronic design to real medical needs.",
    work: ["Clinical pathology reference study", "Flexible circuit printing research", "Similar product benchmarking", "Wearable sensor review"],
    link: WEEK_LINKS[2]
  },
  {
    week: "Week 03",
    title: "Datasheets, Papers and Component Selection",
    status: "Completed",
    phase: "Resource Collection",
    description: "Collected component datasheets, research papers, useful links, medical fabrication company details, and pH sensor comparison matrices. These resources were used to select suitable components and justify the sensing method.",
    work: ["Datasheet collection", "Research paper collection", "Medical fabrication company search", "pH sensor matrix preparation"],
    link: WEEK_LINKS[3]
  },
  {
    week: "Week 04",
    title: "Electronics Core and Fabrication Planning",
    status: "Completed",
    phase: "System Design",
    description: "Focused on the coin-size electronics module and fabrication route. The system architecture was refined using ESP32-S3, ADS1115, INA333, TMP117 temperature sensing, BLE communication, and low-power battery operation.",
    work: ["Coin-size electronics module planning", "Fabrication facility research", "System architecture design", "Component-level decision making"],
    link: WEEK_LINKS[4]
  },
  {
    week: "Week 05",
    title: "Flexible PCB Comparison and Cost Estimation",
    status: "Completed",
    phase: "FPCB and Costing",
    description: "Compared flexible PCB materials and fabrication options, prepared hand-made FPCB cost estimates, collected medical fabrication circuit papers, and consolidated the PANI pH sensing methodology.",
    work: ["Flexible PCB comparison", "Hand-made FPCB cost estimation", "PANI pH literature review", "pH sensing methodology preparation"],
    link: WEEK_LINKS[5]
  },
  {
    week: "Week 06",
    title: "PANI Synthesis and First Sensor Fabrication",
    status: "Coming soon",
    phase: "Upcoming Work",
    description: "Planned work: begin PANI preparation, prepare electrode materials, and start first sensor fabrication trials.",
    work: ["Coming soon"],
    link: ""
  },
  {
    week: "Week 07",
    title: "Electrode Printing and Reference Electrode Preparation",
    status: "Coming soon",
    phase: "Upcoming Work",
    description: "Planned work: print electrode patterns and prepare the Ag/AgCl reference electrode for the sensor patch.",
    work: ["Coming soon"],
    link: ""
  },
  {
    week: "Week 08",
    title: "pH Calibration and Sensor Response Testing",
    status: "Coming soon",
    phase: "Upcoming Work",
    description: "Planned work: test the sensor response with standard buffer solutions and observe sensitivity across the pH range.",
    work: ["Coming soon"],
    link: ""
  },
  {
    week: "Week 09",
    title: "Temperature Compensation using TMP117",
    status: "Coming soon",
    phase: "Upcoming Work",
    description: "Planned work: integrate TMP117 readings and use temperature information to improve pH measurement reliability.",
    work: ["Coming soon"],
    link: ""
  },
  {
    week: "Week 10",
    title: "Moisture Sensing and Multi-Parameter Integration",
    status: "Coming soon",
    phase: "Upcoming Work",
    description: "Planned work: combine pH, temperature, and moisture measurements into one monitoring system.",
    work: ["Coming soon"],
    link: ""
  },
  {
    week: "Week 11",
    title: "Firmware Development and BLE Communication",
    status: "Coming soon",
    phase: "Upcoming Work",
    description: "Planned work: develop ESP32-S3 firmware for sensor reading, processing, and wireless data transmission.",
    work: ["Coming soon"],
    link: ""
  },
  {
    week: "Week 12",
    title: "Prototype Assembly and Enclosure Planning",
    status: "Coming soon",
    phase: "Upcoming Work",
    description: "Planned work: assemble the sensor patch with the electronics module and improve the physical layout.",
    work: ["Coming soon"],
    link: ""
  },
  {
    week: "Week 13",
    title: "System Testing and Result Analysis",
    status: "Coming soon",
    phase: "Upcoming Work",
    description: "Planned work: test the full prototype and compare measured results with expected sensor behavior.",
    work: ["Coming soon"],
    link: ""
  },
  {
    week: "Week 14",
    title: "Final Documentation and Presentation Preparation",
    status: "Coming soon",
    phase: "Upcoming Work",
    description: "Planned work: prepare final report content, presentation materials, and complete project documentation.",
    work: ["Coming soon"],
    link: ""
  }
];

const SYSTEM_COMPONENTS = [
  { name: "PANI pH Electrode", detail: "Main potentiometric pH sensing layer for wound pH monitoring." },
  { name: "Ag/AgCl Reference Electrode", detail: "Stable reference electrode for measuring the PANI electrode potential." },
  { name: "TMP117 Temperature Sensor", detail: "Digital high-accuracy temperature sensor used for wound temperature monitoring and pH correction." },
  { name: "ADS1115 ADC", detail: "16-bit ADC for reading small sensor signals with better resolution than the internal MCU ADC." },
  { name: "INA333 Instrumentation Amplifier", detail: "Low-noise analog front-end for high-impedance sensor signal conditioning." },
  { name: "ESP32-S3", detail: "Main controller for data processing, BLE communication, and low-power operation." }
];

const LIMITATIONS = [
  "Sensor stability must be tested over longer time periods before real clinical use.",
  "PANI film quality may vary during hand fabrication, so calibration is necessary.",
  "The prototype must be evaluated only using safe lab samples and simulated wound environments before any medical testing.",
  "Wireless operation and battery life must be validated under continuous monitoring conditions."
];
