const terminal = document.getElementById("terminal");

function addLine(text) {
  const div = document.createElement("div");
  div.className = "line";
  div.textContent = "> " + text;
  terminal.appendChild(div);
  terminal.scrollTop = terminal.scrollHeight;
}

/* click = AI response simulation */
document.body.addEventListener("click", () => {
  const responses = [
    "processing input...",
    "pattern detected in user behavior.",
    "simulation complete.",
    "confidence: 91.4%",
    "reality index adjusted.",
    "no anomalies found."
  ];

  addLine(responses[Math.floor(Math.random() * responses.length)]);
});

/* glitch toggle */
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "g") {
    document.body.classList.toggle("glitch");
    addLine("glitch mode toggled");
  }
});
