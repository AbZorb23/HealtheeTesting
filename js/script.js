document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "main.html";
});

document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "index.html";
});

document.getElementById("healthForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  window.location.href = "loading.html";
});

document.getElementById("settingsForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Settings saved successfully!");
});
