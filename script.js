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
  const selected = document.getElementById('dropdownSelected');
  const list = document.getElementById('dropdownList');
  if (!wrapper || !selected || !list) return;
  if (!wrapper.contains(e.target)) {
    selected.classList.remove('open');
    list.classList.remove('open');
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

if (document.querySelector('.slider-wrap')) {
  document.querySelectorAll('input[type=range]').forEach(s => {
    updateSlider(s);
    s.addEventListener('input', () => { updateSlider(s); updateRedSliders(); });
  });
}
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

const logoutBtn = document.getElementById('logoutBtn');
if (sessionStorage.getItem('oceansim_user') && logoutBtn) {
  logoutBtn.style.display = 'inline';
}