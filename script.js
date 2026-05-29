function $(id) {
  return document.getElementById(id);
}

function makeList(items) {
  return items.map(item => `<li>${item}</li>`).join("");
}

function renderWeeks() {
  const container = $("weeks-grid");
  container.innerHTML = WEEKS.map(item => {
    const isComing = item.status.toLowerCase().includes("coming");
    const linkButton = item.link
      ? `<a class="btn btn-primary" href="${item.link}" target="_blank" rel="noopener">Open ${item.week} Drive Resources</a>`
      : `<span class="btn btn-disabled">Coming soon</span>`;

    return `
      <article class="week-card ${isComing ? "coming" : "done"}">
        <div class="week-top">
          <span class="week-label">${item.week}</span>
          <span class="status ${isComing ? "status-soon" : "status-done"}">${item.status}</span>
        </div>
        <p class="phase">${item.phase}</p>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <ul class="mini-list">${makeList(item.work)}</ul>
        <div class="week-actions">${linkButton}</div>
      </article>`;
  }).join("");
}

function renderComponents() {
  $("components-grid").innerHTML = SYSTEM_COMPONENTS.map(component => `
    <article class="info-card">
      <h3>${component.name}</h3>
      <p>${component.detail}</p>
    </article>
  `).join("");
}

function renderLimitations() {
  $("limitations-list").innerHTML = LIMITATIONS.map((item, index) => `
    <li><span>0${index + 1}</span>${item}</li>
  `).join("");
}

function renderProjectInfo() {
  $("student-code").textContent = PROJECT.student;
  $("university").textContent = PROJECT.university;
  $("contact-email").textContent = PROJECT.contactEmail;
  $("contact-email").href = `mailto:${PROJECT.contactEmail}`;
  $("footer-email").textContent = PROJECT.contactEmail;
  $("footer-email").href = `mailto:${PROJECT.contactEmail}`;
  $("dept-supervisor").textContent = PROJECT.departmentSupervisor;
  $("medical-supervisor").textContent = PROJECT.medicalSupervisor;
  $("medical-faculty").textContent = PROJECT.medicalFaculty;
  $("papers-link").href = PROJECT.datasheetAndPapersLink;
  $("datasheets-link").href = PROJECT.datasheetAndPapersLink;
  $("old-datasheets-link").href = PROJECT.previousDatasheetLink;
}

function setYear() {
  $("year").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjectInfo();
  renderWeeks();
  renderComponents();
  renderLimitations();
  setYear();
});
