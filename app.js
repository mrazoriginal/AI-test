setTimeout(() => {
  document.getElementById("boot").style.display = "none";
  document.getElementById("os").classList.remove("hidden");
}, 1500);

setInterval(() => {
  const clock = document.getElementById("clock");
  clock.textContent = new Date().toLocaleTimeString();
}, 1000);
