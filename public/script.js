const teamMembers = [
  { id: 1, name: "Ziga", role: "Mentor / Engineer", status: "online" },
  { id: 2, name: "Lawrence", role: "Developer", status: "offline" },
  { id: 3, name: "Guest", role: "Observer", status: "idle" }
];

const teamListElement = document.getElementById("teamList");

function renderTeam() {
  teamListElement.innerHTML = "";

  teamMembers.forEach(member => {
    const li = document.createElement("li");
    li.textContent = `👤 ${member.name}`;
    teamListElement.appendChild(li);
  });
}

renderTeam();
