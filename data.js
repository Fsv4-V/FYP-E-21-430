// Corrected project data.
// All required links and names are stored here so they are visible in the website.

const PAPER_DATASHEET_LINK = "https://drive.google.com/drive/folders/1-xBttuHcKbzLprP1NRHI01qpF6mVDaKS?usp=drive_link";

const PROJECT = {
  email: "e21430@eng.pdn.ac.lk",
  departmentSupervisor: "Dr. Ruwan Ranaweera",
  medicalSupervisor: "Dr. Manjula Peiris",
  medicalSupervisorFaculty: "Faculty of Medicine, University of Peradeniya",
  university: "University of Peradeniya",
  temperatureSensor: "TMP117"
};

const WEEKS = [
  {
    "number": "Week 01",
    "status": "Completed",
    "title": "Problem definition and pH background study",
    "description": "Studied diabetic wound problems, wound pH variation, sensor comparison and the smart wound dressing concept. This week helped define wound pH as the main biomarker for the project.",
    "usedFor": [
      "pH variation references",
      "sensor comparison",
      "smart wound dressing idea"
    ],
    "link": "https://drive.google.com/drive/folders/1tkGkRAXig2UpzIEpuL-YDCpxefRbUTq2?usp=drive_link"
  },
  {
    "number": "Week 02",
    "status": "Completed",
    "title": "Clinical pathology and wearable sensor research",
    "description": "Reviewed wound healing biology, pathology references, flexible circuit printing and wearable sensor examples. Similar products were used to understand real biomedical patch designs.",
    "usedFor": [
      "pathology background",
      "flexible circuit print",
      "wearable sensor references",
      "similar products"
    ],
    "link": "https://drive.google.com/drive/folders/15nu7y297LGzbr29fADAJ7siThBSDOKnj?usp=drive_link"
  },
  {
    "number": "Week 03",
    "status": "Completed",
    "title": "Datasheets, pH matrix and similar device papers",
    "description": "Collected component datasheets, pH sensor matrix details, medical fabrication company information and similar device papers. These resources supported component selection and design justification.",
    "usedFor": [
      "component datasheets",
      "pH sensor matrix",
      "similar device papers",
      "fabrication company details"
    ],
    "link": "https://drive.google.com/drive/folders/1AvgZ7KhovJv3lWEOTtS5212f1o_M0Pgu?usp=drive_link"
  },
  {
    "number": "Week 04",
    "status": "Completed",
    "title": "Fabrication route and coin-size electronics brain",
    "description": "Worked on fabrication facility options and the compact electronics design. The project architecture was arranged around ESP32-S3, ADS1115, INA333, TMP117, power regulation and wireless communication.",
    "usedFor": [
      "fabrication facility selection",
      "coin-size electronics design",
      "ESP32-S3 brain",
      "TMP117 temperature sensor"
    ],
    "link": "https://drive.google.com/drive/folders/1TXObdQxO2R-fMgzQKd96bVRRzY6lFjVY?usp=drive_link"
  },
  {
    "number": "Week 05",
    "status": "Completed",
    "title": "Flexible PCB materials, PANI method and budget",
    "description": "Compared flexible PCB options, hand fabrication cost, medical circuit papers, PANI literature and pH methodology. This week supported the practical low-cost fabrication plan.",
    "usedFor": [
      "FPCB comparison",
      "PANI literature review",
      "pH methodology",
      "hand fabrication cost"
    ],
    "link": "https://drive.google.com/drive/folders/1OfeqPIWTkQ7VQoAH5lcxQbUaQs0dqHPc?usp=drive_link"
  },
  {
    "number": "Week 06",
    "status": "Coming soon",
    "title": "Week 06 — Coming soon",
    "description": "Upcoming project work will be added here after completion. This placeholder is included to show the full Week 01–14 project timeline.",
    "usedFor": [
      "coming soon"
    ],
    "link": ""
  },
  {
    "number": "Week 07",
    "status": "Coming soon",
    "title": "Week 07 — Coming soon",
    "description": "Upcoming project work will be added here after completion. This placeholder is included to show the full Week 01–14 project timeline.",
    "usedFor": [
      "coming soon"
    ],
    "link": ""
  },
  {
    "number": "Week 08",
    "status": "Coming soon",
    "title": "Week 08 — Coming soon",
    "description": "Upcoming project work will be added here after completion. This placeholder is included to show the full Week 01–14 project timeline.",
    "usedFor": [
      "coming soon"
    ],
    "link": ""
  },
  {
    "number": "Week 09",
    "status": "Coming soon",
    "title": "Week 09 — Coming soon",
    "description": "Upcoming project work will be added here after completion. This placeholder is included to show the full Week 01–14 project timeline.",
    "usedFor": [
      "coming soon"
    ],
    "link": ""
  },
  {
    "number": "Week 10",
    "status": "Coming soon",
    "title": "Week 10 — Coming soon",
    "description": "Upcoming project work will be added here after completion. This placeholder is included to show the full Week 01–14 project timeline.",
    "usedFor": [
      "coming soon"
    ],
    "link": ""
  },
  {
    "number": "Week 11",
    "status": "Coming soon",
    "title": "Week 11 — Coming soon",
    "description": "Upcoming project work will be added here after completion. This placeholder is included to show the full Week 01–14 project timeline.",
    "usedFor": [
      "coming soon"
    ],
    "link": ""
  },
  {
    "number": "Week 12",
    "status": "Coming soon",
    "title": "Week 12 — Coming soon",
    "description": "Upcoming project work will be added here after completion. This placeholder is included to show the full Week 01–14 project timeline.",
    "usedFor": [
      "coming soon"
    ],
    "link": ""
  },
  {
    "number": "Week 13",
    "status": "Coming soon",
    "title": "Week 13 — Coming soon",
    "description": "Upcoming project work will be added here after completion. This placeholder is included to show the full Week 01–14 project timeline.",
    "usedFor": [
      "coming soon"
    ],
    "link": ""
  },
  {
    "number": "Week 14",
    "status": "Coming soon",
    "title": "Week 14 — Coming soon",
    "description": "Upcoming project work will be added here after completion. This placeholder is included to show the full Week 01–14 project timeline.",
    "usedFor": [
      "coming soon"
    ],
    "link": ""
  }
];

const RESOURCES = [
  ...WEEKS.filter(week => week.link).map(week => ({
    type: "Week resource",
    title: `${week.number} Drive folder`,
    description: `Resources used for ${week.number}: ${week.usedFor.join(", ")}.`,
    link: week.link
  })),
  {
    type: "Papers & datasheets",
    title: "Project papers and datasheets Drive folder",
    description: "Main folder for papers, datasheets and reference files used in the project.",
    link: PAPER_DATASHEET_LINK
  }
];

const ARCHITECTURE = [
  {
    tag: "Sensor layer",
    title: "Flexible wound sensing patch",
    description: "PANI pH electrode, Ag/AgCl reference electrode, TMP117 temperature sensor and moisture/impedance sensing region."
  },
  {
    tag: "Signal readout",
    title: "Analog and digital conversion",
    description: "INA333 instrumentation amplifier and ADS1115 16-bit ADC are used to read small sensor signals accurately."
  },
  {
    tag: "Embedded system",
    title: "ESP32-S3 wireless brain",
    description: "ESP32-S3 handles data processing, BLE communication and future mobile-app connectivity."
  },
  {
    tag: "Power",
    title: "Low-power patch operation",
    description: "Coin-cell compatible power design is considered for compact and wearable operation."
  },
  {
    tag: "Temperature",
    title: "TMP117 digital temperature sensor",
    description: "TMP117 is used for wound temperature monitoring and pH temperature compensation."
  },
  {
    tag: "Evidence",
    title: "Drive-based weekly documentation",
    description: "Each week uses linked Google Drive resources instead of displaying uploaded images on the page."
  }
];
