const teamMembers = [
  {
    id: 1,
    name: "Ziga",
    role: "Mentor / Engineer",
    status: "online",
    projects: ["Soaks Lab OS", "Automation Lab"]
  },
  {
    id: 2,
    name: "Lawrence",
    role: "Developer",
    status: "offline",
    projects: ["RevOps Systems"]
  },
  {
    id: 3,
    name: "Guest",
    role: "Observer",
    status: "idle",
    projects: []
  }
];

const teamListElement = document.getElementById("teamList");
const workspaceTitle = document.getElementById("workspaceTitle");
const projectsContainer = document.getElementById("projects");

let activeMemberId = null;

function renderTeam() {
  teamListElement.innerHTML = "";

  teamMembers.forEach(member => {
    const li = document.createElement("li");
    li.className = "team-member";
    li.dataset.id = member.id;

    const nameSpan = document.createElement("span");
    nameSpan.textContent = member.name;

    const statusDot = document.createElement("span");
    statusDot.className = `status-dot status-${member.status}`;

    li.appendChild(nameSpan);
    li.appendChild(statusDot);

    li.addEventListener("click", () => selectMember(member.id));

    teamListElement.appendChild(li);
  });
}

function selectMember(memberId) {
  activeMemberId = memberId;

  const member = teamMembers.find(m => m.id === memberId);

  document.querySelectorAll(".team-member").forEach(el => {
    el.classList.toggle("active", Number(el.dataset.id) === memberId);
  });

  workspaceTitle.textContent = `${member.name}'s Projects`;
  renderProjects(member.projects);
}

function renderProjects(projects) {
  projectsContainer.innerHTML = "";

  if (projects.length === 0) {
    projectsContainer.textContent = "No active projects.";
    return;
  }

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.textContent = project;
    projectsContainer.appendChild(card);
  });
}

renderTeam();
