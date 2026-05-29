// ============================================================
//  script.js — FYP Portfolio: Smart Diabetic Wound pH Sensor
//  All interactive behaviour: timeline, filters, animations
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  renderHero();
  renderOverview();
  renderProblem();
  renderResearchGap();
  renderObjectives();
  renderWeeklyProgress();
  renderArchitecture();
  renderSensorTech();
  renderResources();
  renderFileAnalysis();
  renderTesting();
  renderBudget();
  renderFutureWork();
  renderReviewGuide();
  renderProfile();
  renderContact();
  initScrollAnimations();
  initBackToTop();
});

// ── NAVBAR ───────────────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveNavLink();
  });

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  let currentId = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) currentId = sec.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
  });
}

// ── HERO ──────────────────────────────────────────────────────
function renderHero() {
  const el = document.getElementById('hero-content');
  if (!el) return;
  el.innerHTML = `
    <div class="hero-eyebrow">
      <div class="hero-eyebrow-line"></div>
      <span class="hero-eyebrow-text">Final Year Project · EEE · ${PROJECT.year}</span>
    </div>
    <h1 class="hero-title">${PROJECT.title}</h1>
    <p class="hero-subtitle">${PROJECT.subtitle}</p>
    <div class="hero-meta">
      <span class="hero-meta-item"><span class="dot"></span>${PROJECT.degree}</span>
      <span class="hero-meta-item"><span class="dot"></span>${PROJECT.university}</span>
      <span class="hero-meta-item"><span class="dot"></span>${PROJECT.year}</span>
    </div>
    <div class="hero-buttons">
      <a href="#progress" class="btn btn-primary">↓ Weekly Progress</a>
      <a href="#resources" class="btn btn-outline">Resource Library</a>
      <a href="${PROJECT.githubRepo}" target="_blank" class="btn btn-outline" style="border-color:var(--amber);color:var(--amber)">⎔ GitHub Repo</a>
    </div>
  `;

  const panelEl = document.getElementById('hero-panel');
  if (!panelEl) return;
  panelEl.innerHTML = `
    <div class="stats-card">
      <div class="stats-card-title">Project at a Glance</div>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-value">≥<span>50</span><span style="font-size:1.2rem"> mV/pH</span></div>
          <div class="stat-label">Sensitivity Target</div>
        </div>
        <div class="stat-item">
          <div class="stat-value"><span>16</span><span style="font-size:1.2rem">-bit</span></div>
          <div class="stat-label">ADC Resolution</div>
        </div>
        <div class="stat-item">
          <div class="stat-value"><span style="font-size:1.6rem">≤LKR</span><br><span>20k</span></div>
          <div class="stat-label">Project Budget</div>
        </div>
        <div class="stat-item">
          <div class="stat-value"><span>7</span></div>
          <div class="stat-label">Weeks Documented</div>
        </div>
      </div>
      <div class="tech-stack">
        <div class="tech-stack-label">Technology Stack</div>
        <div class="tech-chips">
          <span class="tech-chip">PANI</span>
          <span class="tech-chip">Ag/AgCl</span>
          <span class="tech-chip">INA333</span>
          <span class="tech-chip">ADS1115</span>
          <span class="tech-chip">ESP32-S3</span>
          <span class="tech-chip">BLE 5.0</span>
          <span class="tech-chip">CR2032</span>
          <span class="tech-chip">PET FPCB</span>
        </div>
      </div>
    </div>
  `;
}

// ── OVERVIEW ─────────────────────────────────────────────────
function renderOverview() {
  const el = document.getElementById('abstract-content');
  if (el) el.innerHTML = ABSTRACT.trim().replace(/\n/g, ' ');
}

// ── PROBLEM ──────────────────────────────────────────────────
function renderProblem() {
  const el = document.getElementById('problem-cards');
  if (!el) return;
  el.innerHTML = PROBLEM.points.map(p => `
    <div class="problem-card reveal">
      <span class="problem-icon">${p.icon}</span>
      <div class="problem-title">${p.title}</div>
      <p class="problem-text">${p.text}</p>
    </div>
  `).join('');
}

// ── RESEARCH GAP ─────────────────────────────────────────────
function renderResearchGap() {
  const cardsEl = document.getElementById('paper-cards');
  const gapEl   = document.getElementById('research-gap-text');
  if (!cardsEl || !gapEl) return;

  cardsEl.innerHTML = RESEARCH_GAP.papers.map(p => `
    <div class="paper-card reveal">
      <div class="paper-citation">${p.citation}</div>
      <div class="paper-finding"><strong style="color:var(--white)">Finding:</strong> ${p.finding}</div>
      <div class="paper-limit">${p.limitation}</div>
      <div style="margin-top:0.75rem;font-size:0.82rem;color:var(--teal)">→ ${p.relevance}</div>
    </div>
  `).join('');

  gapEl.innerHTML = `
    <span class="gap-label">📍 Identified Research Gap</span>
    <p class="gap-text">${RESEARCH_GAP.gap}</p>
  `;
}

// ── OBJECTIVES ───────────────────────────────────────────────
function renderObjectives() {
  const el = document.getElementById('objectives-list');
  if (!el) return;
  el.innerHTML = OBJECTIVES.map((obj, i) => `
    <li style="transition-delay:${i*0.08}s">
      <span>${obj}</span>
    </li>
  `).join('');
}

// ── WEEKLY PROGRESS ──────────────────────────────────────────
function renderWeeklyProgress() {
  const filtersEl  = document.getElementById('phase-filters');
  const timelineEl = document.getElementById('timeline');
  if (!timelineEl) return;

  // Build unique phase list
  const phases = ['All', ...new Set(WEEKS.map(w => w.phase))];
  if (filtersEl) {
    filtersEl.innerHTML = phases.map((p, i) => `
      <button class="phase-btn ${i === 0 ? 'active' : ''}" data-phase="${p}">${p}</button>
    `).join('');

    filtersEl.addEventListener('click', e => {
      if (!e.target.classList.contains('phase-btn')) return;
      document.querySelectorAll('.phase-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const selected = e.target.dataset.phase;
      document.querySelectorAll('.timeline-item').forEach(item => {
        const show = selected === 'All' || item.dataset.phase === selected;
        item.classList.toggle('hidden', !show);
      });
    });
  }

  timelineEl.innerHTML = WEEKS.map(w => `
    <div class="timeline-item" data-phase="${w.phase}" data-id="${w.id}">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap">
            <span class="timeline-week-badge">${w.label}</span>
            <span class="timeline-phase">${w.phase}</span>
          </div>
          <span class="timeline-date">${w.dates}</span>
        </div>
        <div class="timeline-body">
          <div class="timeline-title">${w.title}</div>
          <p class="timeline-summary">${w.summary.substring(0, 220)}...</p>
          <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;margin-top:0.75rem">
            <button class="timeline-expand-btn" onclick="toggleWeekDetail(${w.id})">
              <span id="expand-label-${w.id}">▸ Read More</span>
            </button>
            <div class="files-list">
              ${w.files.map(f => `<span class="file-chip">📄 ${f}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="timeline-details" id="detail-${w.id}">
          <div class="details-grid">
            <div class="detail-block">
              <div class="detail-label">Goals This Week</div>
              <div class="detail-text">${w.goals}</div>
            </div>
            <div class="detail-block">
              <div class="detail-label">Design Decision</div>
              <div class="detail-text">${w.decisions}</div>
            </div>
            <div class="detail-block">
              <div class="detail-label">Rejected / Improved</div>
              <div class="detail-text" style="color:var(--red-alert)">${w.rejected}</div>
            </div>
            <div class="detail-block">
              <div class="detail-label">Link to Next Week</div>
              <div class="detail-text" style="color:var(--teal)">${w.nextWeek}</div>
            </div>
          </div>
          <div class="detail-block" style="margin-bottom:1rem">
            <div class="detail-label">Key Findings</div>
            <ul class="findings-list">
              ${w.keyFindings.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
          <div class="detail-block">
            <div class="detail-label">Evidence</div>
            <div class="detail-text">${w.evidence}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Toggle week detail panel
function toggleWeekDetail(id) {
  const det = document.getElementById(`detail-${id}`);
  const lbl = document.getElementById(`expand-label-${id}`);
  if (!det) return;
  const isOpen = det.classList.toggle('open');
  if (lbl) lbl.textContent = isOpen ? '▾ Close' : '▸ Read More';
}
window.toggleWeekDetail = toggleWeekDetail;

// ── ARCHITECTURE ─────────────────────────────────────────────
function renderArchitecture() {
  const el = document.getElementById('arch-diagram');
  if (!el) return;

  const colorMap = { sensor:'#10B981', signal:'#3B82F6', adc:'#8B5CF6', mcu:'#F59E0B', comms:'#EF4444', power:'#6B7280' };

  el.innerHTML = ARCHITECTURE.layers.map((layer, i) => `
    ${i > 0 ? '<div class="arch-arrow" style="text-align:center;color:var(--teal);opacity:0.4;font-size:1.2rem;line-height:0.8;margin:0 0 0 1rem">↓</div>' : ''}
    <div class="arch-layer reveal" style="border-left:3px solid ${layer.color}">
      <div class="arch-layer-name">
        <div class="arch-layer-dot" style="background:${layer.color}"></div>
        ${layer.label}
      </div>
      <div class="arch-components">
        ${layer.components.map(c => `<span class="arch-comp">${c}</span>`).join('')}
      </div>
      <div class="arch-output">${layer.output}</div>
    </div>
  `).join('');
}

// ── SENSOR TECHNOLOGY ────────────────────────────────────────
function renderSensorTech() {
  const el = document.getElementById('sensor-grid');
  if (!el) return;

  const sensors = [
    { icon: '🧪', name: 'PANI pH Electrode', spec: '54–69 mV/pH Nernstian Response', desc: 'Polyaniline Emeraldine Salt electropolymerised on carbon base layer. Intrinsic acid-base doping mechanism provides potentiometric pH response with no additional functionalisation required.' },
    { icon: '⚡', name: 'Ag/AgCl Reference Electrode', spec: 'E ≈ +0.249 V vs SHE (wound)', desc: 'Electrochemically chloridised silver ink pad on PET. pH-independent reference potential maintained by wound Cl⁻ concentration (~130 mM). Variation: <3 mV potential error.' },
    { icon: '🌡️', name: 'NTC Thermistor (Temperature)', spec: '20–45°C, ±0.5°C accuracy', desc: 'Flexible 2 mm bead NTC 10kΩ (B3950) embedded in the wound patch. Reads via voltage divider on ADS1115 Channel 1. Essential for Nernst temperature correction and infection detection.' },
    { icon: '💧', name: 'Impedance Moisture Sensing', spec: '100 Hz – 100 kHz AC excitation', desc: 'Same PANI/Ag/AgCl electrodes used for impedance spectroscopy via frequency-division multiplexing. ESP32-S3 DAC generates AC excitation; ADS1115 reads magnitude and phase for moisture quantification.' },
  ];

  el.innerHTML = sensors.map(s => `
    <div class="sensor-card reveal">
      <span class="sensor-icon">${s.icon}</span>
      <div class="sensor-name">${s.name}</div>
      <div class="sensor-spec">${s.spec}</div>
      <p class="sensor-desc">${s.desc}</p>
    </div>
  `).join('');
}

// ── RESOURCES ────────────────────────────────────────────────
function renderResources() {
  const filterEl   = document.getElementById('resource-filters');
  const gridEl     = document.getElementById('resource-grid');
  if (!gridEl) return;

  const types = ['All', 'paper', 'excel', 'document', 'datasheet', 'video', 'guide'];
  const typeLabels = { All:'All', paper:'Research Papers', excel:'Excel Sheets', document:'Documents', datasheet:'Datasheets', video:'Videos', guide:'Guides' };

  if (filterEl) {
    filterEl.innerHTML = `<span class="filter-label">Filter by:</span>` +
      types.map((t, i) => `<button class="filter-btn ${i===0?'active':''}" data-type="${t}">${typeLabels[t]||t}</button>`).join('');

    filterEl.addEventListener('click', e => {
      if (!e.target.classList.contains('filter-btn')) return;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const sel = e.target.dataset.type;
      document.querySelectorAll('.resource-card').forEach(card => {
        card.classList.toggle('hidden', sel !== 'All' && card.dataset.type !== sel);
      });
    });
  }

  const typeIcons = { paper:'📄', excel:'📊', document:'📋', datasheet:'🔧', video:'▶', guide:'📚' };
  const weekToLabel = {1:'Week 01',2:'Week 02',3:'Week 03',4:'Week 04',5:'Week 05',6:'Week 06',7:'Week 07'};

  gridEl.innerHTML = RESOURCES.map(r => `
    <div class="resource-card reveal" data-type="${r.type}">
      <span class="resource-type-badge type-${r.type}">${typeIcons[r.type]||'📎'} ${r.type.toUpperCase()}</span>
      <div class="resource-title">${r.title}</div>
      <p class="resource-desc">${r.description || r.relevance}</p>
      <div>
        <div class="resource-tags">
          ${(r.tags||[]).map(t => `<span class="tag tag-teal">${t}</span>`).join('')}
          ${r.week ? `<span class="tag tag-amber">${weekToLabel[r.week]||''}</span>` : ''}
          ${r.journal ? `<span class="tag tag-purple">${r.journal} ${r.year}</span>` : ''}
        </div>
      </div>
      <div class="resource-meta">
        <a href="${r.link||'#'}" class="resource-link" ${r.link && r.link!=='#' ? 'target="_blank"' : ''}>
          ${r.link && r.link!=='#' ? '↗ Open File' : '🔒 Local File'}
        </a>
      </div>
    </div>
  `).join('');
}

// ── FILE ANALYSIS TABLE ──────────────────────────────────────
function renderFileAnalysis() {
  const el = document.getElementById('file-table-body');
  if (!el) return;
  el.innerHTML = FILE_ANALYSIS.map(f => `
    <tr>
      <td class="td-file">${f.name}</td>
      <td class="td-week">${f.week}</td>
      <td style="color:var(--gray-mid);font-family:var(--font-mono);font-size:0.75rem">${f.type}</td>
      <td>${f.content}</td>
      <td style="color:var(--teal);font-size:0.85rem">${f.importance}</td>
      <td style="color:var(--amber);font-size:0.8rem;font-family:var(--font-mono)">${f.section}</td>
    </tr>
  `).join('');
}

// ── TESTING ──────────────────────────────────────────────────
function renderTesting() {
  const el = document.getElementById('testing-grid');
  if (!el) return;
  el.innerHTML = TESTING.map(t => `
    <div class="test-card reveal">
      <div class="test-phase">${t.phase}</div>
      <div class="test-title">${t.title}</div>
      <p class="test-desc">${t.description}</p>
      <span class="test-status">${t.status}</span>
    </div>
  `).join('');
}

// ── BUDGET ───────────────────────────────────────────────────
function renderBudget() {
  const headerEl = document.getElementById('budget-header');
  const rowsEl   = document.getElementById('budget-rows');
  if (!headerEl || !rowsEl) return;

  headerEl.innerHTML = `
    <div class="budget-total">
      <div class="budget-total-label">Project Budget Target</div>
      <div class="budget-total-value">${BUDGET.target}</div>
      <div style="font-family:var(--font-mono);font-size:0.68rem;color:var(--gray-dim);margin-top:0.25rem">${BUDGET.currency}</div>
    </div>
    <div style="flex:1">
      <p class="section-desc" style="margin-bottom:0">The project is designed to be fully executable within LKR 20,000 (~USD 61), with local Sri Lankan sourcing prioritised for synthesis chemicals and international procurement (LCSC, AliExpress) limited to electronics components not available locally. A 20% contingency is built into all phase budgets.</p>
    </div>
  `;

  rowsEl.innerHTML = BUDGET.categories.map(c => `
    <div class="budget-row reveal">
      <div class="budget-item-name">${c.name}</div>
      <div class="budget-item-cost">${c.local}</div>
      <div class="budget-item-notes">${c.notes}</div>
    </div>
  `).join('');
}

// ── FUTURE WORK ──────────────────────────────────────────────
function renderFutureWork() {
  const el = document.getElementById('future-list');
  if (!el) return;
  el.innerHTML = FUTURE_WORK.map((f, i) => `
    <div class="future-item reveal" style="transition-delay:${i*0.06}s">
      <div class="future-num">${i+1}</div>
      <div class="future-text">${f}</div>
    </div>
  `).join('');
}

// ── REVIEW GUIDE ─────────────────────────────────────────────
function renderReviewGuide() {
  const el = document.getElementById('review-steps');
  if (!el) return;
  const steps = [
    { icon: '🏠', title: 'Start with Project Overview', desc: 'Read the abstract and problem statement to understand the clinical context and project scope.' },
    { icon: '📅', title: 'Follow Weekly Progress', desc: 'Navigate the timeline chronologically. Expand each week to see decisions, evidence, and key findings.' },
    { icon: '🔬', title: 'Review Research Foundation', desc: 'Check the Research Gap section — three papers were compared to justify the technical approach.' },
    { icon: '🏗️', title: 'Examine System Architecture', desc: 'Review the six-layer block diagram showing signal flow from sensor to wireless output.' },
    { icon: '📊', title: 'Open Resource Library', desc: 'Filter by file type. Every Excel analysis file is catalogued with its week and purpose.' },
    { icon: '🗂️', title: 'Check File Analysis Table', desc: 'The complete file index maps every uploaded document to its project section and importance.' },
    { icon: '🧪', title: 'Review Testing Plan', desc: 'Six validation phases are defined, from PANI synthesis QC to full system simulated wound testing.' },
    { icon: '🔭', title: 'Read Future Work', desc: 'Eight directions for post-FYP research and development are outlined for MSc/PhD application context.' },
  ];

  el.innerHTML = steps.map(s => `
    <div class="review-step reveal">
      <span class="review-icon">${s.icon}</span>
      <div class="review-title">${s.title}</div>
      <p class="review-desc">${s.desc}</p>
    </div>
  `).join('');
}

// ── PROFILE ──────────────────────────────────────────────────
function renderProfile() {
  const qualEl   = document.getElementById('profile-qualities');
  const summaryEl = document.getElementById('profile-summary');
  if (!qualEl) return;

  const qualities = [
    'Technical curiosity and initiative', 'Research-based decision making',
    'Systematic evidence collection', 'Iterative design improvement',
    'pH/electrochemical sensing expertise', 'Biomedical instrumentation interest',
    'Embedded systems & firmware design', 'Flexible PCB & materials knowledge',
    'Budget-conscious engineering', 'Weekly documentation discipline',
    'Critical literature analysis', 'Higher studies motivation',
  ];

  qualEl.innerHTML = qualities.map(q => `
    <div class="quality-item"><div class="quality-dot"></div>${q}</div>
  `).join('');

  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="section-label">Research Profile</div>
      <p style="color:var(--gray-light);line-height:1.8;font-size:0.95rem">
        This portfolio demonstrates consistent, evidence-based engineering development over the project period. 
        Rather than selecting components arbitrarily, every technical decision — from PANI over PEDOT:PSS to 
        ADS1115 over the ESP32 internal ADC — is backed by comparative analysis documented in the uploaded 
        Excel workbooks.
      </p>
      <br>
      <p style="color:var(--gray-light);line-height:1.8;font-size:0.95rem">
        The project bridges three engineering disciplines: electrochemical sensing, analog signal conditioning, 
        and embedded wireless systems — exactly the multi-disciplinary profile sought in graduate research 
        programmes in biomedical engineering, sensors & instrumentation, and healthcare technology.
      </p>
      <br>
      <p style="color:var(--teal);font-style:italic;font-size:0.9rem">
        This work is submitted as a Final Year Project portfolio and is intended as a foundation for MSc and 
        PhD applications in biomedical engineering and flexible electronics.
      </p>
    `;
  }
}

// ── CONTACT ──────────────────────────────────────────────────
function renderContact() {
  const el = document.getElementById('contact-inner');
  if (!el) return;
  el.innerHTML = `
    <span class="section-label" style="display:block;text-align:center">Get In Touch</span>
    <h2 class="section-title" style="text-align:center">Supervisor & Collaborator <span>Contact</span></h2>
    <p style="color:var(--gray-light);font-size:1rem;line-height:1.8;max-width:500px;margin:0 auto 2rem">
      For project supervisor review, collaboration enquiries, or research discussion, please reach out via the channels below.
    </p>
    <div class="contact-links">
      <a href="mailto:${PROJECT.contactEmail}" class="btn btn-primary">✉ Email</a>
      <a href="${PROJECT.githubRepo}" target="_blank" class="btn btn-outline">⎔ GitHub</a>
      <a href="#review" class="btn btn-amber">📋 Supervisor Review Guide</a>
    </div>
  `;
}

// ── SCROLL ANIMATIONS ────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  // Observe all reveal elements (including dynamically rendered ones)
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .timeline-item, .objectives-list li').forEach(el => {
      observer.observe(el);
    });
  }, 100);
}

// ── BACK TO TOP ──────────────────────────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 600);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


// ============================================================
//  EXTENDED RENDER FUNCTIONS (added sections)
// ============================================================

// ── VIDEO & PUBLICATION REFERENCES ───────────────────────────
function renderVideos() {
  const el = document.getElementById('videos-grid');
  if (!el) return;
  el.innerHTML = VIDEOS.map(v => `
    <div class="resource-card reveal" data-type="video">
      <span class="resource-type-badge type-video">${v.type === 'video' ? '▶ VIDEO' : '↗ REFERENCE'}</span>
      <div class="resource-title">${v.title}</div>
      <div style="font-family:var(--font-mono);font-size:0.72rem;color:var(--amber)">${v.source}</div>
      <p class="resource-desc">${v.note}</p>
      <div class="resource-meta">
        <a href="${v.link}" target="_blank" class="resource-link">↗ Open ${v.type === 'video' ? 'Video' : 'Link'}</a>
      </div>
    </div>
  `).join('');

  // Key publications
  const pubEl = document.getElementById('publications-grid');
  if (pubEl) {
    pubEl.innerHTML = KEY_PUBLICATIONS.map(p => `
      <div class="resource-card reveal" data-type="paper">
        <span class="resource-type-badge type-paper">📄 PUBLICATION</span>
        <div class="resource-title">${p.title}</div>
        <div style="font-family:var(--font-mono);font-size:0.72rem;color:var(--purple)">${p.repo}</div>
        <p class="resource-desc">${p.note}</p>
        <div class="resource-meta">
          <a href="${p.link}" target="_blank" class="resource-link">↗ Open on PMC</a>
        </div>
      </div>
    `).join('');
  }
}

// ── DATASHEETS ───────────────────────────────────────────────
function renderDatasheets() {
  const el = document.getElementById('datasheets-grid');
  if (!el) return;
  el.innerHTML = DATASHEETS.map(d => `
    <div class="resource-card reveal" data-type="datasheet">
      <span class="resource-type-badge type-datasheet">🔧 ${d.category.toUpperCase()}</span>
      <div class="resource-title">${d.component}</div>
      <p class="resource-desc">${d.role}</p>
      <div class="resource-meta">
        <a href="${d.link}" target="_blank" class="resource-link">📄 View Datasheet</a>
      </div>
    </div>
  `).join('');
}

// ── DOCUMENT LIBRARY ─────────────────────────────────────────
function renderDocuments() {
  const el = document.getElementById('documents-grid');
  if (!el) return;
  el.innerHTML = DOCUMENTS_LIB.map(d => `
    <div class="resource-card reveal" data-type="document">
      <span class="resource-type-badge type-document">📋 ${d.type.toUpperCase()}</span>
      <div class="resource-title">${d.title}</div>
      <p class="resource-desc">${d.note}</p>
      <div class="resource-meta">
        <a href="${d.link}" target="_blank" class="resource-link">↗ Open Document</a>
      </div>
    </div>
  `).join('');
}

// ── SUPERVISOR NOTES ─────────────────────────────────────────
function renderSupervisorNotes() {
  const el = document.getElementById('supervisor-notes');
  if (!el) return;
  el.innerHTML = SUPERVISOR_NOTES.map(n => `
    <div class="card reveal" style="border-left:3px solid var(--amber)">
      <div class="flex-between" style="flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem">
        <span class="timeline-week-badge" style="background:var(--amber)">${n.week}</span>
        <span style="font-family:var(--font-mono);font-size:0.72rem;color:var(--gray-dim)">${n.date}</span>
      </div>
      <h4 style="color:var(--white);margin-bottom:0.75rem">${n.topic}</h4>
      <div class="detail-block" style="margin-bottom:0.75rem">
        <div class="detail-label">Supervisor Feedback</div>
        <div class="detail-text">${n.feedback}</div>
      </div>
      <div class="detail-block">
        <div class="detail-label" style="color:var(--teal)">Resulting Action</div>
        <div class="detail-text" style="color:var(--teal)">${n.action}</div>
      </div>
    </div>
  `).join('');
}

// ── COMPETITIVE / SIMILAR PRODUCTS ───────────────────────────
function renderSimilarProducts() {
  const el = document.getElementById('similar-products');
  if (!el) return;
  el.innerHTML = SIMILAR_PRODUCTS.map(s => `
    <div class="card reveal" style="border-left:3px solid var(--purple)">
      <h4 style="color:var(--white);margin-bottom:0.4rem">${s.name}</h4>
      <div style="font-family:var(--font-mono);font-size:0.72rem;color:var(--purple);margin-bottom:0.75rem">${s.origin}</div>
      <p style="font-size:0.85rem;color:var(--gray-light);margin-bottom:0.5rem"><strong style="color:var(--white)">Tech:</strong> ${s.tech}</p>
      <p style="font-size:0.85rem;color:var(--gray-light);margin-bottom:0.5rem"><strong style="color:var(--white)">Cost:</strong> ${s.cost}</p>
      <p style="font-size:0.85rem;color:var(--teal);line-height:1.6">→ ${s.relevance}</p>
    </div>
  `).join('');
}

// ── CLINICAL WOUND pH TABLE ──────────────────────────────────
function renderWoundPhTable() {
  const el = document.getElementById('wound-ph-table-body');
  if (!el) return;
  const flagColor = { ok: 'var(--green-ok)', warn: 'var(--amber)', danger: 'var(--red-alert)' };
  el.innerHTML = WOUND_PH_TABLE.map(r => `
    <tr>
      <td style="color:var(--white);font-weight:500">${r.state}</td>
      <td style="font-family:var(--font-mono);color:${flagColor[r.flag]};font-size:0.85rem;white-space:nowrap">${r.range}</td>
      <td>${r.interpretation}</td>
    </tr>
  `).join('');
}

// ── FILE CATEGORIES ──────────────────────────────────────────
function renderFileCategories() {
  const el = document.getElementById('file-categories');
  if (!el) return;
  el.innerHTML = FILE_CATEGORIES.map(c => `
    <div class="card reveal">
      <div style="display:flex;align-items:center;gap:0.6rem;margin-bottom:0.5rem">
        <span style="font-size:1.5rem">${c.icon}</span>
        <h4 style="color:var(--white);margin:0">${c.category}</h4>
      </div>
      <div style="font-family:var(--font-mono);font-size:0.72rem;color:var(--teal);margin-bottom:0.5rem">${c.count}</div>
      <p style="font-size:0.85rem;color:var(--gray-light);line-height:1.6;margin-bottom:0.5rem">${c.support}</p>
      <div style="font-family:var(--font-mono);font-size:0.68rem;color:var(--gray-dim);border-top:1px solid var(--navy-border);padding-top:0.5rem">${c.files}</div>
    </div>
  `).join('');
}

// Hook the new renderers into page load
document.addEventListener('DOMContentLoaded', () => {
  renderVideos();
  renderDatasheets();
  renderDocuments();
  renderSupervisorNotes();
  renderSimilarProducts();
  renderWoundPhTable();
  renderFileCategories();
  // Re-run scroll animations to capture newly added elements
  setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
  }, 200);
});
