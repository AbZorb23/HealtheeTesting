function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function login() {
  showPage('mainPage');
}

function register() {
  let pass = document.getElementById('registerPassword').value;
  let confirm = document.getElementById('registerConfirm').value;
  if (pass === confirm) showPage('loginPage');
  else alert('Passwords do not match');
}

function submitData() {
  showPage('loadingPage');
  setTimeout(() => {
    document.getElementById('resultContent').innerHTML = "<h3>Do's:</h3><ul><li>Drink more water</li><li>Exercise daily</li></ul><h3>Don'ts:</h3><ul><li>Avoid junk food</li><li>Don't skip sleep</li></ul>";
    showPage('resultPage');
  }, 2000);
}

function downloadVideo() {
  const a = document.createElement('a');
  a.href = 'stretching_damien_hakeem.mp4';
  a.download = 'stretching_damien_hakeem.mp4';
  a.click();
}

function updateSettings() {
  alert('Settings updated!');
}
