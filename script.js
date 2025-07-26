function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function login() {
  const user = document.getElementById('loginUsername').value;
  const pass = document.getElementById('loginPassword').value;

  if (user && pass) {
    document.getElementById('displayName').textContent = user;
    showPage('mainPage');
  } else {
    alert("Please enter username and password");
  }
}

function register() {
  const user = document.getElementById('regUsername').value;
  const pass = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regConfirmPassword').value;

  if (!user || !pass || !confirm) {
    alert("Please fill all fields.");
    return;
  }

  if (pass !== confirm) {
    alert("Passwords do not match.");
    return;
  }

  alert("Account created! Please login.");
  showPage('loginPage');
}

function submitHealthData() {
  const sleep = document.getElementById('sleepHours').value;
  const water = document.getElementById('waterIntake').value;
  const meals = document.getElementById('mealsPerDay').value;
  const activity = document.getElementById('physicalActivity').value;
  const mood = document.getElementById('mood').value;

  if (!sleep || !water || !meals || !activity || !mood) {
    alert("Please complete all required fields.");
    return;
  }

  showPage('loadingPage');

  setTimeout(() => {
    document.getElementById('aiResults').innerHTML = `
      <h3>Health Tip Based on Your Input</h3>
      <ul>
        <li>✅ Sleep more than ${sleep} hrs is good!</li>
        <li>✅ Stay hydrated: ${water}L/day</li>
        <li>🍽️ Meals/day: ${meals}</li>
        <li>🏃 Physical activity: ${activity}</li>
        <li>🙂 Mood: ${mood}</li>
      </ul>
      <h4>Do's</h4><ul><li>Stay active</li><li>Eat regularly</li><li>Drink water</li></ul>
      <h4>Don'ts</h4><ul><li>Skip meals</li><li>Ignore sleep</li><li>Neglect exercise</li></ul>
    `;
    showPage('resultPage');
  }, 2000);
}

function logout() {
  showPage('loginPage');
}

function saveSettings() {
  const name = document.getElementById('newDisplayName').value;
  if (name) {
    document.getElementById('displayName').textContent = name;
    alert("Display name updated!");
  }
  alert("Settings saved.");
  showPage('mainPage');
}

window.onload = () => showPage('loginPage');
