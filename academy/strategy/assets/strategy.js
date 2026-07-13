const pillars=[
{id:1,status:'active',title:'Product Architecture',summary:'توحيد رحلة المنتج من ERP تقليدي إلى منصة Agentic مؤسسية، دون القفز مباشرة إلى Skyverse.',items:['SKYsaas → Sky365 → AI → Agentic','Shared Action Core','Tenant-aware platform'],glow:'#38e7d2'},
{id:2,status:'next',title:'Semantic & Policy Layer',summary:'تقليل الغموض وربط قرارات الوكيل بمصطلحات الأعمال والسياسات الفعلية.',items:['Semantic Dictionary V1','Policy Corpus Retrieval','Entity resolution'],glow:'#5d8cff'},
{id:3,status:'active',title:'Execution & Safety',summary:'تحويل النية والخطة إلى إجراءات آمنة وقابلة للموافقة والتراجع والتدقيق.',items:['DraftOnly defaults','Approval gates','Deterministic fallback'],glow:'#54d68b'},
{id:4,status:'active',title:'Observability & Evidence',summary:'رؤية الرحلة كاملة من الطلب الخام إلى النتيجة النهائية، لا تسجيل الإجابة فقط.',items:['Flight Recorder','Agent Observatory','Replay & evaluation'],glow:'#a97cff'},
{id:5,status:'next',title:'Reference Workflow',summary:'إثبات المنصة في سيناريو Supplier Approval عميق قبل التوسع في عشرات السيناريوهات.',items:['DraftWorkflowArtifact','Supplier Approval E2E','Golden regression suite'],glow:'#ffbd5b'},
{id:6,status:'active',title:'Research System',summary:'تحويل المقالات والـRepositories إلى قرارات وتجارب وADRs بدل مكتبة روابط متضخمة.',items:['Capture & critique','Adopt / Watch / Reject','Research-to-product loop'],glow:'#38e7d2'},
{id:7,status:'active',title:'Academy & Visual IP',summary:'بناء أصل معرفي بصري يشرح المعمارية ويثبت خبرتنا، بدل إعادة نشر محتوى عام.',items:['Infographic series','Motion systems','Sky365 case studies'],glow:'#5d8cff'},
{id:8,status:'watch',title:'Ecosystem & Interoperability',summary:'الاستعداد لـMCP وA2A وAdd-ins دون بناء Marketplace قبل استقرار العقود والمنصة.',items:['MCP contracts','A2A watchlist','Add-ins templates later'],glow:'#ffbd5b'},
{id:9,status:'parked',title:'Scale Before Proof',summary:'تأجيل الـSwarm والـMarketplace والتوسع الواسع حتى نثبت قيمة وتشغيل سيناريو مرجعي واحد.',items:['No premature swarm','No premature marketplace','No demo sprawl'],glow:'#ff7385'}
];
const labels={active:'ACTIVE',next:'BUILD NEXT',watch:'WATCH',parked:'PARKED'};
const grid=document.getElementById('pillarGrid');
const search=document.getElementById('searchInput');
const filter=document.getElementById('statusFilter');
const count=document.getElementById('visibleCount');
function render(){
 const q=search.value.trim().toLowerCase();
 const status=filter.value;
 const visible=pillars.filter(p=>(status==='all'||p.status===status)&&(`${p.title} ${p.summary} ${p.items.join(' ')}`.toLowerCase().includes(q)));
 grid.innerHTML=visible.map(p=>`<article class="pillar-card" style="--glow:${p.glow}"><div class="pillar-top"><span class="pillar-number">PILLAR ${String(p.id).padStart(2,'0')}</span><span class="status ${p.status}">${labels[p.status]}</span></div><h3>${p.title}</h3><p>${p.summary}</p><div class="pillar-list">${p.items.map(x=>`<span>${x}</span>`).join('')}</div></article>`).join('');
 count.textContent=visible.length;
}
search.addEventListener('input',render);filter.addEventListener('change',render);
const themeButton=document.getElementById('themeToggle');
if(localStorage.getItem('sky365-strategy-theme')==='light')document.body.classList.add('light');
themeButton.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('sky365-strategy-theme',document.body.classList.contains('light')?'light':'dark')});
render();