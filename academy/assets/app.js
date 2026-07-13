const series = window.ACADEMY_SERIES || [];

const mapData = [
  {title:'Foundations', group:'foundation', desc:'الهدف، السياق، العقود، ومستوى الاستقلالية المناسب.', flow:['Goal','Context','Contract','Autonomy']},
  {title:'Patterns & Planning', group:'intelligence', desc:'الاستدلال والتخطيط وإعادة التخطيط والتحسين.', flow:['Route','Plan','Execute','Reflect']},
  {title:'Memory & Context', group:'intelligence', desc:'اختيار السياق الصحيح وبناء ذاكرة آمنة متعددة الطبقات.', flow:['Select','Rank','Compress','Remember']},
  {title:'Tools, MCP & RAG', group:'intelligence', desc:'تعريض القدرات والوصول إلى الأدلة بصورة محكومة.', flow:['Discover','Authorize','Retrieve','Act']},
  {title:'Multi-Agent', group:'enterprise', desc:'التخصص والتفويض والتنسيق من خلال عقود واضحة.', flow:['Assign','Delegate','Review','Resolve']},
  {title:'Security', group:'enterprise', desc:'الهوية والسياسة والمخاطر والموافقة قبل الذكاء.', flow:['Identity','Policy','Risk','Approval']},
  {title:'Observability', group:'enterprise', desc:'رؤية كل قرار وأداة وتحول وإعادة تشغيل المسار.', flow:['Trace','Inspect','Evaluate','Replay']},
  {title:'Production Platform', group:'enterprise', desc:'Workers وBudgets وVersioning وSLOs والاعتمادية.', flow:['Queue','Run','Fallback','Measure']},
  {title:'Sky365', group:'sky365', desc:'التطبيق المؤسسي الحقيقي داخل ERP.', flow:['Workbench','Policy','Action Core','Evidence']}
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const map = $('#universeMap');
const detail = $('#universeDetail');
const grid = $('#seriesGrid');
const dialog = $('#infographicDialog');
const dialogContent = $('#dialogContent');
let currentItem = null;

function escapeXml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function groupLabel(group) {
  return {
    foundation: 'FOUNDATIONS',
    intelligence: 'AGENT INTELLIGENCE',
    enterprise: 'ENTERPRISE',
    sky365: 'SKY365'
  }[group] || group.toUpperCase();
}

function groupColor(group) {
  return {
    foundation: '#36e7d2',
    intelligence: '#5d8cff',
    enterprise: '#ae7cff',
    sky365: '#ffbd5b'
  }[group] || '#36e7d2';
}

function cardPreviewSvg(item) {
  const color = groupColor(item.group);
  const steps = item.steps.slice(0, 6);
  const gap = 320 / Math.max(steps.length - 1, 1);
  const nodes = steps.map((step, index) => {
    const x = 70 + index * gap;
    const active = index === 0 || index === steps.length - 1;
    return `
      <g transform="translate(${x} 112)">
        <circle r="${active ? 24 : 19}" fill="${active ? color : '#102338'}" stroke="${color}" stroke-width="2"/>
        <text y="5" text-anchor="middle" fill="${active ? '#06101d' : '#edf7ff'}" font-size="12" font-weight="800">${index + 1}</text>
        <text y="47" text-anchor="middle" fill="#91a9bd" font-size="11">${escapeXml(step.length > 12 ? step.slice(0, 11) + '…' : step)}</text>
      </g>`;
  }).join('');
  return `
  <svg viewBox="0 0 460 210" role="img" aria-label="${escapeXml(item.title)} preview">
    <defs>
      <linearGradient id="preview-${item.id}" x1="0" x2="1"><stop stop-color="${color}"/><stop offset="1" stop-color="#5d8cff"/></linearGradient>
      <filter id="glow-${item.id}"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="460" height="210" fill="#06101d"/>
    <g opacity=".34" stroke="#17364c"><path d="M0 35H460M0 70H460M0 105H460M0 140H460M0 175H460"/><path d="M46 0V210M92 0V210M138 0V210M184 0V210M230 0V210M276 0V210M322 0V210M368 0V210M414 0V210"/></g>
    <text x="22" y="27" fill="${color}" font-size="11" font-weight="900" letter-spacing="2">PART ${String(item.id).padStart(2,'0')}</text>
    <path d="M70 112H390" stroke="url(#preview-${item.id})" stroke-width="4" stroke-linecap="round" opacity=".55"/>
    ${nodes}
    <circle r="5" fill="${color}" filter="url(#glow-${item.id})">
      <animateMotion dur="${3.5 + item.id * .04}s" repeatCount="indefinite" path="M70 112H390"/>
    </circle>
  </svg>`;
}

function posterSvg(item) {
  const color = groupColor(item.group);
  const steps = item.steps;
  const isLong = steps.length > 7;
  const rows = isLong ? [steps.slice(0, Math.ceil(steps.length / 2)), steps.slice(Math.ceil(steps.length / 2))] : [steps];
  const rowY = rows.length === 2 ? [360, 560] : [455];

  const flowMarkup = rows.map((row, rowIndex) => {
    const available = 1400;
    const gap = available / Math.max(row.length - 1, 1);
    const y = rowY[rowIndex];
    const rail = row.length > 1 ? `<path d="M100 ${y}H1500" stroke="${color}" stroke-opacity=".35" stroke-width="8" stroke-linecap="round"/>` : '';
    const nodes = row.map((step, i) => {
      const x = row.length === 1 ? 800 : 100 + i * gap;
      return `
        <g transform="translate(${x} ${y})">
          <circle r="50" fill="#0b1828" stroke="${color}" stroke-width="4"/>
          <circle r="38" fill="${i === 0 || i === row.length - 1 ? color : '#102338'}" opacity=".98"/>
          <text y="7" text-anchor="middle" fill="${i === 0 || i === row.length - 1 ? '#06101d' : '#edf7ff'}" font-size="25" font-weight="900">${String(i + 1 + (rowIndex ? rows[0].length : 0)).padStart(2,'0')}</text>
          <rect x="-88" y="68" width="176" height="54" rx="18" fill="#0b1828" stroke="#31516b"/>
          <text y="101" text-anchor="middle" fill="#edf7ff" font-size="${step.length > 15 ? 18 : 21}" font-weight="700">${escapeXml(step)}</text>
        </g>`;
    }).join('');
    const dot = row.length > 1 ? `
      <circle r="10" fill="${color}" filter="url(#poster-glow-${item.id})">
        <animateMotion dur="${4.5 + rowIndex}s" repeatCount="indefinite" path="M100 ${y}H1500"/>
      </circle>` : '';
    return rail + nodes + dot;
  }).join('');

  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-labelledby="poster-title-${item.id} poster-desc-${item.id}">
    <title id="poster-title-${item.id}">${escapeXml(item.title)}</title>
    <desc id="poster-desc-${item.id}">${escapeXml(item.summary)}</desc>
    <defs>
      <radialGradient id="poster-bg-${item.id}" cx="50%" cy="38%" r="75%"><stop offset="0" stop-color="#12324a"/><stop offset="1" stop-color="#06101d"/></radialGradient>
      <linearGradient id="poster-grad-${item.id}" x1="0" x2="1"><stop stop-color="${color}"/><stop offset="1" stop-color="#5d8cff"/></linearGradient>
      <filter id="poster-glow-${item.id}"><feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    <rect width="1600" height="900" rx="36" fill="url(#poster-bg-${item.id})"/>
    <g opacity=".28" stroke="#17364c">
      <path d="M0 100H1600M0 200H1600M0 300H1600M0 400H1600M0 500H1600M0 600H1600M0 700H1600M0 800H1600"/>
      <path d="M100 0V900M200 0V900M300 0V900M400 0V900M500 0V900M600 0V900M700 0V900M800 0V900M900 0V900M1000 0V900M1100 0V900M1200 0V900M1300 0V900M1400 0V900M1500 0V900"/>
    </g>
    <text x="85" y="78" fill="${color}" font-family="Segoe UI,Arial" font-size="20" font-weight="900" letter-spacing="4">PART ${String(item.id).padStart(2,'0')} · ${groupLabel(item.group)}</text>
    <text x="80" y="160" fill="#edf7ff" font-family="Segoe UI,Arial" font-size="${item.title.length > 31 ? 55 : 68}" font-weight="900">${escapeXml(item.title)}</text>
    <text x="82" y="210" fill="#91a9bd" font-family="Segoe UI,Arial" font-size="27">${escapeXml(item.subtitle)}</text>
    <rect x="80" y="246" width="1440" height="4" rx="2" fill="url(#poster-grad-${item.id})" opacity=".78"/>
    ${flowMarkup}
    <g transform="translate(80 745)">
      <rect width="1440" height="105" rx="23" fill="#0b1828" stroke="#31516b" stroke-width="2"/>
      <text x="30" y="35" fill="${color}" font-family="Segoe UI,Arial" font-size="16" font-weight="900" letter-spacing="3">CORE IDEA</text>
      <text x="30" y="73" fill="#edf7ff" font-family="Segoe UI,Arial" font-size="${item.summary.length > 110 ? 20 : 24}">${escapeXml(item.summary)}</text>
    </g>
    <text x="1515" y="875" text-anchor="end" fill="#91a9bd" font-family="Segoe UI,Arial" font-size="16">Agentic Systems Academy × Sky365</text>
  </svg>`;
}

function renderMap() {
  map.innerHTML = mapData.map((item, index) => `
    <button class="universe-node" type="button" data-index="${index}" data-group="${item.group}">
      <small>${String(index + 1).padStart(2,'0')}</small>
      <strong>${item.title}</strong>
      <span>${item.desc}</span>
    </button>`).join('');

  $$('.universe-node', map).forEach(button => {
    button.addEventListener('click', () => selectWorld(Number(button.dataset.index)));
  });

  selectWorld(0);
}

function selectWorld(index) {
  const selected = mapData[index];
  $$('.universe-node', map).forEach((node, i) => node.classList.toggle('active', i === index));
  const related = series.filter(item => item.group === selected.group);
  detail.innerHTML = `
    <div>
      <small>SELECTED WORLD</small>
      <h3>${selected.title}</h3>
      <p>${selected.desc}</p>
      <div class="detail-flow">${selected.flow.map((step, i) => `<span>${step}</span>${i < selected.flow.length - 1 ? '<i>→</i>' : ''}`).join('')}</div>
    </div>
    <div class="detail-list">
      ${related.map(item => `<button type="button" data-id="${item.id}">#${String(item.id).padStart(2,'0')} ${item.title}</button>`).join('')}
    </div>`;
  $$('button[data-id]', detail).forEach(button => button.addEventListener('click', () => openInfo(Number(button.dataset.id))));
}

function renderSeries() {
  const query = $('#seriesSearch').value.trim().toLowerCase();
  const filter = $('#seriesFilter').value;
  const filtered = series.filter(item => {
    const haystack = `${item.title} ${item.subtitle} ${item.summary} ${item.steps.join(' ')} ${item.mistake} ${item.sky}`.toLowerCase();
    return (filter === 'all' || item.group === filter) && haystack.includes(query);
  });

  grid.innerHTML = filtered.map(item => `
    <article class="series-card">
      <div class="card-visual">${cardPreviewSvg(item)}</div>
      <div class="card-content">
        <div class="card-topline"><span>PART ${String(item.id).padStart(2,'0')}</span><b>${groupLabel(item.group)}</b></div>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="card-actions">
          <button type="button" data-open="${item.id}">افتح الإنفوجراف</button>
          <button type="button" data-download="${item.id}" aria-label="تنزيل ${item.title} SVG">↓ SVG</button>
        </div>
      </div>
    </article>`).join('');

  $('#visibleCount').textContent = filtered.length;
  $$('[data-open]', grid).forEach(button => button.addEventListener('click', () => openInfo(Number(button.dataset.open))));
  $$('[data-download]', grid).forEach(button => button.addEventListener('click', () => downloadSvg(series.find(item => item.id === Number(button.dataset.download)))));
}

function openInfo(id) {
  const item = series.find(entry => entry.id === id);
  if (!item) return;
  currentItem = item;
  dialogContent.innerHTML = `
    <div class="poster-shell">
      <div class="poster-svg-wrap">${posterSvg(item)}</div>
      <div class="poster-explain">
        <section class="poster-box"><h3>Common failure</h3><p>${item.mistake}</p></section>
        <section class="poster-box"><h3>Sky365 lens</h3><p>${item.sky}</p></section>
        <section class="poster-box poster-truth"><h3>The unspoken truth</h3><p>النمط لا يحل المشكلة وحده؛ الجودة تأتي من العقود، السياسات، المراقبة، واختبار الفشل قبل الإنتاج.</p></section>
      </div>
    </div>`;
  dialog.showModal();
}

function downloadSvg(item) {
  if (!item) return;
  const svg = posterSvg(item);
  const blob = new Blob([svg], {type:'image/svg+xml;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${String(item.id).padStart(2,'0')}-${item.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}.svg`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function initMotion() {
  const gif = window.AGENTIC_FLOW_GIF || '';
  const heroFallback = $('#heroFallbackGif');
  const motionGif = $('#motionGif');
  if (gif) {
    heroFallback.src = gif;
    motionGif.src = gif;
  }

  if (!window.lottie) return;

  const hero = $('#heroLottie');
  hero.innerHTML = '';
  const heroAnimation = window.lottie.loadAnimation({
    container: hero,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/animations/agentic-core.json',
    rendererSettings: {preserveAspectRatio:'xMidYMid meet'}
  });
  heroAnimation.addEventListener('data_failed', () => {
    hero.innerHTML = `<img src="${gif}" alt="Animated Agentic Systems flow">`;
  });

  const motion = $('#motionLottie');
  motion.innerHTML = '';
  const motionAnimation = window.lottie.loadAnimation({
    container: motion,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/animations/agentic-core.json',
    rendererSettings: {preserveAspectRatio:'xMidYMid meet'}
  });
  motionAnimation.addEventListener('data_failed', () => {
    motion.innerHTML = `<img class="motion-gif" src="${gif}" alt="Agentic core animation fallback">`;
  });
}

$('#seriesSearch').addEventListener('input', renderSeries);
$('#seriesFilter').addEventListener('change', renderSeries);
$('#closeDialog').addEventListener('click', () => dialog.close());
$('#downloadPoster').addEventListener('click', () => downloadSvg(currentItem));
$('#printPoster').addEventListener('click', () => window.print());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
$('#openSkyInfographic').addEventListener('click', () => openInfo(20));
$('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('academy-theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
if (localStorage.getItem('academy-theme') === 'light') document.body.classList.add('light');

renderMap();
renderSeries();
initMotion();
