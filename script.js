/* ============================================================
   script.js — Smart Wound pH Sensor FYP Portfolio
   Renders all content from data.js + interactivity.
   ============================================================ */

const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

/* ---------- HERO ---------- */
function renderHero() {
  const t = $("#hero-text");
  t.innerHTML = `
    <div class="hero-eyebrow"><span class="line"></span><span>Final Year Project · EEE</span></div>
    <h1 class="hero-title">${PROJECT.title.replace("Wound", '<span class="accent">Wound</span>')}</h1>
    <p class="hero-sub">${PROJECT.subtitle}. ${PROJECT.tagline}</p>
    <div class="hero-meta">
      <span class="hero-meta-item"><span class="dot"></span>${PROJECT.student}</span>
      <span class="hero-meta-item"><span class="dot"></span>${PROJECT.degree}</span>
      <span class="hero-meta-item"><span class="dot"></span>${PROJECT.year}</span>
    </div>
    <div class="hero-buttons">
      <a href="#progress" class="btn btn-primary">View Weekly Progress →</a>
      <a href="#overview" class="btn btn-outline">Read Overview</a>
    </div>`;

  $("#hero-panel").innerHTML = `
    <div class="stats-card">
      <div class="stats-card-title">Project at a Glance</div>
      <div class="stats-grid">
        <div><div class="stat-value" data-count="59" data-suffix=" mV">0</div><div class="stat-label">per pH unit</div></div>
        <div><div class="stat-value" data-count="16" data-suffix="-bit">0</div><div class="stat-label">ADC resolution</div></div>
        <div><div class="stat-value" data-count="20" data-suffix=" mm">0</div><div class="stat-label">coin module</div></div>
        <div><div class="stat-value"><span class="unit">≤</span> <span data-count="20" data-suffix="k">0</span></div><div class="stat-label">LKR budget</div></div>
      </div>
      <div class="tech-stack">
        <div class="tech-stack-label">Core Technology Stack</div>
        <div class="tech-chips">
          <span class="tech-chip">PANI</span><span class="tech-chip">Ag/AgCl</span><span class="tech-chip">ESP32-S3</span>
          <span class="tech-chip">ADS1115</span><span class="tech-chip">INA333</span><span class="tech-chip">TMP117</span><span class="tech-chip">BLE 5.0</span>
        </div>
      </div>
    </div>`;
}

/* ---------- COUNTERS ---------- */
function animateCounters() {
  $$("[data-count]").forEach(node => {
    const target = parseFloat(node.dataset.count);
    const suffix = node.dataset.suffix || "";
    let cur = 0; const steps = 38; const inc = target / steps;
    const tick = () => {
      cur += inc;
      if (cur >= target) { node.textContent = target + suffix; }
      else { node.textContent = Math.floor(cur) + suffix; requestAnimationFrame(tick); }
    };
    tick();
  });
}

/* ---------- OVERVIEW ---------- */
function renderAbstract() { $("#abstract-content").innerHTML = `<p>${ABSTRACT.trim()}</p>`; }

/* ---------- PROBLEM + pH TABLE ---------- */
function renderProblem() {
  const wrap = $("#problem-cards");
  PROBLEM.points.forEach((p, i) => {
    const c = el("div", "problem-card reveal" + (i ? " reveal-d" + Math.min(i,4) : ""));
    c.innerHTML = `<span class="problem-icon">${p.icon}</span><div class="problem-title">${p.title}</div><p class="problem-text">${p.text}</p>`;
    wrap.appendChild(c);
  });
  const tb = $("#ph-table-body");
  const color = { ok:"var(--ok)", warn:"var(--warn)", danger:"var(--danger)" };
  WOUND_PH_TABLE.forEach(r => {
    const tr = el("tr");
    tr.innerHTML = `<td><strong>${r.state}</strong></td>
      <td class="td-mono" style="color:${color[r.flag]};font-weight:600">${r.range}</td>
      <td>${r.interpretation}</td>`;
    tb.appendChild(tr);
  });
}

/* ---------- RESEARCH GAP ---------- */
function renderResearchGap() {
  const wrap = $("#paper-cards");
  RESEARCH_GAP.papers.forEach((p,i) => {
    const c = el("div", "paper-card reveal" + (i ? " reveal-d" + Math.min(i,4) : ""));
    c.innerHTML = `<div class="paper-citation">${p.citation}</div>
      <p class="paper-finding"><strong>Finding:</strong> ${p.finding}</p>
      <div class="paper-limit"><strong>Limitation:</strong> ${p.limitation}</div>
      <p class="paper-relevance"><strong>Relevance:</strong> ${p.relevance}</p>`;
    wrap.appendChild(c);
  });
  $("#gap-box").innerHTML = `<span class="gap-label">◆ The Identified Gap</span><p class="gap-text">${RESEARCH_GAP.gap}</p>`;
}

/* ---------- SOLUTION ---------- */
function renderSolution() {
  const ul = $("#sol-list");
  SOLUTION.features.forEach(f => {
    const li = el("li");
    li.innerHTML = `<span class="ic">${f.icon}</span><span class="tx">${f.text}</span>`;
    ul.appendChild(li);
  });
}

/* ---------- OBJECTIVES ---------- */
function renderObjectives() {
  const ul = $("#objectives-list");
  OBJECTIVES.forEach(o => { const li = el("li"); li.innerHTML = `<span class="ot">${o}</span>`; ul.appendChild(li); });
}

/* ---------- TIMELINE (no week images, Drive resources only) ---------- */
function renderTimeline() {
  const phases = ["All", ...new Set(WEEKS.map(w => w.phase))];
  const pf = $("#phase-filters");
  phases.forEach((ph,i) => {
    const b = el("button", "phase-btn" + (i===0 ? " active" : ""), ph);
    b.onclick = () => {
      $$(".phase-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      $$(".tl-item").forEach(item => {
        item.classList.toggle("hidden", !(ph === "All" || item.dataset.phase === ph));
      });
    };
    pf.appendChild(b);
  });

  const tl = $("#timeline");
  WEEKS.forEach(w => {
    const item = el("div", "tl-item" + (w.status === "Coming soon" ? " coming-soon" : ""));
    item.dataset.phase = w.phase;
    const findings = w.keyFindings.map(f => `<li>${f}</li>`).join("");
    const folders = w.folders.map(f => `<span class="folder-chip">${f}</span>`).join("");
    const driveButton = w.resourceLink && w.resourceLink !== "#"
      ? `<a class="week-drive-btn" href="${w.resourceLink}" target="_blank" rel="noopener">Open ${w.label} Drive Resources →</a>`
      : `<span class="week-drive-btn disabled">Resources coming soon</span>`;
    item.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-card">
        <div class="tl-head">
          <span class="tl-badge">${w.label}</span>
          <span class="tl-phase">${w.phase}</span>
          <span class="tl-date">${w.status}</span>
        </div>
        <div class="tl-body">
          <div class="tl-text-only">
            <h3 class="tl-title">${w.title}</h3>
            <p class="tl-summary">${w.summary}</p>
            <div class="tl-folders">${folders}</div>
            <div class="week-actions">${driveButton}<button class="tl-expand">+ Read full week breakdown</button></div>
          </div>
          <div class="tl-details">
            <div class="detail-grid">
              <div class="detail-block"><div class="detail-label">🎯 Goals</div><div class="detail-text">${w.goals}</div></div>
              <div class="detail-block"><div class="detail-label">✅ Decisions Made</div><div class="detail-text">${w.decisions}</div></div>
            </div>
            <div class="detail-block" style="margin-bottom:1rem"><div class="detail-label">🔍 Key Findings</div><ul class="findings-list">${findings}</ul></div>
            <div class="detail-grid">
              <div class="detail-block"><div class="detail-label">⛔ Rejected / Set Aside</div><div class="detail-text warn">${w.rejected}</div></div>
              <div class="detail-block"><div class="detail-label">➡️ Led Into Next Week</div><div class="detail-text next">${w.nextWeek}</div></div>
            </div>
            <div class="detail-block" style="margin-top:1rem"><div class="detail-label">📎 Evidence / Resource Link</div><div class="detail-text" style="font-family:var(--font-mono);font-size:.8rem">${w.evidence}</div></div>
          </div>
        </div>
      </div>`;

    const btn = item.querySelector(".tl-expand");
    const det = item.querySelector(".tl-details");
    btn.onclick = () => {
      const open = det.classList.toggle("open");
      btn.textContent = open ? "− Hide breakdown" : "+ Read full week breakdown";
    };
    tl.appendChild(item);
  });
}

/* ---------- ARCHITECTURE ---------- */
function renderArchitecture() {
  const wrap = $("#arch-diagram");
  ARCHITECTURE.layers.forEach((L,i) => {
    const row = el("div", "arch-layer reveal");
    row.style.borderLeftColor = L.color;
    row.innerHTML = `
      <div class="arch-name"><span class="arch-dot" style="background:${L.color}"></span>${L.label}</div>
      <div class="arch-comps">${L.components.map(c => `<span class="arch-comp">${c}</span>`).join("")}</div>
      <div class="arch-out">→ ${L.output}</div>`;
    wrap.appendChild(row);
    if (i < ARCHITECTURE.layers.length - 1) wrap.appendChild(el("div", "arch-arrow", "▼"));
  });
}

/* ---------- SENSOR TECH ---------- */
function renderSensorTech() {
  const data = [
    { icon:"🧪", name:"PANI pH Electrode", spec:"54–69 mV/pH", desc:"Polyaniline (Emeraldine Salt) working electrode. Reversible acid-base doping gives a near-Nernstian potentiometric response to wound pH." },
    { icon:"⚡", name:"Ag/AgCl Reference", spec:"Stable RE", desc:"Screen-printed solid-state reference electrode providing a stable potential against which the PANI electrode is measured." },
    { icon:"🌡️", name:"TMP117", spec:"Digital I²C temperature sensor", desc:"High-accuracy digital temperature sensor for wound surface temperature monitoring and pH temperature compensation." },
    { icon:"💧", name:"Impedance Moisture", spec:"AC excitation", desc:"Exudate moisture level inferred from AC impedance across the shared electrode pair, driven by the MCP4725 DAC." }
  ];
  const wrap = $("#sensor-grid");
  data.forEach((s,i) => {
    const c = el("div", "sensor-card reveal" + (i ? " reveal-d" + Math.min(i,4) : ""));
    c.innerHTML = `<span class="sensor-icon">${s.icon}</span><div class="sensor-name">${s.name}</div>
      <span class="sensor-spec">${s.spec}</span><p class="sensor-desc">${s.desc}</p>`;
    wrap.appendChild(c);
  });
}

/* ---------- RESOURCES (filterable) ---------- */
function renderResources() {
  const types = ["all", ...new Set(RESOURCES.map(r => r.type))];
  const labels = { all:"All", paper:"Papers", excel:"Excel Analyses", document:"Documents", datasheet:"Datasheets", video:"Videos" };
  const f = $("#res-filters");
  f.appendChild(el("span", "filter-label", "Filter:"));
  types.forEach((t,i) => {
    const b = el("button", "filter-btn" + (i===0 ? " active" : ""), labels[t] || t);
    b.onclick = () => {
      $$("#res-filters .filter-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      $$("#res-grid .res-card").forEach(card => card.classList.toggle("hidden", !(t === "all" || card.dataset.type === t)));
    };
    f.appendChild(b);
  });

  const grid = $("#res-grid");
  RESOURCES.forEach(r => {
    const c = el("div", "res-card");
    c.dataset.type = r.type;
    const sub = r.type === "paper" ? `${r.journal} · ${r.year}` : (r.type === "excel" ? "Excel workbook" : r.type);
    const body = r.relevance || r.description || "";
    const tags = (r.tags || []).map(t => `<span class="tag tag-teal">${t}</span>`).join("");
    c.innerHTML = `<span class="res-badge b-${r.type}">${r.type}</span>
      <div class="res-title">${r.title}</div>
      <div class="res-sub">${sub}${r.week ? " · Week 0"+r.week : ""}</div>
      <p class="res-desc">${body}</p>
      <div class="res-tags">${tags}</div>
      ${r.link && r.link !== "#" ? `<a class="res-link" href="${r.link}">Open file →</a>` : ""}`;
    grid.appendChild(c);
  });
}

/* ---------- FILE CATEGORIES ---------- */
function renderFileCategories() {
  const wrap = $("#cat-grid");
  FILE_CATEGORIES.forEach(c => {
    const card = el("div", "cat-card");
    card.innerHTML = `<div class="cat-head"><span class="ic">${c.icon}</span><h4>${c.category}</h4></div>
      <div class="cat-count">${c.count}</div>
      <p class="cat-support">${c.support}</p>
      <div class="cat-files">${c.files}</div>`;
    wrap.appendChild(card);
  });
}

/* ---------- FILE ANALYSIS TABLE ---------- */
function renderFileTable() {
  const tb = $("#file-table-body");
  FILE_ANALYSIS.forEach(f => {
    const tr = el("tr");
    tr.innerHTML = `<td class="td-mono" style="color:var(--primary)">${f.name}</td>
      <td class="td-mono">${f.week}</td><td>${f.type}</td>
      <td>${f.content}</td><td>${f.importance}</td>
      <td><span class="tag tag-blue">${f.section}</span></td>`;
    tb.appendChild(tr);
  });
}

/* ---------- DATASHEETS ---------- */
function renderDatasheets() {
  const grid = $("#datasheets-grid");
  DATASHEETS.forEach(d => {
    const c = el("div", "res-card");
    c.innerHTML = `<span class="res-badge b-datasheet">${d.category}</span>
      <div class="res-title">${d.component}</div>
      <p class="res-desc">${d.role}</p>
      <a class="res-link" href="${d.link}">View datasheet →</a>`;
    grid.appendChild(c);
  });
}

/* ---------- DOCUMENTS ---------- */
function renderDocuments() {
  const grid = $("#documents-grid");
  DOCUMENTS_LIB.forEach(d => {
    const c = el("div", "res-card");
    c.innerHTML = `<span class="res-badge b-document">${d.type}</span>
      <div class="res-title">${d.title}</div>
      <p class="res-desc">${d.note}</p>
      <a class="res-link" href="${d.link}">Open document →</a>`;
    grid.appendChild(c);
  });
}

/* ---------- VIDEOS + PUBLICATIONS ---------- */
function renderReferences() {
  const vg = $("#videos-grid");
  VIDEOS.forEach(v => {
    const c = el("div", "res-card");
    c.innerHTML = `<span class="res-badge b-video">${v.type}</span>
      <div class="res-title">${v.title}</div>
      <div class="res-sub">${v.source}</div>
      <p class="res-desc">${v.note}</p>
      <a class="res-link" href="${v.link}" target="_blank" rel="noopener">Open link →</a>`;
    vg.appendChild(c);
  });
  const pg = $("#publications-grid");
  KEY_PUBLICATIONS.forEach(p => {
    const c = el("div", "res-card");
    c.innerHTML = `<span class="res-badge b-paper">${p.repo}</span>
      <div class="res-title">${p.title}</div>
      <p class="res-desc">${p.note}</p>
      <a class="res-link" href="${p.link}" target="_blank" rel="noopener">Read publication →</a>`;
    pg.appendChild(c);
  });
}

/* ---------- SIMILAR PRODUCTS ---------- */
function renderSimilarProducts() {
  const wrap = $("#similar-products");
  SIMILAR_PRODUCTS.forEach((p,i) => {
    const c = el("div", "card reveal" + (i ? " reveal-d" + Math.min(i,4) : ""));
    c.innerHTML = `<span class="res-badge b-video" style="margin-bottom:.6rem">${p.cost}</span>
      <h4 style="margin-bottom:.3rem">${p.name}</h4>
      <div class="res-sub" style="margin-bottom:.7rem">${p.origin}</div>
      <p style="font-size:.86rem;color:var(--ink-soft);margin-bottom:.7rem"><strong>Tech:</strong> ${p.tech}</p>
      <p style="font-size:.86rem;color:var(--accent-deep)">${p.relevance}</p>`;
    wrap.appendChild(c);
  });
}

/* ---------- TESTING ---------- */
function renderTesting() {
  const wrap = $("#testing-grid");
  TESTING.forEach(t => {
    const c = el("div", "test-card");
    c.innerHTML = `<div class="test-phase">${t.phase}</div>
      <div class="test-title">${t.title}</div>
      <p class="test-desc">${t.description}</p>
      <span class="test-status">${t.status}</span>`;
    wrap.appendChild(c);
  });
}

/* ---------- BUDGET ---------- */
function renderBudget() {
  $("#budget-header").innerHTML = `
    <div class="budget-total"><div class="l">Target Budget</div><div class="v">${BUDGET.target}</div></div>
    <div style="flex:1;min-width:240px"><p style="font-size:.95rem;color:var(--ink-soft)">Full prototype cost estimated in <strong>${BUDGET.currency}</strong>. Estimated total: <strong style="color:var(--primary)">${BUDGET.total}</strong>.</p></div>`;
  const rows = $("#budget-rows");
  BUDGET.categories.forEach(c => {
    const r = el("div", "budget-row");
    r.innerHTML = `<div class="budget-name">${c.name}</div><div class="budget-cost">${c.local}</div><div class="budget-notes">${c.notes}</div>`;
    rows.appendChild(r);
  });
}

/* ---------- FUTURE ---------- */
function renderFuture() {
  const wrap = $("#future-list");
  FUTURE_WORK.forEach((f,i) => {
    const c = el("div", "future-item reveal");
    c.innerHTML = `<span class="future-num">${i+1}</span><span class="future-text">${f}</span>`;
    wrap.appendChild(c);
  });
}

/* ---------- PROFILE ---------- */
function renderProfile() {
  const qualities = ["Electrochemical sensing","Analog instrumentation","Embedded firmware (ESP32)","PCB & FPCB design","Wireless (BLE) systems","Low-power design","Literature review","Systematic documentation"];
  const q = $("#profile-qualities");
  qualities.forEach(t => { const d = el("div", "quality-item"); d.innerHTML = `<span class="quality-dot"></span>${t}`; q.appendChild(d); });
  $("#profile-summary").innerHTML = `
    <p>Over five documented weeks, this project has moved methodically from <span class="em">clinical problem definition</span> through <span class="em">literature benchmarking</span>, component selection, electronics architecture, and flexible-PCB fabrication costing.</p>
    <p>Every decision is backed by a comparison matrix or reference, demonstrating the rigour and traceability expected of graduate-level biomedical engineering research.</p>
    <p style="margin-bottom:0;font-family:var(--font-mono);font-size:.82rem;color:var(--ink-faint)">${PROJECT.student} · ${PROJECT.university}</p>`;
}

/* ---------- CONTACT ---------- */
function renderContact() {
  $("#contact-inner").innerHTML = `
    <span class="section-label" style="justify-content:center">Get in Touch</span>
    <h2 class="section-title" style="margin-bottom:1rem">Contact &amp; <span class="hl">Project Links</span></h2>
    <p style="max-width:520px;margin:0 auto 1rem">Questions about the design, fabrication, weekly resources, papers, or datasheets? Reach out using the university email or open the shared Drive folder.</p>
    <div class="contact-links">
      <a href="mailto:${PROJECT.contactEmail}" class="btn btn-accent">✉ ${PROJECT.contactEmail}</a>
      <a href="${PROJECT.githubRepo}" target="_blank" rel="noopener" class="btn btn-outline">📄 Papers & Datasheets Drive</a>
    </div>
    <p style="margin-top:1.6rem;font-family:var(--font-mono);font-size:.76rem;color:rgba(232,249,255,0.86)">${PROJECT.supervisor}</p>`;
}

/* ---------- LIGHTBOX ---------- */
function initLightbox() {
  const lb = $("#lightbox"), img = $("#lightbox-img");
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t.dataset && t.dataset.lb) { img.src = t.dataset.lb; lb.classList.add("open"); }
    else if (t.id === "lightbox" || t.classList.contains("lb-close")) { lb.classList.remove("open"); }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("open"); });
}

/* ---------- SCROLL: progress bar, navbar, back-to-top, active link ---------- */
function initScroll() {
  const bar = $("#progress-bar"), nav = $("#navbar"), top = $("#back-to-top");
  const sections = $$("section[id]");
  const links = $$(".nav-links a");
  const onScroll = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
    bar.style.width = (scrolled * 100) + "%";
    nav.classList.toggle("scrolled", h.scrollTop > 20);
    top.classList.toggle("visible", h.scrollTop > 600);
    let current = "";
    sections.forEach(s => { if (h.scrollTop >= s.offsetTop - 120) current = s.id; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  };
  window.addEventListener("scroll", onScroll, { passive:true });
  top.onclick = () => window.scrollTo({ top:0, behavior:"smooth" });
  onScroll();
}

/* ---------- HAMBURGER ---------- */
function initNav() {
  const h = $("#hamburger"), links = $(".nav-links");
  h.onclick = () => links.classList.toggle("open");
  $$(".nav-links a").forEach(a => a.onclick = () => links.classList.remove("open"));
}

/* ---------- REVEAL ON SCROLL + counters trigger ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        if (en.target.id === "hero-panel") animateCounters();
        io.unobserve(en.target);
      }
    });
  }, { threshold:0.12 });
  $$(".reveal, .tl-item, .objectives-list li").forEach(n => io.observe(n));
  const panel = $("#hero-panel"); if (panel) io.observe(panel);
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbstract();
  renderProblem();
  renderResearchGap();
  renderSolution();
  renderObjectives();
  renderTimeline();
  renderArchitecture();
  renderSensorTech();
  renderResources();
  renderFileCategories();
  renderFileTable();
  renderDatasheets();
  renderDocuments();
  renderReferences();
  renderSimilarProducts();
  renderTesting();
  renderBudget();
  renderFuture();
  renderProfile();
  renderContact();

  initLightbox();
  initScroll();
  initNav();
  initReveal();

  // hero counters fire shortly after load (panel already in view)
  setTimeout(animateCounters, 1100);
});
