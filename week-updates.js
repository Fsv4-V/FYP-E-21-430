/* ============================================================
   FYP Portfolio safe patch — Weeks 11, 12 and 13 ONLY

   Purpose:
   - Retain Weeks 01–10 exactly as they already appear.
   - Retain all overview, architecture, sensor, resource, reference,
     validation and contact sections without alteration.
   - Replace content only for week IDs 11, 12 and 13.

   Load this file AFTER data.js and BEFORE script.js.
============================================================ */

(() => {
  if (typeof WEEKS === "undefined" || !Array.isArray(WEEKS)) {
    console.error("Week update patch could not find the WEEKS array. Load data.js first.");
    return;
  }

  const updateWeek = (id, changes) => {
    if (![11, 12, 13].includes(id)) {
      console.warn(`Protected week ${id} was not changed.`);
      return;
    }

    const index = WEEKS.findIndex((week) => week.id === id);

    if (index === -1) {
      console.warn(`Week ${id} was not found and was not changed.`);
      return;
    }

    Object.assign(WEEKS[index], changes);
  };

  /* ---------------- WEEK 11 ---------------- */

  updateWeek(11, {
    dates: "Portfolio updated 28 July 2026",

    phase:
      "TMP117, Tiny-SMD Practice and Initial CMJ Feedback · 28 July 2026",

    title:
      "Week 11 — TMP117 Study, Tiny-SMD Soldering Practice, STM32 Planning and Initial Manuscript Feedback",

    status: "Completed",

    resourceLink: "#",

    images: [
      {
        src: "assets/week11/Week11_Intro_Summary.png",
        caption:
          "Week 11 — TMP117 sensor study, tiny-SMD soldering practice and STM32 temperature-interface planning."
      },
      {
        src: "assets/week11/Week11_Solder_Paste_Original.jpg",
        caption:
          "Special solder paste selected for miniature SMD soldering practice."
      },
      {
        src: "assets/week11/Week11_Fine_Soldering_Reference.png",
        caption:
          "Fine-tip soldering method studied for handling miniature surface-mount pads."
      },
      {
        src: "assets/week11/Week11_Hot_Air_Stencil_Reference.png",
        caption:
          "Stencil alignment and controlled hot-air soldering method studied before TMP117 assembly."
      },
      {
        src: "assets/week11/Week11_TMP117_Specification_Reference.png",
        caption:
          "TMP117 specifications reviewed for accuracy, digital resolution and package requirements."
      },
      {
        src: "assets/week11/Week11_TMP117_Interface_Reference.png",
        caption:
          "TMP117 I²C connection concept used for STM32 interface and display planning."
      }
    ],

    folders: [
      "TMP117 Package, Pin Orientation and Datasheet Study",
      "Tiny-SMD Soldering Tools and BOM",
      "Hot-Air and Fine-Pad Practice",
      "STM32 Temperature-Monitoring Interface Plan",
      "Tutorial Videos and Visual References",
      "Colombo Medical Journal — Initial Supervisor Comments"
    ],

    summary:
      "Week 11 focused on the practical preparation required to integrate the very small TMP117 temperature sensor into the wound-monitoring system. We studied the 2 mm × 2 mm WSON package, pad orientation, I²C connection requirements and suitable PCB trace handling. Before working with the actual TMP117 device, we practised on a similarly sized spare SMD component that had been supplied incorrectly with an earlier order. Special solder paste, fine tools and a hot-air rework station were used, with the station set to approximately 300 °C and low airflow during the practice trials. Several attempts failed because the component moved easily, the pads were difficult to align and excess solder caused bridging. Repeated practice improved our control of paste quantity, component positioning, heating time and fine-wire handling. In parallel, we planned an STM32-based interface that will read temperature, display the measured value, compare it with a selected setpoint and later drive status indicators or a temperature-control output. During the same week, we received the first detailed comments on the research manuscript being prepared for the Colombo Medical Journal. We identified that every figure and table must be introduced, cited and discussed in the body text, that earlier comments must be addressed carefully, and that all AI-assisted wording must be understood, verified and rewritten where necessary by the authors.",

    goals:
      "Understand the TMP117 package and electrical interface; identify the required soldering tools and materials; gain hands-on experience with miniature SMD handling; and prepare the data-reading and control logic for an STM32 temperature-monitoring interface; and convert the initial Colombo Medical Journal feedback into a clear manuscript-revision checklist.",

    keyFindings: [
      "The TMP117 WSON package is only 2 mm × 2 mm, so pad alignment, solder-paste quantity and low-airflow handling are critical.",
      "The TMP117 provides a signed 16-bit digital temperature result. The planned conversion is T(°C) = int16(raw register) × 0.0078125.",
      "For the planned controller, the basic temperature error is e[k] = Tset − Tmeasured. A later PID implementation may use u[k] = Kp·e[k] + Ki·Σe[k]Δt + Kd·(e[k]−e[k−1])/Δt.",
      "Initial soldering failures were useful because they identified practical problems with component movement, bridging, overheating risk and fine-pad access.",
      "The tutorial screenshots are learning references and must not be presented as photographs of project fabrication.",
      "The initial Colombo Medical Journal feedback showed that figures and tables require explicit in-text references and explanation, while every sentence must be checked and owned by the authors."
    ],

    decisions:
      "Use a practice component before soldering the actual TMP117; keep the hot-air flow low; apply only a small, controlled quantity of solder paste; verify orientation under magnification; develop the STM32 temperature-reading interface before connecting any heater, fan or actuator stage; and create a section-by-section checklist for responding to the initial Colombo Medical Journal comments.",

    rejected:
      "Directly soldering the actual TMP117 without practice, using uncontrolled high airflow, applying excessive paste and describing tutorial screenshots as original project evidence were rejected. The planned STM32 control interface is not yet reported as a completed closed-loop controller.",

    nextWeek:
      "Collect and organise the required electrode chemicals, confirm laboratory safety and process requirements, revise the Colombo Medical Journal draft using the Week 11 comments, and request or record the next round of feedback.",

    evidence:
      "Original evidence includes the solder-paste photograph and the team's practical SMD trials. Reference videos: <a href=\"https://www.youtube.com/watch?v=skDwEgYY1UA\" target=\"_blank\" rel=\"noopener\">Tiny-SMD soldering tutorial</a> and <a href=\"https://www.youtube.com/watch?v=XHfyc8TiGmM\" target=\"_blank\" rel=\"noopener\">TMP117 precision temperature-sensor tutorial</a>. The initial Colombo Medical Journal revision work is supported by the supervisor's written comments and the team's comment checklist. Generated summary graphics are presentation aids and are identified separately from original photographs."
  });

  /* ---------------- WEEK 12 ---------------- */

  updateWeek(12, {
    dates: "Materials obtained Friday, 31 July 2026",

    phase:
      "Chemical Collection and CMJ Draft Revision · 31 July 2026",

    title:
      "Week 12 — Chemical Collection, Laboratory Preparation and Colombo Medical Journal Draft Revision",

    status: "Completed",

    resourceLink: "#",

    images: [
      {
        src: "assets/week12/Week12_Intro_Summary.png",
        caption:
          "Week 12 — Chemical collection, laboratory preparation, safety planning and process review."
      },
      {
        src: "assets/week12/Week12_AgCl_Label_Original.jpg",
        caption:
          "Silver chloride obtained from the Faculty of Science for Ag/AgCl electrode preparation."
      },
      {
        src: "assets/week12/Week12_AgCl_Sample_Original.jpg",
        caption:
          "Silver chloride container and prepared sample tube for the next laboratory stage."
      },
      {
        src: "assets/week12/Week12_AgCl_Materials_Original.jpg",
        caption:
          "Silver chloride and sample material organised for supervised laboratory work."
      }
    ],

    folders: [
      "Chemical Supplier Discussion and Collection",
      "Silver Chloride and Electrode Materials",
      "Level 3 Laboratory Preparation",
      "Safety, SDS and Process Guidelines",
      "Colombo Medical Journal — Draft Revision and Additional Comments"
    ],

    summary:
      "Week 12 prepared the project for the next chemical-processing and electrode-fabrication stage. We discussed the required materials and specifications with the chemical supplier and obtained the necessary chemicals by Friday, 31 July 2026, rather than Wednesday. The collected materials included analytical-reagent-grade silver chloride and a separately prepared sample portion for the planned electrode work. We also reviewed the laboratory workflow, chemical handling requirements, safety precautions, standardisation guidance and the steps that must be understood before entering supervised Level 3 chemical-processing work. During the same week, we corrected the Colombo Medical Journal draft using the comments identified in Week 11. We checked the revised sections against the supervisor's feedback and supporting source material, verified technical statements and references, and recorded a further round of comments for the next correction cycle. This made the manuscript revision an iterative process rather than a single automatic rewrite.",

    goals:
      "Collect and document the required chemicals; prepare a safe, traceable laboratory workflow; organise SDS and process guidance; correct the Colombo Medical Journal draft using the initial comments; verify claims against the cited sources; and record the next round of comments for continued revision.",

    keyFindings: [
      "The required chemicals were obtained on Friday, 31 July 2026; the portfolio should not state that they were obtained on Wednesday.",
      "The silver chloride bottle label identifies analytical-reagent material with approximately 99% assay, suitable for planned reference-electrode preparation subject to supervisor and laboratory approval.",
      "Chemical collection and process study are preparation activities; they do not by themselves prove that an electrode was fabricated or validated.",
      "Every figure and table in the manuscript must be introduced, cited and discussed in the body text.",
      "AI may assist with wording and organisation, but the authors must understand, verify and own every sentence.",
      "The Colombo Medical Journal draft required more than one correction cycle: the Week 11 comments were implemented, the revised version was checked against source material, and further comments were recorded for Week 13."
    ],

    decisions:
      "Record the Friday collection date, preserve the original material photographs, complete the safety and process checklist before laboratory work, revise the Colombo Medical Journal manuscript manually using tracked comments, and verify each corrected statement against the relevant source before accepting it.",

    rejected:
      "Reporting Wednesday as the collection date, presenting material collection as completed sensor fabrication, placing figures or tables without in-text references and submitting unreviewed AI-generated manuscript text were rejected.",

    nextWeek:
      "Study the complete electrode-fabrication sequence for the PANI working electrode and Ag/AgCl reference electrode, review screen-printing and polymerization steps, and complete the next section-by-section Colombo Medical Journal correction cycle using the additional comments recorded in Week 12.",

    evidence:
      "Original evidence consists of the three silver-chloride and sample-tube photographs taken during material collection and organisation. The generated Week 12 summary is a presentation aid. Colombo Medical Journal revision evidence is based on the corrected draft, the supervisor's written feedback, the cited source material used for verification and the team's updated comment checklist."
  });

  /* ---------------- WEEK 13 ---------------- */

  updateWeek(13, {
    dates: "Portfolio updated 2 August 2026",

    phase:
      "Electrode Process Study and CMJ Correction Cycle · 2 August 2026",

    title:
      "Week 13 — Electrode Fabrication Process Study, PANI Preparation and Continued Colombo Medical Journal Revision",

    status: "Completed",

    resourceLink:
      "assets/week13/CMJ_Current_Revised_Manuscript_38_References.pdf",

    images: [
      {
        src: "assets/week13/Week13_Intro_Summary.png",
        caption:
          "Week 13 — Electrode fabrication, screen printing and PANI polymerization preparation."
      },
      {
        src: "assets/week13/CMJ_Manuscript_Title_Page.png",
        caption:
          "Current Colombo Medical Journal manuscript — title page of the revised review."
      },
      {
        src:
          "assets/week13/CMJ_References_31_to_38_and_Appendix.png",
        caption:
          "Current manuscript — references 31–38 and the beginning of Supplementary Appendix A."
      },
      {
        src:
          "assets/week13/Week13_Electrode_Structure_Reference.png",
        caption:
          "Screen-printed electrode structure showing the working, counter and pseudoreference electrodes."
      },
      {
        src:
          "assets/week13/Week13_Mask_Preparation_Reference.png",
        caption:
          "Mask preparation method studied for the screen-printing process."
      },
      {
        src:
          "assets/week13/Week13_Ink_Application_Reference.png",
        caption:
          "Conductive-ink preparation and application during screen printing."
      },
      {
        src:
          "assets/week13/Week13_Ink_Spreading_Reference.png",
        caption:
          "Conductive ink spread uniformly across the prepared electrode pattern."
      },
      {
        src:
          "assets/week13/Week13_Drying_Reference.png",
        caption:
          "Drying stage after printing the electrode pattern."
      },
      {
        src:
          "assets/week13/Week13_PANI_Polymerization_Reference.png",
        caption:
          "Electrochemical polymerization process studied for PANI formation on the electrode surface."
      },
      {
        src:
          "assets/week13/Week13_Post_Processing_Reference.png",
        caption:
          "Filtration and post-processing steps studied after PANI synthesis."
      }
    ],

    folders: [
      "PANI Working-Electrode Preparation",
      "Standard Ag/AgCl Reference-Electrode Preparation",
      "Screen-Printed Electrode Architecture",
      "Mask, Ink Application, Printing and Drying",
      "Electrochemical Polymerization and Post-Processing",
      "Colombo Medical Journal — Section-by-Section Correction Process",
      "Current Revised Manuscript — 17 Pages and 38 References"
    ],

    summary:
      "Week 13 focused on understanding and documenting the laboratory route for the two main electrochemical elements required by the project: the PANI working electrode and the standard Ag/AgCl reference electrode. We reviewed the structure of screen-printed electrochemical electrodes and followed the process sequence from mask preparation and conductive-ink application to ink spreading, drying and careful handling of the printed pattern. We also studied electrochemical polymerization as a possible route for forming a PANI sensing layer and reviewed the expected post-processing steps. The supplied images in this section are mainly screenshots from a referenced demonstration video, so they are presented as process-learning evidence rather than photographs proving that the project team completed every fabrication step. In parallel, we continued the Colombo Medical Journal correction process using the additional Week 12 comments. The draft was checked section by section, figures and tables were linked to the relevant discussion, unsupported or unclear statements were corrected using the cited sources, and the method, results, discussion and conclusion sections were aligned more carefully with the actual work completed by the team. The current revised working draft is 17 pages long and contains 38 numbered references. It reports a 94-paper evidence index and a 19-study manually verified core, while clearly limiting claims about shorter healing time to a future comparative clinical-validation question.",

    goals:
      "Define a clear, safe and reproducible fabrication sequence for the PANI working electrode and Ag/AgCl reference electrode; understand screen-printing and polymerization requirements; identify the equipment and materials needed for supervised laboratory execution; and complete a structured Colombo Medical Journal correction pass using the latest comments and verified source material.",

    keyFindings: [
      "The electrochemical sensing platform must clearly distinguish the PANI working electrode from the Ag/AgCl reference electrode and any counter-electrode structure used during polymerization or characterization.",
      "The studied screen-printing sequence is: prepare the mask, apply the conductive ink, spread the ink uniformly, dry or cure the printed pattern, inspect the tracks and then proceed to functional coating or polymerization.",
      "PANI polymerization conditions and post-processing must be recorded using an approved batch sheet before the process is reported as completed.",
      "Copper or other routing conductors should remain insulated from ionic test liquid; only the intended carbon, PANI, Ag/AgCl or controlled ionic interface should be exposed.",
      "Reference-video screenshots help explain the workflow but cannot replace original laboratory records, measured results or project photographs.",
      "The manuscript discussion should explain what each figure and table shows, why it matters and how it supports the project's conclusions.",
      "The Week 13 correction process improved consistency between the Colombo Medical Journal manuscript's methods, figures, tables, results, discussion and conclusions.",
      "The current revised working draft contains 17 pages and 38 references; screenshots of its title page and reference/appendix page are included as original manuscript-development evidence."
    ],

    decisions:
      "Use the reference material to prepare a supervisor-approved laboratory procedure, begin with a small one-electrode or one-zone trial, document each batch and curing condition, keep third-party screenshots clearly attributed, and continue the Colombo Medical Journal manuscript correction in the authors' own verified wording with every comment tracked to its response.",

    rejected:
      "Claiming that the reference-video screenshots show the project team's own fabrication, reporting unmeasured electrode performance, skipping safety approval and treating manuscript revision as an automatic AI rewriting task were rejected.",

    nextWeek:
      "Future weeks will retain the existing portfolio sequence. Planned work includes obtaining supervisor and laboratory approval, executing a small controlled electrode-fabrication trial, recording original photographs and batch data, beginning electrical and electrochemical validation, completing the figure/table cross-reference audit, preparing a point-by-point response to comments and submitting the corrected manuscript for the next supervisor review.",

    evidence:
      "Process-reference video: <a href=\"https://www.youtube.com/watch?v=Pc3AqwOQAHY\" target=\"_blank\" rel=\"noopener\">screen-printed electrode and fabrication-process reference</a>. The screenshots are attributed reference material. The generated summary is a presentation aid; future laboratory execution must be supported by original photographs, batch records and measured data. Colombo Medical Journal revision evidence consists of the included current revised PDF, actual screenshots of pages 1 and 13, the Week 12 comments, the authors' response checklist and the cited sources used to verify the corrections. The manuscript is a working draft and must not be presented as an accepted or published journal article."
  });
})();
