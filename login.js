// TC_LOGIN_07: track failed attempts
let failedAttempts = 0;
const MAX_ATTEMPTS = 5;
let isLocked = false;

// In production replace this with a fetch() call to login.php
// which checks against MySQL users table
const mockUsers = [
  { username: 'testuser', password: 'password123' },
  { username: 'admin', password: 'admin123' },
  ...JSON.parse(sessionStorage.getItem('registeredUsers') || '[]')
];

function handleLogin(e) {
  e.preventDefault();

  // TC_LOGIN_07: check if account is locked
  if (isLocked) {
    document.getElementById('lockNotice').classList.add('show');
    return;
  }

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  let valid = true;

  // TC_LOGIN_04: empty field validation
  if (!username) {
    document.getElementById('usernameError').classList.add('show');
    document.getElementById('username').classList.add('error');
    valid = false;
  } else {
    document.getElementById('usernameError').classList.remove('show');
    document.getElementById('username').classList.remove('error');
  }

  if (!password) {
    document.getElementById('passwordError').classList.add('show');
    document.getElementById('password').classList.add('error');
    valid = false;
  } else {
    document.getElementById('passwordError').classList.remove('show');
    document.getElementById('password').classList.remove('error');
  }

  if (!valid) return;

  // TC_LOGIN_05: username case-insensitive, password case-sensitive
  const user = mockUsers.find(u => u.username.toLowerCase() === username.toLowerCase());

  if (!user) {
    // TC_LOGIN_03: non-registered user
    showError('Error: User not found. Please register first.');
    failedAttempts++;
  } else if (user.password !== password) {
    // TC_LOGIN_02: invalid password
    failedAttempts++;
    if (failedAttempts >= MAX_ATTEMPTS) {
      // TC_LOGIN_07: lock account
      isLocked = true;
      document.getElementById('lockNotice').classList.add('show');
      document.getElementById('globalError').classList.remove('show');
    } else {
      showError(`Error: Invalid credentials. ${MAX_ATTEMPTS - failedAttempts} attempt${MAX_ATTEMPTS - failedAttempts !== 1 ? 's' : ''} remaining.`);
    }
  } else {
    // TC_LOGIN_01: valid login — TC_LOGIN_09: store session
    failedAttempts = 0;
    sessionStorage.setItem('oceansim_user', username);
    window.location.href = 'index.html';
  }
}

function showError(msg) {
  const el = document.getElementById('globalError');
  el.textContent = msg;
  el.classList.add('show');
}

// TC_LOGIN_08: forgot password modal
function showResetModal() {
  document.getElementById('resetModal').classList.add('show');
}

function closeResetModal() {
  document.getElementById('resetModal').classList.remove('show');
}

function handleReset() {
  const u = document.getElementById('resetUsername').value.trim();
  if (!u) return;
  closeResetModal();
  showError('Password reset link sent! Check your inbox.');
}

// TC_LOGIN_10: logout — clear session if redirected from logout
const params = new URLSearchParams(window.location.search);
if (params.get('logout') === '1') {
  sessionStorage.removeItem('oceansim_user');
}

// Clear errors on input
document.getElementById('username').addEventListener('input', () => {
  document.getElementById('usernameError').classList.remove('show');
  document.getElementById('username').classList.remove('error');
  document.getElementById('globalError').classList.remove('show');
});
document.getElementById('password').addEventListener('input', () => {
  document.getElementById('passwordError').classList.remove('show');
  document.getElementById('password').classList.remove('error');
  document.getElementById('globalError').classList.remove('show');
});

