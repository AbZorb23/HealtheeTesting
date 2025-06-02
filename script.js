function switchPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function registerUser() {
  const u = document.getElementById('regUsername').value;
  const p = document.getElementById('regPassword').value;
  if (u && p) {
    localStorage.setItem('username', u);
    localStorage.setItem('password', p);
    alert('Registration complete. You can now log in.');
    switchPage('loginPage');
  } else {
    alert('Enter username and password to register.');
  }
}

function loginUser() {
  const u = document.getElementById('loginUsername').value;
  const p = document.getElementById('loginPassword').value;
  const storedU = localStorage.getItem('username');
  const storedP = localStorage.getItem('password');

  if (u === storedU && p === storedP) {
    document.getElementById('displayUser').innerText = u;
    switchPage('mainPage');
  } else {
    alert('Access denied. Check your credentials.');
  }
}

function logout() {
  switchPage('loginPage');
}

function updateSettings() {
  const u = document.getElementById('newUsername').value;
  const p = document.getElementById('newPassword').value;
  if (u) localStorage.setItem('username', u);
  if (p) localStorage.setItem('password', p);
  alert('Settings updated.');
  switchPage('mainPage');
}

document.getElementById('healthForm').addEventListener('submit', function (e) {
  e.preventDefault();
  switchPage('loadingPage');
  setTimeout(() => {
    generateResults();
    switchPage('resultsPage');
  }, 2000);
});

function generateResults() {
  const sleep = +document.getElementById('sleep').value;
  const water = +document.getElementById('water').value;
  const meals = +document.getElementById('meals').value;
  const bp = document.getElementById('bp').value;
  const activity = document.getElementById('activity').value;
  const mood = document.getElementById('mood').value;

  let issues = [], dos = [], donts = [];

  if (sleep < 6) {
    issues.push('Not enough sleep');
    dos.push('Aim for 7–8 hours');
    donts.push('Avoid late-night scrolling');
  }
  if (water < 6) {
    issues.push('Low hydration');
    dos.push('Drink at least 8 cups of water');
    donts.push('Avoid sugary drinks');
  }
  if (meals < 2) {
    issues.push('Poor eating habits');
    dos.push('Eat 3 full meals');
    donts.push('Don’t skip breakfast');
  }
  if (activity === 'No') {
    issues.push('Inactive lifestyle');
    dos.push('Do 15 min walk/stretch');
    donts.push('Avoid long sitting hours');
  }
  if (['Sad', 'Stressed'].includes(mood)) {
    issues.push('Stress or low mood');
    dos.push('Practice deep breathing');
    donts.push('Avoid bottling feelings');
  }
  if (bp) {
    try {
      const [s, d] = bp.split('/').map(Number);
      if (s > 140 || d > 90) {
        issues.push('High blood pressure');
        dos.push('Lower sodium & exercise');
        donts.push('Avoid caffeine and stress');
      }
    } catch {
      issues.push('⚠️ Invalid BP format');
    }
  }

  document.getElementById('resultsBox').innerHTML = `
    <h3>🩺 Issues:</h3><p>${issues.join('<br>')}</p>
    <h3>✔️ Do's:</h3><p>${dos.join('<br>')}</p>
    <h3>❌ Don'ts:</h3><p>${donts.join('<br>')}</p>
  `;
}