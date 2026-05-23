const terminal = document.getElementById("terminal");
const cmd = document.getElementById("cmd");

function log(text) {
  const div = document.createElement("div");
  div.textContent = "> " + text;
  terminal.appendChild(div);
  terminal.scrollTop = terminal.scrollHeight;
}

cmd.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const value = cmd.value;
    log(value);

    if (value === "help") {
      log("commands: help, status, ai, glitch");
    }

    if (value === "status") {
      log("all systems nominal");
    }

    if (value === "ai") {
      log("neural response: simulation active");
    }

    if (value === "glitch") {
      document.body.style.filter = "hue-rotate(90deg)";
      log("visual distortion enabled");
    }

    cmd.value = "";
  }
});
