// Render corrected FYP website content.
// No image rendering is used.

const byId = (id) => document.getElementById(id);

function makeEl(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function renderWeeks() {
  const grid = byId("weeks-grid");
  grid.innerHTML = "";

  WEEKS.forEach((week) => {
    const card = makeEl("article", `week-card ${week.status === "Coming soon" ? "coming-soon" : ""}`);
    const chips = week.usedFor.map(item => `<span class="chip">${item}</span>`).join("");
    const linkHtml = week.link
      ? `<a class="week-link" href="${week.link}" target="_blank" rel="noopener">Open ${week.number} Drive resources</a>`
      : `<span class="week-link disabled">Coming soon</span>`;

    card.innerHTML = `
      <div class="week-number">
        <span class="week-label">${week.number}</span>
        <span class="week-status">${week.status}</span>
      </div>
      <div>
        <h3>${week.title}</h3>
        <p>${week.description}</p>
        <div class="chips">${chips}</div>
        ${linkHtml}
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderResources() {
  const grid = byId("resources-grid");
  grid.innerHTML = "";

  RESOURCES.forEach((resource) => {
    const card = makeEl("article", "resource-card");
    card.innerHTML = `
      <span class="resource-type">${resource.type}</span>
      <h3>${resource.title}</h3>
      <p>${resource.description}</p>
      <a href="${resource.link}" target="_blank" rel="noopener">Open Drive link →</a>
    `;
    grid.appendChild(card);
  });

  const contactDatasheet = byId("paper-datasheet-contact");
  if (contactDatasheet) {
    contactDatasheet.href = PAPER_DATASHEET_LINK;
  }
}

function renderArchitecture() {
  const grid = byId("architecture-grid");
  grid.innerHTML = "";

  ARCHITECTURE.forEach((block) => {
    const card = makeEl("article", "arch-card");
    card.innerHTML = `
      <span class="block-tag">${block.tag}</span>
      <h3>${block.title}</h3>
      <p>${block.description}</p>
    `;
    grid.appendChild(card);
  });
}

function verifyImportantText() {
  // Hidden metadata for easy checking after editing.
  document.body.dataset.email = PROJECT.email;
  document.body.dataset.temperatureSensor = PROJECT.temperatureSensor;
  document.body.dataset.departmentSupervisor = PROJECT.departmentSupervisor;
  document.body.dataset.medicalSupervisor = PROJECT.medicalSupervisor;
}

document.addEventListener("DOMContentLoaded", () => {
  renderWeeks();
  renderResources();
  renderArchitecture();
  verifyImportantText();
});
