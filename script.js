const speciesData = {
  'blue-whale': { name: 'Blue Whale', scientific: 'Balaenoptera musculus', meta: 'Global Oceans · Up to 30m', status: 'Endangered', statusColor: '#f08030', image: 'blue-whale.png' },
  'seahorse': { name: 'Seahorse', scientific: 'Hippocampus kuda', meta: 'Indo-Pacific · Up to 17cm', status: 'Vulnerable', statusColor: '#f0d050', image: 'seahorse.png' },
  'hawksbill-sea-turtle': { name: 'Hawksbill Sea Turtle', scientific: 'Eretmochelys imbricata', meta: 'Tropical Oceans · Up to 1m', status: 'Critically Endangered', statusColor: '#e03030', image: 'hawksbill-sea-turtle.png' },
  'manta-ray': { name: 'Manta Ray', scientific: 'Mobula birostris', meta: 'Tropical & Subtropical · Up to 7m', status: 'Vulnerable', statusColor: '#f0d050', image: 'manta-ray.png' },
  'staghorn-coral': { name: 'Staghorn Coral', scientific: 'Acropora cervicornis', meta: 'Caribbean & Atlantic · Up to 2m', status: 'Critically Endangered', statusColor: '#e03030', image: 'staghorn-coral.png' },
  'narwhal': { name: 'Narwhal', scientific: 'Monodon monoceros', meta: 'Arctic Ocean · Up to 5.5m', status: 'Near Threatened', statusColor: '#78b84a', image: 'narwhal.png' }
};

const threatInfo = {
  'chemical spill': {
    'blue-whale': 'Chemical pollutants bioaccumulate in whale blubber and organs, causing reproductive failure, immune suppression, and hormonal disruption. At high intensity over {years} years, population recovery becomes increasingly unlikely without full cessation of chemical discharge.',
    'seahorse': 'Seahorses absorb toxins through their thin skin and gill membranes. Chemical spills destroy seagrass habitats they rely on for camouflage and breeding, leading to rapid colony collapse within {years} years.',
    'hawksbill-sea-turtle': 'Turtles mistake chemical foam for jellyfish and ingest neurotoxins. Chemical exposure impairs navigation via magnetic field disruption, reducing nesting success by up to {pct}% over {years} years.',
    'manta-ray': 'Mantas filter up to 2,000 litres of water per hour through gill plates. Chemical contamination causes severe gill damage and plankton die-offs, collapsing their food source over {years} years.',
    'staghorn-coral': 'Chemical runoff causes bleaching by disrupting symbiotic zooxanthellae algae. At this intensity, {pct}% of staghorn colonies show irreversible tissue necrosis within {years} years.',
    'narwhal': 'Arctic chemical persistence is extreme — pollutants freeze into sea ice and re-release during melt. Narwhal blubber concentrates organochlorines, impairing calf development over {years} years.'
  },
  'oil spill': {
    'blue-whale': 'Oil coats baleen plates preventing filter feeding. Inhaled vapours cause lung lesions and neurological damage. A spill of this intensity could reduce feeding efficiency by {pct}% over {years} years.',
    'seahorse': 'Oil smothers seagrass beds critical for seahorse reproduction. Males carrying eggs suffer respiratory distress from surface oil. Colony recovery takes 3–5x longer than the spill duration.',
    'hawksbill-sea-turtle': 'Turtles surface to breathe through oil slicks, coating lungs and eyes. Oil ingestion causes intestinal blockages. Nesting beaches become toxic, reducing hatchling survival by {pct}% over {years} years.',
    'manta-ray': 'Oil particles clog gill rakers used for plankton filtration. Surface feeding behaviour brings mantas directly into contact with oil slicks. Feeding rates drop by {pct}% at this contamination level.',
    'staghorn-coral': 'Oil blocks sunlight and depletes oxygen in reef zones. Combined with heat stress, oil exposure over {years} years causes {pct}% mortality in staghorn colonies. Recovery requires decades.',
    'narwhal': 'Arctic oil spills persist for years due to cold temperatures slowing biodegradation. Narwhals surface through leads in ice and inhale oil vapours, causing chronic respiratory illness over {years} years.'
  },
  'sonar': {
    'blue-whale': 'Military sonar at this intensity causes acoustic trauma, disorientation and beaching. Blue whale communication songs are disrupted across thousands of kilometres, fragmenting social groups over {years} years.',
    'seahorse': 'Seahorses use acoustic cues for pair bonding and predator detection. Chronic sonar exposure causes stress hormone surges, reducing reproductive rates by up to {pct}% over {years} years.',
    'hawksbill-sea-turtle': 'Turtles navigate using geomagnetic fields which sonar can temporarily disrupt. Disorientation leads to offshore stranding and missed nesting sites. Effects compound over {years} years of exposure.',
    'manta-ray': 'Mantas exhibit strong avoidance responses to sonar, abandoning feeding grounds and cleaning stations. Displacement from core habitat reduces caloric intake by {pct}% over {years} years.',
    'staghorn-coral': 'Coral polyps show limited direct response to sonar, but the vibrations stress symbiotic algae and increase bleaching susceptibility. Indirect food web disruption worsens over {years} years.',
    'narwhal': 'Narwhals are among the most sonar-sensitive cetaceans. Even moderate exposure causes panic responses, erratic diving behaviour and cardiac stress. At this intensity, chronic trauma develops over {years} years.'
  },
  'global warming': {
    'blue-whale': 'Warming shifts krill distributions poleward, forcing blue whales into energetically costly migrations. Prey availability drops by {pct}% in traditional feeding grounds over {years} years at this rate.',
    'seahorse': 'Seagrass meadows die back in warming waters, eliminating seahorse habitat. Temperature stress also disrupts male pregnancy success rates. Population viability declines sharply after {years} years.',
    'hawksbill-sea-turtle': 'Rising sand temperatures skew hatchling sex ratios toward females, threatening future reproduction. Coral bleaching destroys sponge food sources. Collapse scenarios increase {pct}% over {years} years.',
    'manta-ray': 'Warming acidifies oceans, reducing plankton abundance by up to {pct}% in affected zones over {years} years. Manta cleaning stations on coral reefs are lost as bleaching progresses.',
    'staghorn-coral': 'Staghorn coral is critically sensitive to thermal stress — bleaching begins just 1°C above average. At this intensity, {pct}% of colonies experience annual bleaching events by year {years}.',
    'narwhal': 'Sea ice loss removes narwhal winter refuge and migration corridors. Open water exposes them to shipping and predation. Suitable habitat shrinks by {pct}% within {years} years at this warming rate.'
  },
  'plastic': {
    'blue-whale': 'Microplastics accumulate in whale digestive tracts, causing false satiation and starvation. Plastic ingestion also introduces hormone-disrupting chemicals. Impacts compound significantly over {years} years.',
    'seahorse': 'Seahorses mistake microplastic particles for food. Ingested plastics cause gut blockages and starvation. Plastic debris also entangles their prehensile tails, preventing feeding over {years} years.',
    'hawksbill-sea-turtle': 'Turtles are highly vulnerable to plastic ingestion, mistaking bags for jellyfish. Gut impaction and internal perforation cause {pct}% mortality increase over {years} years of exposure.',
    'manta-ray': 'Mantas inadvertently filter microplastics alongside plankton. Studies show up to 63 plastic pieces per hour entering manta digestive systems in polluted areas over {years} years.',
    'staghorn-coral': 'Plastic debris smothers coral polyps and promotes bacterial growth causing disease. Microplastics reduce coral feeding efficiency and increase bleaching susceptibility by {pct}% over {years} years.',
    'narwhal': 'Arctic plastic accumulation is increasing due to ocean circulation patterns. Narwhals ingest plastic-contaminated prey, leading to chemical toxin buildup in blubber reserves over {years} years.'
  },
  'overfishing': {
    'blue-whale': 'Industrial fishing depletes krill — the blue whale\'s primary food source. Trawling bycatch also directly kills whales. At this level, prey biomass declines by {pct}% within {years} years.',
    'seahorse': 'Seahorses are caught as bycatch and harvested for traditional medicine. At this intensity, targeted populations face {pct}% reduction within {years} years, with no effective recovery mechanism.',
    'hawksbill-sea-turtle': 'Longline fishing causes significant turtle bycatch. Sponge overharvesting also destroys their food supply. Nesting population numbers could drop by {pct}% within {years} years at this rate.',
    'manta-ray': 'Manta rays are harvested for gill plates used in traditional medicine. At this intensity, local populations decline by {pct}% within {years} years. Their slow reproduction rate makes recovery extremely difficult.',
    'staghorn-coral': 'Overfishing removes herbivorous fish that control algae growth on reefs. Algal overgrowth smothers staghorn colonies. At this intensity, {pct}% of reef area loses coral coverage over {years} years.',
    'narwhal': 'Narwhal hunting combined with prey fish depletion creates compounding stress. At this intensity, pod sizes shrink by {pct}% over {years} years, weakening social structures essential for survival.'
  }
};

let selectedSpecies = '';

function toggleDropdown() {
  document.getElementById('dropdownSelected').classList.toggle('open');
  document.getElementById('dropdownList').classList.toggle('open');
}

function selectSpecies(el, value) {
  document.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
  el.classList.add('selected');
  selectedSpecies = value;
  document.getElementById('dropdownLabel').textContent = el.textContent;
  document.getElementById('dropdownSelected').classList.remove('open');
  document.getElementById('dropdownList').classList.remove('open');

  const data = speciesData[value];
  document.getElementById('speciesName').textContent = data.name;
  document.getElementById('speciesScientific').textContent = data.scientific;
  document.getElementById('speciesMeta').textContent = data.meta;
  document.getElementById('speciesInfoBar').classList.add('visible');

  const badge = document.getElementById('statusBadge');
  badge.textContent = data.status;
  badge.style.background = data.statusColor;
  badge.classList.add('visible');

  document.getElementById('speciesImage').src = data.image;
  document.getElementById('animalAndStats').classList.add('visible');
  document.getElementById('resultsBar').classList.remove('visible');
}

document.addEventListener('click', function(e) {
  const wrapper = document.querySelector('.dropdown-wrapper');
  if (!wrapper.contains(e.target)) {
    document.getElementById('dropdownSelected').classList.remove('open');
    document.getElementById('dropdownList').classList.remove('open');
  }
});

function updateSlider(input) {
  const pct = ((input.value - input.min) / (input.max - input.min)) * 100;
  input.style.background = `linear-gradient(to right, #60C8E0 0%, #1898B8 ${pct}%, #C8E8F4 ${pct}%, #C8E8F4 100%)`;
}

function updateRedSliders() {
  if (document.querySelectorAll('.threat-btn.active').length === 0) return;
  const intensity = parseFloat(document.getElementById('slider-intensity').value);
  const timeline = parseFloat(document.getElementById('slider-timeline').value);
  const impact = Math.min(100, (intensity * 0.6) + (timeline / 10 * 100 * 0.4));
  document.getElementById('popHealthFill').style.width = Math.max(0, 100 - impact) + '%';
  document.getElementById('mortalityFill').style.width = Math.min(100, impact) + '%';
}

document.querySelectorAll('input[type=range]').forEach(s => {
  updateSlider(s);
  s.addEventListener('input', () => { updateSlider(s); updateRedSliders(); });
});

function toggleThreat(btn) {
  btn.classList.toggle('active');
  const active = document.querySelectorAll('.threat-btn.active').length;
  if (active > 0) {
    const label = btn.querySelector('span').textContent.toLowerCase().trim();
    if (btn.classList.contains('active') && label === 'plastic') spawnPlastic();
    if (btn.classList.contains('active') && label === 'sonar') spawnSonar();
    if (btn.classList.contains('active') && label === 'overfishing') spawnNet();
    if (btn.classList.contains('active') && label === 'global warming') spawnWarming();
    if (btn.classList.contains('active') && label === 'chemical spill') spawnChemical();
    if (btn.classList.contains('active') && label === 'oil spill') spawnOil();
    document.getElementById('popHealthBox').classList.add('visible');
    document.getElementById('mortalityBox').classList.add('visible');
    document.getElementById('speciesImageWrapper').classList.add('shifted');
    updateRedSliders();
  } else {
    document.getElementById('popHealthBox').classList.remove('visible');
    document.getElementById('mortalityBox').classList.remove('visible');
    document.getElementById('speciesImageWrapper').classList.remove('shifted');
  }
}

function runSimulator() {
  if (!selectedSpecies) { alert('Please select a marine species first!'); return; }
  const threats = [...document.querySelectorAll('.threat-btn.active')].map(b => b.querySelector('span').textContent);
  if (threats.length === 0) { alert('Please select at least one threat!'); return; }

  const intensity = parseFloat(document.getElementById('slider-intensity').value);
  const timeline = parseFloat(document.getElementById('slider-timeline').value);
  const impact = Math.min(100, (intensity * 0.6) + (timeline / 10 * 100 * 0.4));
  const popHealth = Math.max(0, Math.round(100 - impact));
  const mortality = Math.min(100, Math.round(impact));
  const pct = Math.round(impact * 0.8);
  const years = Math.round(timeline) || 1;

  let html = '';
  threats.forEach((threat, i) => {
    const key = threat.toLowerCase().trim();
    let text = (threatInfo[key] && threatInfo[key][selectedSpecies])
      ? threatInfo[key][selectedSpecies]
      : `At intensity ${Math.round(intensity)}% over ${years} years, ${threat} poses significant risk to this species through habitat degradation and direct physiological harm.`;
    text = text.replace(/{pct}/g, pct).replace(/{years}/g, years);
    html += `<div class="threat-result"><div class="threat-result-title">${threat}</div><div class="threat-result-text">${text}</div></div>`;
    if (i < threats.length - 1) html += '<div class="threat-divider"></div>';
  });

  html += `<div class="threat-divider"></div>
  <div class="summary-box">
    <div class="threat-result-text">
      <strong style="color:#60C8E0">Overall Outlook:</strong> With ${threats.length} active threat${threats.length > 1 ? 's' : ''} at ${Math.round(intensity)}% intensity over ${years} year${years > 1 ? 's' : ''}, population health is projected at <strong style="color:#f05050">${popHealth}%</strong> with a mortality rate of <strong style="color:#f05050">${mortality}%</strong>. ${mortality >= 70 ? 'Immediate conservation intervention is critical.' : mortality >= 40 ? 'Significant conservation action is urgently needed.' : 'Continued monitoring and protective measures are recommended.'}
    </div>
  </div>`;

  document.getElementById('resultsContent').innerHTML = html;
  document.getElementById('resultsBar').classList.add('visible');
  setTimeout(() => {
    const panel = document.getElementById('speciesPanel');
    panel.scrollTo({ top: panel.scrollHeight + 1000, behavior: 'smooth' });
  }, 400);
}
function spawnPlastic() {
  const images = ['plastic1.png', 'plastic2.png', 'plastic3.png'];
  const panel = document.getElementById('speciesPanel');
  const panelWidth = panel.offsetWidth;

  for (let i = 0; i < 28; i++) {
    const piece = document.createElement('div');
    piece.classList.add('plastic-piece');
    const size = 35 + Math.random() * 70;
    piece.style.width = size + 'px';
    piece.style.height = size + 'px';
    piece.style.left = (Math.random() * (panelWidth - size)) + 'px';
    piece.style.top = '-80px';
    piece.style.backgroundImage = `url('${images[Math.floor(Math.random() * images.length)]}')`;
    piece.style.animationDuration = (3 + Math.random() * 4) + 's';
    piece.style.animationDelay = (Math.random() * 2.5) + 's';
    panel.appendChild(piece);
    piece.addEventListener('animationend', () => piece.remove());
  }
}

function spawnSonar() {
  const panel = document.getElementById('speciesPanel');
  const centerX = panel.offsetWidth / 2;
  const centerY = panel.offsetHeight / 2;

  for (let i = 0; i < 6; i++) {
    const wave = document.createElement('div');
    wave.classList.add('sonar-wave');
    wave.style.width = '80px';
    wave.style.height = '80px';
    wave.style.left = centerX + 'px';
    wave.style.top = centerY + 'px';
    wave.style.animationDelay = (i * 0.4) + 's';
    panel.appendChild(wave);
    wave.addEventListener('animationend', () => wave.remove());
  }
}

function spawnNet() {
  const panel = document.getElementById('speciesPanel');
  const net = document.createElement('div');
  net.classList.add('net-piece');
  panel.appendChild(net);
  net.addEventListener('animationend', () => net.remove());
}

function spawnWarming() {
  const panel = document.getElementById('speciesPanel');
  const overlay = document.createElement('div');
  overlay.classList.add('warming-overlay');
  panel.appendChild(overlay);
  overlay.addEventListener('animationend', () => overlay.remove());
}

function spawnOil() {
  const panel = document.getElementById('speciesPanel');
  const slick = document.createElement('div');
  slick.classList.add('oil-slick');
  panel.appendChild(slick);
  slick.addEventListener('animationend', () => slick.remove());
}

function spawnChemical() {
  const panel = document.getElementById('speciesPanel');
  for (let i = 0; i < 30; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('chem-bubble');
    const size = 10 + Math.random() * 40;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = (Math.random() * 98) + '%';
    bubble.style.top = '-50px';
    bubble.style.animationDuration = (3 + Math.random() * 4) + 's';
    bubble.style.animationDelay = (Math.random() * 3) + 's';
    panel.appendChild(bubble);
    bubble.addEventListener('animationend', () => bubble.remove());
  }
}

// =============================================
// LOGIN PAGE CODE — only runs if login elements exist
// =============================================
if (document.getElementById('loginForm')) {

window.handleLogin = function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  let valid = true;

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

  // Send to backend login.php
  fetch('login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(r => r.json())
  .then(data => {
    if (data.success) {
      sessionStorage.setItem('oceansim_user', data.username);
      window.location.href = 'simulator.html';
    } else if (data.locked) {
      document.getElementById('lockNotice').classList.add('show');
      document.getElementById('globalError').classList.remove('show');
    } else {
      showError(data.message || 'Login failed');
    }
  })
  .catch(() => {
    showError('Could not connect to server');
  });
};

window.showError = function(msg) {
  const el = document.getElementById('globalError');
  el.textContent = msg;
  el.classList.add('show');
};

window.showResetModal = function() {
  document.getElementById('resetModal').classList.add('show');
};

window.closeResetModal = function() {
  document.getElementById('resetModal').classList.remove('show');
};

window.handleReset = function() {
  const u = document.getElementById('resetUsername').value.trim();
  if (!u) return;
  closeResetModal();
  showError('Password reset link sent! Check your inbox.');
};

const params = new URLSearchParams(window.location.search);
if (params.get('logout') === '1') {
  sessionStorage.removeItem('oceansim_user');
}

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

} // end loginForm guard

// =============================================
// REGISTER PAGE CODE — only runs if register elements exist
// =============================================
if (document.getElementById('registerForm')) {

const existingUsers = ['testuser', 'admin'];

window.checkStrength = function() {
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
};

window.handleRegister = function(e) {
  e.preventDefault();
  let valid = true;
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirmPassword').value;
  clearAll();

  if (!username) { setError('username', 'usernameError', 'Username is required'); valid = false; }
  else if (username.length < 3) { setError('username', 'usernameError', 'Username must be at least 3 characters'); valid = false; }
  else { document.getElementById('username').classList.add('success'); }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) { setError('email', 'emailError', 'Email is required'); valid = false; }
  else if (!emailRegex.test(email)) { setError('email', 'emailError', 'Please enter a valid email address'); valid = false; }
  else { document.getElementById('email').classList.add('success'); }

  if (!password) { setError('password', 'passwordError', 'Password is required'); valid = false; }
  else if (password.length < 8) { setError('password', 'passwordError', 'Password must be at least 8 characters'); valid = false; }
  else { document.getElementById('password').classList.add('success'); }

  if (!confirm) { setError('confirmPassword', 'confirmError', 'Please confirm your password'); valid = false; }
  else if (confirm !== password) { setError('confirmPassword', 'confirmError', 'Passwords do not match'); valid = false; }
  else { document.getElementById('confirmPassword').classList.add('success'); }

  if (!valid) return;

  // Send to backend register.php
  fetch('register.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  })
  .then(r => r.json())
  .then(data => {
    if (data.success) {
      document.getElementById('formState').style.display = 'none';
      document.getElementById('successState').classList.add('show');
    } else {
      // Show server-side error
      const el = document.getElementById('globalError');
      el.textContent = data.message || 'Registration failed';
      el.classList.add('show');
    }
  })
  .catch(() => {
    const el = document.getElementById('globalError');
    el.textContent = 'Could not connect to server';
    el.classList.add('show');
  });
};

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

} // end registerForm guard

// =============================================
// AUTH NAV LINK — update Login/Logout on simulator page
// =============================================
if (document.getElementById('authLink')) {
  fetch('check_session.php')
    .then(r => r.json())
    .then(data => {
      const authLink = document.getElementById('authLink');
      if (data.loggedIn) {
        authLink.textContent = 'Logout';
        authLink.href = 'logout.php';
      }
    })
    .catch(() => {});
}

// =============================================
// TAB SWITCHING — Simulator vs Ocean Doctor Game
// =============================================
function switchSimTab(tab) {
  const simSection = document.getElementById('simulatorSection');
  const gameSection = document.getElementById('gameSection');
  const tabSim = document.getElementById('tabSimulator');
  const tabGame = document.getElementById('tabGame');
  if (!simSection || !gameSection) return;

  if (tab === 'simulator') {
    simSection.style.display = 'block';
    gameSection.style.display = 'none';
    tabSim.classList.add('active');
    tabGame.classList.remove('active');
  } else {
    simSection.style.display = 'none';
    gameSection.style.display = 'block';
    tabSim.classList.remove('active');
    tabGame.classList.add('active');
    initGameSection();
  }
}

// =============================================
// OCEAN DOCTOR GAME — Canvas-based mini game
// =============================================
let oceanGameInitialized = false;

function initGameSection() {
  if (oceanGameInitialized) return;
  oceanGameInitialized = true;

  // Check if user is logged in
  fetch('check_session.php')
    .then(r => r.json())
    .then(data => {
      if (data.loggedIn) {
        document.getElementById('gameArea').style.display = 'block';
        document.getElementById('gameLoginMsg').style.display = 'none';
      } else {
        document.getElementById('gameArea').style.display = 'none';
        document.getElementById('gameLoginMsg').style.display = 'flex';
      }
    })
    .catch(() => {
      document.getElementById('gameArea').style.display = 'none';
      document.getElementById('gameLoginMsg').style.display = 'flex';
    });
}

// Game state variables
let gameCanvas, gameCtx;
let gameRunning = false;
let gameScore = 0;
let gameLives = 3;
let gameLevel = 1;
let gameItems = [];
let gameAnimFrame = null;
let gameBubbles = [];
let gameSpawnTimer = 0;
let gameLevelTimer = 0;

// Item types: trash (collectible) and marine life (avoid)
const trashTypes = [
  { emoji: '🥤', name: 'cup',    points: 10 },
  { emoji: '🛍️', name: 'bag',    points: 10 },
  { emoji: '🥫', name: 'can',    points: 15 },
  { emoji: '🔋', name: 'battery',points: 20 },
  { emoji: '👟', name: 'shoe',   points: 10 },
  { emoji: '📦', name: 'box',    points: 15 }
];
const marineTypes = [
  { emoji: '🐟', name: 'fish' },
  { emoji: '🐠', name: 'tropical fish' },
  { emoji: '🐢', name: 'turtle' },
  { emoji: '🐙', name: 'octopus' },
  { emoji: '🦀', name: 'crab' },
  { emoji: '🐬', name: 'dolphin' }
];

function startGame() {
  gameCanvas = document.getElementById('gameCanvas');
  if (!gameCanvas) return;
  gameCtx = gameCanvas.getContext('2d');

  // Reset state
  gameScore = 0;
  gameLives = 3;
  gameLevel = 1;
  gameItems = [];
  gameBubbles = [];
  gameSpawnTimer = 0;
  gameLevelTimer = 0;
  gameRunning = true;

  // Update HUD
  updateHUD();

  // Hide overlays
  document.getElementById('gameStartOverlay').style.display = 'none';
  document.getElementById('gameOverOverlay').style.display = 'none';

  // Start game loop
  if (gameAnimFrame) cancelAnimationFrame(gameAnimFrame);
  lastTime = performance.now();
  gameLoop(lastTime);
}

let lastTime = 0;

function gameLoop(timestamp) {
  if (!gameRunning) return;

  const dt = Math.min((timestamp - lastTime) / 1000, 0.05); // delta in seconds, capped
  lastTime = timestamp;

  // Spawn items
  gameSpawnTimer += dt;
  const spawnRate = Math.max(0.4, 1.2 - (gameLevel * 0.08));
  if (gameSpawnTimer >= spawnRate) {
    gameSpawnTimer = 0;
    spawnItem();
  }

  // Level up every 15 seconds
  gameLevelTimer += dt;
  if (gameLevelTimer >= 15) {
    gameLevelTimer = 0;
    gameLevel++;
    document.getElementById('gameLevel').textContent = gameLevel;
  }

  // Spawn background bubbles
  if (Math.random() < 0.03) {
    gameBubbles.push({
      x: Math.random() * gameCanvas.width,
      y: gameCanvas.height + 10,
      r: 2 + Math.random() * 6,
      speed: 20 + Math.random() * 40,
      opacity: 0.1 + Math.random() * 0.3
    });
  }

  // Update
  updateItems(dt);
  updateBubbles(dt);

  // Draw
  drawGame();

  gameAnimFrame = requestAnimationFrame(gameLoop);
}

function spawnItem() {
  const isTrash = Math.random() < 0.65; // 65% trash, 35% marine life
  const x = 30 + Math.random() * (gameCanvas.width - 60);
  const speed = (40 + Math.random() * 30) + (gameLevel * 15);
  const size = 32 + Math.random() * 16;

  if (isTrash) {
    const type = trashTypes[Math.floor(Math.random() * trashTypes.length)];
    gameItems.push({ x, y: -size, size, speed, type: 'trash', emoji: type.emoji, points: type.points, wobble: Math.random() * Math.PI * 2 });
  } else {
    const type = marineTypes[Math.floor(Math.random() * marineTypes.length)];
    gameItems.push({ x, y: -size, size, speed: speed * 0.8, type: 'marine', emoji: type.emoji, wobble: Math.random() * Math.PI * 2 });
  }
}

function updateItems(dt) {
  for (let i = gameItems.length - 1; i >= 0; i--) {
    const item = gameItems[i];
    item.y += item.speed * dt;
    item.wobble += dt * 2;
    item.x += Math.sin(item.wobble) * 0.5;

    // Remove if off screen
    if (item.y > gameCanvas.height + 50) {
      if (item.type === 'trash') {
        gameScore = Math.max(0, gameScore - 2);
        updateHUD();
      }
      gameItems.splice(i, 1);
    }
  }
}

function updateBubbles(dt) {
  for (let i = gameBubbles.length - 1; i >= 0; i--) {
    gameBubbles[i].y -= gameBubbles[i].speed * dt;
    gameBubbles[i].x += Math.sin(gameBubbles[i].y * 0.02) * 0.3;
    if (gameBubbles[i].y < -20) gameBubbles.splice(i, 1);
  }
}

function drawGame() {
  const ctx = gameCtx;
  const w = gameCanvas.width;
  const h = gameCanvas.height;

  // Ocean gradient background
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#0a4868');
  grad.addColorStop(0.3, '#0c5a7a');
  grad.addColorStop(0.7, '#084060');
  grad.addColorStop(1, '#062a40');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Light rays
  ctx.save();
  ctx.globalAlpha = 0.04;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    const rx = w * 0.15 + i * w * 0.18;
    ctx.moveTo(rx - 20, 0);
    ctx.lineTo(rx + 40, h);
    ctx.lineTo(rx - 40, h);
    ctx.closePath();
    ctx.fillStyle = '#60C8E0';
    ctx.fill();
  }
  ctx.restore();

  // Bubbles
  gameBubbles.forEach(b => {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(96,200,224,${b.opacity})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Items
  gameItems.forEach(item => {
    ctx.font = `${item.size}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(item.emoji, item.x, item.y);
  });
}

function updateHUD() {
  document.getElementById('gameScore').textContent = gameScore;
  const heartsStr = '❤️'.repeat(Math.max(0, gameLives)) + '🖤'.repeat(Math.max(0, 3 - gameLives));
  document.getElementById('gameLives').textContent = heartsStr;
  document.getElementById('gameLevel').textContent = gameLevel;
}

function endGame() {
  gameRunning = false;
  if (gameAnimFrame) cancelAnimationFrame(gameAnimFrame);

  document.getElementById('finalScore').textContent = gameScore;
  document.getElementById('gameOverOverlay').style.display = 'flex';
  document.getElementById('newAchievements').innerHTML = '';
  document.getElementById('submitStatus').textContent = 'Submitting score...';

  // Submit score to backend
  fetch('submit_score.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ score: gameScore })
  })
  .then(r => r.json())
  .then(data => {
    if (data.success) {
      document.getElementById('submitStatus').textContent = '✅ Score saved!';
      // Show new achievements
      if (data.newAchievements && data.newAchievements.length > 0) {
        let achHtml = '<div class="game-achieve-title">🏅 New Achievements Unlocked!</div>';
        data.newAchievements.forEach(a => {
          achHtml += `<div class="game-achieve-item">${a.name}: ${a.desc}</div>`;
        });
        document.getElementById('newAchievements').innerHTML = achHtml;
      }
    } else {
      document.getElementById('submitStatus').textContent = '⚠️ ' + (data.message || 'Failed to save score');
    }
  })
  .catch(() => {
    document.getElementById('submitStatus').textContent = '⚠️ Could not connect to server';
  });
}

// Canvas click handler for game
if (document.getElementById('gameCanvas')) {
  document.getElementById('gameCanvas').addEventListener('click', function(e) {
    if (!gameRunning) return;

    const rect = gameCanvas.getBoundingClientRect();
    const scaleX = gameCanvas.width / rect.width;
    const scaleY = gameCanvas.height / rect.height;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;

    // Check hits (reverse order so topmost items checked first)
    for (let i = gameItems.length - 1; i >= 0; i--) {
      const item = gameItems[i];
      const dist = Math.sqrt((clickX - item.x) ** 2 + (clickY - item.y) ** 2);
      if (dist < item.size * 0.7) {
        if (item.type === 'trash') {
          // Collected trash!
          gameScore += item.points;
          gameItems.splice(i, 1);
          updateHUD();
        } else {
          // Hit marine life — lose a life
          gameLives--;
          gameItems.splice(i, 1);
          updateHUD();
          if (gameLives <= 0) {
            endGame();
          }
        }
        return; // Only hit one item per click
      }
    }
  });
}