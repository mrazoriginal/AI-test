const ai = document.getElementById("ai");

document.body.addEventListener("click", () => {
  const responses = [
    "pattern recognized in user input",
    "system adapting interface",
    "no threats detected",
    "probability shift: 0.03%",
    "AI core stabilizing..."
  ];

  ai.textContent =
    responses[Math.floor(Math.random() * responses.length)];
});
