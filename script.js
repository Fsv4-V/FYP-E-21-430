/* ============================================================
  script.js — Smart Wound pH Sensor FYP Portfolio
  Full replacement version with weekly image galleries + research figure cards.
  It renders all content from data.js.
============================================================ */

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};

const safe = (value) => value == null ? "" : String(value);

/* ---------- HERO ---------- */
function renderHero() {
  const t = $("#hero-text");
  if (!t) return;

  t.innerHTML = `
    <span class="eyebrow">Final Year Project · EEE</span>
    <h1>${PROJECT.title}</h1>
    <p class="lead">${PROJECT.subtitle}. ${PROJECT.tagline}</p>
    <p class="muted">${PROJECT.student} · ${PROJECT.degree} · ${PROJECT.year}</p>
    <div class="hero-actions">
      <a class="btn" href="#timeline-section">View Weekly Progress →</a>
      <a class="btn ghost" href="#overview">Read Overview</a>
    </div>
  `;

  const panel = $("#hero-panel");
  if (panel) {
    panel.innerHTML = `
      <h3>Project at a Glance</h3>
      <div class="stat-grid">
        <div><strong data-count="59" data-suffix=" mV">0</strong><span>per pH unit</span></div>
        <div><strong data-count="16" data-suffix="-bit">0</strong><span>ADC resolution</span></div>
        <div><strong data-count="20" data-suffix=" mm">0</strong><span>coin module</span></div>
        <div><strong data-count="20000">0</strong><span>LKR budget</span></div>
      </div>
      <h4>Core Technology Stack</h4>
      <div class="chip-row">
        <span>PANI</span><span>Ag/AgCl</span><span>ESP32-S3</span><span>ADS1115</span><span>INA333</span><span>TMP117</span><span>BLE 5.0</span>
      </div>
    `;
  }
}

/* ---------- COUNTERS ---------- */
function animateCounters() {
  $$('[data-count]').forEach(node => {
    const target = parseFloat(node.dataset.count);
    const suffix = node.dataset.suffix || "";
    let cur = 0;
    const steps = 38;
    const inc = target / steps;

    const tick = () => {
      cur += inc;
      if (cur >= target) {
        node.textContent = target + suffix;
      } else {
        node.textContent = Math.floor(cur) + suffix;
        requestAnimationFrame(tick);
      }
    };
    tick();
  });
}

/* ---------- OVERVIEW ---------- */
function renderAbstract() {
  const box = $("#abstract-content");
  if (box) box.innerHTML = `<p>${ABSTRACT.trim()}</p>`;
}

/* ---------- PROBLEM + pH TABLE ---------- */
function renderProblem() {
  const wrap = $("#problem-cards");
  if (wrap) {
    PROBLEM.points.forEach((p, i) => {
      const c = el("div", "problem-card reveal" + (i ? " reveal-d" + Math.min(i, 4) : ""));
      c.innerHTML = `<div class="card-icon">${p.icon}</div><h3>${p.title}</h3><p>${p.text}</p>`;
      wrap.appendChild(c);
    });
  }

  const tb = $("#ph-table-body");
  if (tb) {
    WOUND_PH_TABLE.forEach(r => {
      const tr = el("tr");
      tr.innerHTML = `<td>${r.state}</td><td>${r.range}</td><td>${r.interpretation}</td>`;
      tb.appendChild(tr);
    });
  }
}

/* ---------- RESEARCH GAP ---------- */
function renderResearchGap() {
  const wrap = $("#paper-cards");
  if (wrap) {
    RESEARCH_GAP.papers.forEach((p, i) => {
      const c = el("div", "paper-card reveal" + (i ? " reveal-d" + Math.min(i, 4) : ""));
      c.innerHTML = `
        <h3>${p.citation}</h3>
        <p><strong>Finding:</strong> ${p.finding}</p>
        <p><strong>Limitation:</strong> ${p.limitation}</p>
        <p><strong>Relevance:</strong> ${p.relevance}</p>
      `;
      wrap.appendChild(c);
    });
  }

  const gap = $("#gap-box");
  if (gap) {
    gap.innerHTML = `<h3>◆ The Identified Gap</h3><p>${RESEARCH_GAP.gap}</p>`;
  }
}

/* ---------- SOLUTION ---------- */
function renderSolution() {
  const ul = $("#sol-list");
  if (!ul) return;
  SOLUTION.features.forEach(f => {
    const li = el("li");
    li.innerHTML = `<span>${f.icon}</span>${f.text}`;
    ul.appendChild(li);
  });
}

/* ---------- OBJECTIVES ---------- */
function renderObjectives() {
  const ul = $("#objectives-list");
  if (!ul) return;
  OBJECTIVES.forEach(o => {
    const li = el("li");
    li.textContent = o;
    ul.appendChild(li);
  });
}

/* ---------- TIMELINE WITH WEEKLY IMAGES ---------- */
function renderTimeline() {
  const pf = $("#phase-filters");
  const tl = $("#timeline");
  if (!pf || !tl) return;

  const phases = ["All", ...new Set(WEEKS.map(w => w.phase))];

  phases.forEach((ph, i) => {
    const b = el("button", "phase-btn" + (i === 0 ? " active" : ""), ph);
    b.onclick = () => {
      $$(".phase-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      $$(".tl-item").forEach(item => {
        item.classList.toggle("hidden", !(ph === "All" || item.dataset.phase === ph));
      });
    };
    pf.appendChild(b);
  });

  WEEKS.forEach(w => {
    const item = el("div", "tl-item" + (w.status === "Coming soon" ? " coming-soon" : ""));
    item.dataset.phase = w.phase;

    const findings = (w.keyFindings || []).map(f => `<li>${f}</li>`).join("");
    const folders = (w.folders || []).map(f => `<span class="folder-chip">${f}</span>`).join("");

    const weekImages = Array.isArray(w.images) && w.images.length
      ? `
        <section class="week-media-panel" aria-label="${w.label} visual evidence">
          <div class="week-media-top">
            <div>
              <span class="media-eyebrow">Visual evidence</span>
              <h4>${w.label} images and research figures</h4>
            </div>
            <span class="media-count">${w.images.length} image${w.images.length > 1 ? "s" : ""}</span>
          </div>

          <div class="week-image-gallery compact-gallery">
            ${w.images.map((img, index) => `
              <figure class="week-image-card">
                <button class="image-frame" type="button" aria-label="Open ${img.caption}">
                  <img src="${img.src}" alt="${img.caption}" loading="lazy" data-lb="${img.src}">
                </button>
                <figcaption>
                  <span class="image-number">${String(index + 1).padStart(2, "0")}</span>
                  ${img.caption}
                </figcaption>
              </figure>
            `).join("")}
          </div>
        </section>
      `
      : "";

    const driveButton = w.resourceLink && w.resourceLink !== "#"
      ? `<a class="btn small" href="${w.resourceLink}" target="_blank" rel="noopener">Open ${w.label} Drive Resources →</a>`
      : `<span class="btn small muted-btn">Resources coming soon</span>`;

    item.innerHTML = `
      <div class="tl-head">
        <span class="week-label">${w.label}</span>
        <span class="phase-pill">${w.phase}</span>
        <span class="status-pill">${w.status}</span>
      </div>

      <h3>${w.title}</h3>
      <p>${w.summary}</p>

      ${weekImages}

      <div class="folder-list">${folders}</div>

      <div class="tl-actions">
        ${driveButton}
        <button class="tl-expand">+ Read full week breakdown</button>
      </div>

      <div class="tl-details">
        <h4>Goals</h4>
        <p>${w.goals}</p>

        <h4>✅ Decisions Made</h4>
        <p>${w.decisions}</p>

        <h4>Key Findings</h4>
        <ul>${findings}</ul>

        <h4>⛔ Rejected / Set Aside</h4>
        <p>${w.rejected}</p>

        <h4>➡️ Led Into Next Week</h4>
        <p>${w.nextWeek}</p>

        <h4>Evidence / Resource Link</h4>
        <p>${w.evidence}</p>
      </div>
    `;

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
  if (!wrap) return;

  ARCHITECTURE.layers.forEach((L, i) => {
    const row = el("div", "arch-layer reveal");
    row.style.borderLeftColor = L.color;
    row.innerHTML = `
      <h3>${L.label}</h3>
      <div class="chip-row">${L.components.map(c => `<span>${c}</span>`).join("")}</div>
      <p><strong>Output:</strong> ${L.output}</p>
    `;
    wrap.appendChild(row);
    if (i < ARCHITECTURE.layers.length - 1) wrap.appendChild(el("div", "arch-arrow", "▼"));
  });
}

/* ---------- SENSOR TECH ---------- */
function renderSensorTech() {
  const data = [
    { icon: "🧪", name: "PANI pH Electrode", spec: "54–69 mV/pH", desc: "Polyaniline (Emeraldine Salt) working electrode. Reversible acid-base doping gives a near-Nernstian potentiometric response to wound pH." },
    { icon: "⚡", name: "Ag/AgCl Reference", spec: "Stable RE", desc: "Screen-printed solid-state reference electrode providing a stable potential against which the PANI electrode is measured." },
    { icon: "🌡️", name: "TMP117", spec: "Digital I²C temperature sensor", desc: "High-accuracy digital temperature sensor for wound surface temperature monitoring and pH temperature compensation." },
    { icon: "💧", name: "Impedance Moisture", spec: "AC excitation", desc: "Exudate moisture level inferred from AC impedance across the shared electrode pair, driven by the MCP4725 DAC." }
  ];

  const wrap = $("#sensor-grid");
  if (!wrap) return;

  data.forEach((s, i) => {
    const c = el("div", "sensor-card reveal" + (i ? " reveal-d" + Math.min(i, 4) : ""));
    c.innerHTML = `<div class="card-icon">${s.icon}</div><h3>${s.name}</h3><p class="spec">${s.spec}</p><p>${s.desc}</p>`;
    wrap.appendChild(c);
  });
}

/* ---------- RESOURCES ---------- */
function renderResources() {
  const f = $("#res-filters");
  const grid = $("#res-grid");
  if (!f || !grid) return;

  const types = ["all", ...new Set(RESOURCES.map(r => r.type))];
  const labels = { all: "All", paper: "Papers", excel: "Excel Analyses", document: "Documents", datasheet: "Datasheets", video: "Videos" };

  f.appendChild(el("span", "filter-label", "Filter:"));
  types.forEach((t, i) => {
    const b = el("button", "filter-btn" + (i === 0 ? " active" : ""), labels[t] || t);
    b.onclick = () => {
      $$("#res-filters .filter-btn").forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      $$("#res-grid .res-card").forEach(card => card.classList.toggle("hidden", !(t === "all" || card.dataset.type === t)));
    };
    f.appendChild(b);
  });

  RESOURCES.forEach(r => {
    const c = el("div", "res-card");
    c.dataset.type = r.type;
    const sub = r.type === "paper" ? `${r.journal || "Paper"} · ${r.year || ""}` : (r.type === "excel" ? "Excel workbook" : r.type);
    const body = r.relevance || r.description || "";
    const tags = (r.tags || []).map(t => `<span>${t}</span>`).join("");
    const weekText = r.week ? ` · Week ${String(r.week).padStart(2, "0")}` : "";

    c.innerHTML = `
      <span class="pill">${r.type}</span>
      <h3>${r.title}</h3>
      <p class="muted">${sub}${weekText}</p>
      <p>${body}</p>
      <div class="tag-row">${tags}</div>
      ${r.link && r.link !== "#" ? `<a href="${r.link}" target="_blank" rel="noopener">Open file →</a>` : ""}
    `;
    grid.appendChild(c);
  });
}

/* ---------- FILE CATEGORIES ---------- */
function renderFileCategories() {
  const wrap = $("#cat-grid");
  if (!wrap) return;
  FILE_CATEGORIES.forEach(c => {
    const card = el("div", "cat-card");
    card.innerHTML = `<div class="card-icon">${c.icon}</div><h4>${c.category}</h4><p class="muted">${c.count}</p><p>${c.support}</p><p class="small-text">${c.files}</p>`;
    wrap.appendChild(card);
  });
}

/* ---------- FILE ANALYSIS TABLE ---------- */
function renderFileTable() {
  const tb = $("#file-table-body");
  if (!tb) return;
  FILE_ANALYSIS.forEach(f => {
    const tr = el("tr");
    tr.innerHTML = `<td>${f.name}</td><td>${f.week}</td><td>${f.type}</td><td>${f.content}</td><td>${f.importance}</td><td>${f.section}</td>`;
    tb.appendChild(tr);
  });
}

/* ---------- DATASHEETS ---------- */
function renderDatasheets() {
  const grid = $("#datasheets-grid");
  if (!grid) return;
  DATASHEETS.forEach(d => {
    const c = el("div", "res-card");
    c.innerHTML = `<span class="pill">${d.category}</span><h3>${d.component}</h3><p>${d.role}</p><a href="${d.link}" target="_blank" rel="noopener">View datasheet →</a>`;
    grid.appendChild(c);
  });
}

/* ---------- DOCUMENTS ---------- */
function renderDocuments() {
  const grid = $("#documents-grid");
  if (!grid) return;
  DOCUMENTS_LIB.forEach(d => {
    const c = el("div", "res-card");
    c.innerHTML = `<span class="pill">${d.type}</span><h3>${d.title}</h3><p>${d.note}</p><a href="${d.link}" target="_blank" rel="noopener">Open document →</a>`;
    grid.appendChild(c);
  });
}

/* ---------- VIDEOS + PUBLICATIONS + RESEARCH IMAGES ---------- */
function renderReferences() {
  const vg = $("#videos-grid");
  if (vg) {
    VIDEOS.forEach(v => {
      const c = el("div", "res-card");
      c.innerHTML = `
        <span class="pill">${v.type}</span>
        <h3>${v.title}</h3>
        <p class="muted">${v.source}</p>
        <p>${v.note}</p>
        <a href="${v.link}" target="_blank" rel="noopener">Open link →</a>
      `;
      vg.appendChild(c);
    });
  }

  const pg = $("#publications-grid");
  if (!pg) return;

  KEY_PUBLICATIONS.forEach(p => {
    const c = el("div", "res-card");
    c.innerHTML = `
      <span class="pill">${p.repo}</span>
      <h3>${p.title}</h3>
      <p>${p.note}</p>
      <a href="${p.link}" target="_blank" rel="noopener">Read publication →</a>
    `;
    pg.appendChild(c);
  });

  if (typeof RESEARCH_IMAGES !== "undefined") {
    RESEARCH_IMAGES.forEach(paper => {
      const titleCard = el("div", "res-card research-paper-title");
      titleCard.innerHTML = `
        <span class="pill">Research Figures</span>
        <h3>${paper.title}</h3>
        <p class="muted">${paper.source}</p>
        <p>${paper.note}</p>
        ${paper.link && paper.link !== "#" ? `<a href="${paper.link}" target="_blank" rel="noopener">Open paper →</a>` : ""}
      `;
      pg.appendChild(titleCard);

      paper.images.forEach((img, index) => {
        const c = el("div", "res-card research-image-card");
        c.innerHTML = `
          <button class="research-image-frame" type="button" aria-label="Open ${img.caption}">
            <img src="${img.src}" alt="${img.caption}" loading="lazy" data-lb="${img.src}" class="research-img">
          </button>
          <h4><span class="image-number">${String(index + 1).padStart(2, "0")}</span> ${img.caption}</h4>
          <p class="muted">${paper.source}</p>
        `;
        pg.appendChild(c);
      });
    });
  }
}

/* ---------- SIMILAR PRODUCTS ---------- */
function renderSimilarProducts() {
  const wrap = $("#similar-products");
  if (!wrap) return;
  SIMILAR_PRODUCTS.forEach((p, i) => {
    const c = el("div", "card reveal" + (i ? " reveal-d" + Math.min(i, 4) : ""));
    c.innerHTML = `<span class="pill">${p.cost}</span><h4>${p.name}</h4><p class="muted">${p.origin}</p><p><strong>Tech:</strong> ${p.tech}</p><p>${p.relevance}</p>`;
    wrap.appendChild(c);
  });
}

/* ---------- TESTING ---------- */
function renderTesting() {
  const wrap = $("#testing-grid");
  if (!wrap) return;
  TESTING.forEach(t => {
    const c = el("div", "test-card");
    c.innerHTML = `<span class="pill">${t.phase}</span><h3>${t.title}</h3><p>${t.description}</p><p class="muted">${t.status}</p>`;
    wrap.appendChild(c);
  });
}

/* ---------- BUDGET ---------- */
function renderBudget() {
  const header = $("#budget-header");
  if (header) header.innerHTML = `<h3>Target Budget</h3><h2>${BUDGET.target}</h2><p>Full prototype cost estimated in ${BUDGET.currency}. Estimated total: ${BUDGET.total}.</p>`;

  const rows = $("#budget-rows");
  if (rows) {
    BUDGET.categories.forEach(c => {
      const r = el("div", "budget-row");
      r.innerHTML = `<strong>${c.name}</strong><span>${c.local}</span><p>${c.notes}</p>`;
      rows.appendChild(r);
    });
  }
}

/* ---------- FUTURE ---------- */
function renderFuture() {
  const wrap = $("#future-list");
  if (!wrap) return;
  FUTURE_WORK.forEach((f, i) => {
    const c = el("div", "future-item reveal");
    c.innerHTML = `<span>${i + 1}</span><p>${f}</p>`;
    wrap.appendChild(c);
  });
}

/* ---------- PROFILE ---------- */
function renderProfile() {
  const qualities = ["Electrochemical sensing", "Analog instrumentation", "Embedded firmware (ESP32)", "PCB & FPCB design", "Wireless (BLE) systems", "Low-power design", "Literature review", "Systematic documentation"];
  const q = $("#profile-qualities");
  if (q) {
    qualities.forEach(t => {
      const d = el("div", "quality-item", t);
      q.appendChild(d);
    });
  }

  const summary = $("#profile-summary");
  if (summary) {
    summary.innerHTML = `<p>Over six documented weeks, this project has moved methodically from clinical problem definition through literature benchmarking, component selection, electronics architecture, flexible-PCB fabrication costing, and prototype implementation planning.</p><p>Every decision is backed by a comparison matrix or reference, demonstrating the rigour and traceability expected of graduate-level biomedical engineering research.</p><p>${PROJECT.student} · ${PROJECT.university}</p>`;
  }
}

/* ---------- CONTACT ---------- */
function renderContact() {
  const box = $("#contact-inner");
  if (!box) return;
  box.innerHTML = `
    <span class="eyebrow">Get in Touch</span>
    <h2>Contact & Project Links</h2>
    <p>Questions about the design, fabrication, weekly resources, papers, or datasheets? Reach out using the university email or open the shared Drive folder.</p>
    <p>✉ ${PROJECT.contactEmail}</p>
    <a class="btn" href="${PROJECT.githubRepo}" target="_blank" rel="noopener">Papers & Datasheets Drive</a>
    <p class="muted">${PROJECT.supervisor}</p>
  `;
}

/* ---------- LIGHTBOX ---------- */
function initLightbox() {
  const lb = $("#lightbox");
  const img = $("#lightbox-img");
  if (!lb || !img) return;

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t.dataset && t.dataset.lb) {
      img.src = t.dataset.lb;
      lb.classList.add("open");
    } else if (t.id === "lightbox" || t.classList.contains("lb-close")) {
      lb.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") lb.classList.remove("open");
  });
}

/* ---------- SCROLL ---------- */
function initScroll() {
  const bar = $("#progress-bar");
  const nav = $("#navbar");
  const top = $("#back-to-top");
  const sections = $$("section[id]");
  const links = $$(".nav-links a");

  const onScroll = () => {
    const h = document.documentElement;
    const denom = h.scrollHeight - h.clientHeight || 1;
    const scrolled = h.scrollTop / denom;
    if (bar) bar.style.width = (scrolled * 100) + "%";
    if (nav) nav.classList.toggle("scrolled", h.scrollTop > 20);
    if (top) top.classList.toggle("visible", h.scrollTop > 600);

    let current = "";
    sections.forEach(s => { if (h.scrollTop >= s.offsetTop - 120) current = s.id; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  if (top) top.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  onScroll();
}

/* ---------- NAV ---------- */
function initNav() {
  const h = $("#hamburger");
  const links = $(".nav-links");
  if (h && links) h.onclick = () => links.classList.toggle("open");
  $$(".nav-links a").forEach(a => a.onclick = () => links && links.classList.remove("open"));
}

/* ---------- REVEAL ---------- */
function initReveal() {
  if (!("IntersectionObserver" in window)) {
    $$(".reveal, .tl-item, .objectives-list li").forEach(n => n.classList.add("visible"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        if (en.target.id === "hero-panel") animateCounters();
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  $$(".reveal, .tl-item, .objectives-list li").forEach(n => io.observe(n));
  const panel = $("#hero-panel");
  if (panel) io.observe(panel);
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
  setTimeout(animateCounters, 1100);
});
