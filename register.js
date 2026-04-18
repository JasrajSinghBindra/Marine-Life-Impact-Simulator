// In production replace mockUsers with a fetch() call to register.php
// which inserts into MySQL users table
const existingUsers = ['testuser', 'admin'];

function checkStrength() {
  const password = document.getElementById('password').value;
  const bar = document.getElementById('strengthBar');
  const fill = document.getElementById('strengthFill');
  const label = document.getElementById('strengthLabel');

  if (!password) { bar.classList.remove('show'); return; }
  bar.classList.add('show');

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = [
    { width: '25%', color: '#e03030', text: 'Weak' },
    { width: '50%', color: '#f08030', text: 'Fair' },
    { width: '75%', color: '#f0d050', text: 'Good' },
    { width: '100%', color: '#48b848', text: 'Strong' },
  ];
  const l = levels[Math.max(0, score - 1)];
  fill.style.width = l.width;
  fill.style.background = l.color;
  label.textContent = l.text;
  label.style.color = l.color;
}

function handleRegister(e) {
  e.preventDefault();
  let valid = true;

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPassword').value;

  // Reset all
  clearAll();

  // Username
  if (!username) {
    setError('username', 'usernameError', 'Username is required');
    valid = false;
  } else if (username.length < 3) {
    setError('username', 'usernameError', 'Username must be at least 3 characters');
    valid = false;
  } else if (existingUsers.includes(username.toLowerCase())) {
    setError('username', 'usernameError', 'Username already taken');
    valid = false;
  } else {
    document.getElementById('username').classList.add('success');
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    setError('email', 'emailError', 'Email is required');
    valid = false;
  } else if (!emailRegex.test(email)) {
    setError('email', 'emailError', 'Please enter a valid email address');
    valid = false;
  } else {
    document.getElementById('email').classList.add('success');
  }

  // Password
  if (!password) {
    setError('password', 'passwordError', 'Password is required');
    valid = false;
  } else if (password.length < 8) {
    setError('password', 'passwordError', 'Password must be at least 8 characters');
    valid = false;
  } else {
    document.getElementById('password').classList.add('success');
  }

  // Confirm
  if (!confirm) {
    setError('confirmPassword', 'confirmError', 'Please confirm your password');
    valid = false;
  } else if (confirm !== password) {
    setError('confirmPassword', 'confirmError', 'Passwords do not match');
    valid = false;
  } else {
    document.getElementById('confirmPassword').classList.add('success');
  }

  if (!valid) return;

  // Success
  const registered = JSON.parse(sessionStorage.getItem('registeredUsers') || '[]');
    registered.push({ username, password });
    sessionStorage.setItem('registeredUsers', JSON.stringify(registered));
    sessionStorage.setItem('oceansim_user', username);
  document.getElementById('formState').style.display = 'none';
  document.getElementById('successState').classList.add('show');
}

function setError(inputId, errorId, msg) {
  document.getElementById(inputId).classList.add('error');
  const el = document.getElementById(errorId);
  el.textContent = msg;
  el.classList.add('show');
}

function clearAll() {
  ['username', 'email', 'password', 'confirmPassword'].forEach(id => {
    document.getElementById(id).classList.remove('error', 'success');
  });
  ['usernameError', 'emailError', 'passwordError', 'confirmError', 'globalError'].forEach(id => {
    document.getElementById(id).classList.remove('show');
  });
}