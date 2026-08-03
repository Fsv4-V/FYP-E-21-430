/* ============================================================
   FYP Portfolio Update — Weeks 11, 12 and 13 ONLY

   This file:
   - Keeps Weeks 01–10 unchanged.
   - Keeps all other portfolio sections unchanged.
   - Updates only Week 11, Week 12 and Week 13.

   Load this file AFTER data.js and BEFORE script.js.
============================================================ */

(() => {
  if (typeof WEEKS === "undefined" || !Array.isArray(WEEKS)) {
    console.error(
      "Week update patch could not find the WEEKS array. Load data.js first."
    );
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

  /* ============================================================
     WEEK 11
  ============================================================ */

  updateWeek(11, {
    dates: "Portfolio updated 28 July 2026",

    phase:
      "TMP117 Sensor Study, Tiny-SMD Practice and Initial Manuscript Feedback · 28 July 2026",

    title:
      "Week 11 — TMP117 Study, Tiny-SMD Soldering Practice, STM32 Planning and Initial Manuscript Feedback",

    status: "Completed",

    resourceLink:
      "https://drive.google.com/drive/folders/1ZpaNb4MJoE3hCY6OQ0BS9m_d0YGB3L6K?usp=drive_link",

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
      "TMP117 Package and Pin Study",
      "Tiny-SMD Soldering Tools and Materials",
      "Hot-Air and Fine-Pad Practice",
      "STM32 Temperature Interface Plan",
      "Tutorial Videos and Process References",
      "Colombo Medical Journal — Initial Comments"
    ],

    summary:
      "This week, we concentrated on preparing the TMP117 temperature sensor for use in our wound-monitoring patch. The sensor has a very small 2 mm × 2 mm WSON package, so we first studied its pin arrangement, I²C connections and the PCB trace layout required around it. Before working with the actual TMP117, we practised using a similarly sized spare SMD component that had been received in an incorrect supplier order. We applied a small amount of special solder paste and used a hot-air station at approximately 300 °C with low airflow. Our first attempts were difficult because the component moved easily, some pads did not align correctly and excess solder caused bridging. Repeating the process helped us improve our control of the solder-paste quantity, component position, heating time and fine-wire handling. We also began planning the STM32 interface that will read the temperature, display the measured value and later compare it with a selected setpoint for indicator or temperature-control functions. During the same week, we received the first detailed comments on the Colombo Medical Journal manuscript. We reviewed the comments and prepared a checklist, especially for referring to every figure and table in the main text and checking each technical statement carefully.",

    goals:
      "Our aims were to understand the TMP117 package and electrical connections, select the correct soldering tools and materials, gain practical experience with miniature SMD components, prepare the STM32 temperature-reading plan and convert the first manuscript comments into a clear correction checklist.",

    keyFindings: [
      "The TMP117 package is only 2 mm × 2 mm, so accurate alignment, a very small amount of solder paste and low airflow are important.",
      "The TMP117 gives a signed 16-bit digital temperature value.",
      "The planned temperature conversion is T(°C) = int16(raw register) × 0.0078125.",
      "For the planned controller, the temperature error will be e[k] = Tset − Tmeasured.",
      "A later PID stage may use u[k] = Kp·e[k] + Ki·Σe[k]Δt + Kd·(e[k]−e[k−1])/Δt.",
      "Our failed soldering attempts showed the main practical problems: component movement, solder bridging, overheating risk and difficulty reaching the tiny pads.",
      "The tutorial screenshots are included as learning references and are not shown as photographs of completed project fabrication.",
      "The manuscript feedback showed that every figure and table must be mentioned and explained in the body text."
    ],

    decisions:
      "We decided to continue practising on the spare component before soldering the actual TMP117. We will use low airflow, apply only a small amount of solder paste, confirm the sensor orientation under magnification and test the STM32 temperature-reading stage before adding a heater, fan or other control output. We also prepared a section-by-section checklist for the manuscript corrections.",

    rejected:
      "We avoided soldering the actual TMP117 before gaining enough practice, using uncontrolled high airflow, applying too much solder paste or presenting tutorial screenshots as our own fabrication. The STM32 control interface is still at the planning stage and is not described as a completed controller.",

    nextWeek:
      "The next step was to collect the required electrode chemicals, confirm the laboratory safety requirements and revise the Colombo Medical Journal manuscript using the Week 11 comments.",

    evidence:
      "Evidence for this week includes the solder-paste photograph, our miniature-SMD practice and the checklist prepared from the supervisor's manuscript comments. Reference videos: <a href=\"https://www.youtube.com/watch?v=skDwEgYY1UA\" target=\"_blank\" rel=\"noopener\">Tiny-SMD soldering tutorial</a> and <a href=\"https://youtu.be/XHfyc8TiGmM?si=1FLCaaFo5WQiNBMS-\" target=\"_blank\" rel=\"noopener\">TMP117 precision temperature-sensor tutorial</a>."
  });

  /* ============================================================
     WEEK 12
  ============================================================ */

  updateWeek(12, {
    dates: "Materials obtained Friday, 31 July 2026",

    phase:
      "Chemical Collection, Laboratory Preparation and Manuscript Revision · 31 July 2026",

    title:
      "Week 12 — Chemical Collection, Laboratory Preparation and Colombo Medical Journal Draft Revision",

    status: "Completed",

    resourceLink:
      "https://drive.google.com/drive/folders/1ZpaNb4MJoE3hCY6OQ0BS9m_d0YGB3L6K?usp=drive_link",

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
      "Chemical Collection and Material Discussion",
      "Silver Chloride for Electrode Preparation",
      "Level 3 Laboratory Preparation",
      "Chemical Safety and Process Guidelines",
      "Colombo Medical Journal — Draft Revision"
    ],

    summary:
      "This week, we prepared the chemicals and laboratory procedure needed for the next electrode-fabrication stage. After discussing the required material specification, we obtained silver chloride from the Faculty of Science on Friday, 31 July 2026. We checked the reagent bottle label, photographed the material and prepared a small sample portion for the planned Ag/AgCl electrode work. We also reviewed the laboratory procedure, chemical-handling requirements, SDS information, safety precautions and the sequence that must be followed before beginning supervised work in the Level 3 laboratory. At the same time, we revised the Colombo Medical Journal manuscript using the comments received in Week 11. We corrected the first set of issues, checked the revised technical statements against the cited papers and recorded the remaining comments for the next revision cycle. This week was mainly about preparing properly for both the chemical work and the next manuscript correction.",

    goals:
      "Our aims were to collect and document the required chemicals, prepare a safe laboratory workflow, organise the SDS and process notes, correct the manuscript using the first comments and check each revised technical claim against its cited source.",

    keyFindings: [
      "The required chemicals were collected on Friday, 31 July 2026, not on Wednesday.",
      "The silver chloride was obtained from the Faculty of Science for the planned Ag/AgCl electrode work.",
      "The reagent label shows analytical-reagent material with an assay of approximately 99%.",
      "Chemical collection and process study are preparation steps and do not mean that the electrode has already been fabricated or tested.",
      "The laboratory procedure and safety requirements must be understood before beginning chemical preparation.",
      "Every figure and table in the manuscript needs a clear reference and explanation in the main text.",
      "AI tools may help improve language, but the authors must read, verify and take responsibility for the final manuscript.",
      "The manuscript required more than one revision cycle. We applied the Week 11 comments, checked the revised text against the sources and listed the remaining points for Week 13."
    ],

    decisions:
      "We recorded the correct Friday collection date, kept the chemical photographs, prepared the safety and process checklist before laboratory work and revised the manuscript manually using the supervisor's comments and supporting sources.",

    rejected:
      "We did not report Wednesday as the collection date, describe chemical collection as completed sensor fabrication, leave figures or tables without text references or accept unreviewed AI-written manuscript sections.",

    nextWeek:
      "The next step was to study the full fabrication route for the PANI working electrode and Ag/AgCl reference electrode, review screen printing and polymerization and continue correcting the manuscript using the remaining comments.",

    evidence:
      "Evidence for this week includes the photographs of the silver chloride obtained from the Faculty of Science, the prepared sample tube, the laboratory preparation notes, the corrected manuscript draft and the updated comment checklist."
  });

  /* ============================================================
     WEEK 13
  ============================================================ */

  updateWeek(13, {
    dates: "Portfolio updated 2 August 2026",

    phase:
      "Electrode Process Study, PANI Preparation and Manuscript Correction · 2 August 2026",

    title:
      "Week 13 — Electrode Fabrication Process Study, PANI Preparation and Continued Colombo Medical Journal Revision",

    status: "Completed",

    resourceLink:
      "https://drive.google.com/drive/folders/1ZpaNb4MJoE3hCY6OQ0BS9m_d0YGB3L6K?usp=drive_link",

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
      "Ag/AgCl Reference-Electrode Preparation",
      "Screen-Printed Electrode Structure",
      "Mask, Ink Application and Drying",
      "PANI Polymerization and Post-Processing",
      "Colombo Medical Journal — Continued Revision",
      "Current Manuscript — 17 Pages and 38 References"
    ],

    summary:
      "This week, we studied the fabrication route for the PANI working electrode and the Ag/AgCl reference electrode. We reviewed the screen-printed electrode structure and followed the main process sequence: preparing the mask, applying the conductive ink, spreading it evenly, drying the printed tracks, inspecting the pattern and then adding the functional sensing layer. We also studied electrochemical polymerization for forming the PANI layer and reviewed the filtration and post-processing steps after synthesis. The process images included in this week are learning references from the videos we used while preparing our own laboratory procedure. They are not presented as proof that every fabrication step had already been completed by us. During the same week, we continued revising the Colombo Medical Journal manuscript. We checked it section by section, connected every figure and table to the relevant discussion, corrected unclear statements using the cited papers and improved the consistency between the methods, results, discussion and conclusion. The current working draft is 17 pages long and contains 38 references.",

    goals:
      "Our aims were to prepare a clear and safe fabrication sequence for the PANI and Ag/AgCl electrodes, understand the screen-printing and polymerization requirements, identify the equipment and materials needed for the laboratory trial and complete another careful manuscript revision using the latest comments.",

    keyFindings: [
      "The PANI working electrode, Ag/AgCl reference electrode and counter electrode have different roles and must be clearly identified.",
      "The screen-printing sequence studied was: prepare the mask, apply the conductive ink, spread it evenly, dry or cure the printed pattern, inspect the tracks and then add the functional coating.",
      "The PANI polymerization conditions and post-processing steps must be written in a batch record before the process is described as completed.",
      "Copper tracks and other routing conductors must be insulated from the test liquid so that only the intended sensing surfaces are exposed.",
      "The tutorial screenshots explain the process we studied, but they do not replace our own laboratory photographs, batch records or measurements.",
      "Each manuscript figure and table must be explained in the discussion, including what it shows and why it is important.",
      "The Week 13 revision improved the connection between the manuscript methods, figures, tables, results, discussion and conclusion.",
      "The current manuscript working draft contains 17 pages and 38 references."
    ],

    decisions:
      "We decided to use the reference videos to prepare a procedure for supervisor approval, begin with a small one-electrode trial, record every batch and curing condition, label tutorial screenshots clearly and continue correcting the manuscript using our own checked wording.",

    rejected:
      "We did not present the tutorial screenshots as our own fabrication, report electrode-performance values that we had not measured, skip laboratory approval or treat the manuscript revision as an automatic AI rewrite.",

    nextWeek:
      "The next work will be to obtain supervisor and laboratory approval, carry out a small controlled electrode-fabrication trial, record our own photographs and batch data, begin electrical and electrochemical checks, finish the figure and table cross-reference review and prepare the manuscript for the next supervisor review.",

    evidence:
      "Evidence for this week includes the current manuscript PDF, screenshots of its title and reference pages, our correction checklist and the process screenshots studied before the laboratory work. Reference videos: <a href=\"https://youtu.be/30tOKSBVVrI?si=cmxuc3JNDcqWQLVg\" target=\"_blank\" rel=\"noopener\">Screen-printing process tutorial</a> and <a href=\"https://www.youtube.com/watch?v=Pc3AqwOQAHY\" target=\"_blank\" rel=\"noopener\">PANI preparation and electrochemical-polymerization reference</a>. The manuscript remains a working draft and is not presented as an accepted or published article."
  });
})();
