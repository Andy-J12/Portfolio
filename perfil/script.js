/* ============================================================
   Contenido bilingüe. Editá los textos acá — el HTML se genera
   automáticamente a partir de este objeto.
   ============================================================ */
const CONTENT = {
es: {
  nav: [
    ["#servicios","Servicios"],["#experiencia","Experiencia"],
    ["#proyectos","Proyectos"],["#certificaciones","Certificaciones"],
    ["#contacto","Contactar"]
  ],
  hero: {
    eyebrow: "Datos • Automatización • IA Aplicada",
    title: 'Convierto <span class="hl">procesos manuales y datos dispersos</span> en sistemas que funcionan solos.',
    lede: "Soy Jamil Andi, ingeniero en Tecnologías de la Información y Comunicación. Diseño pipelines de datos, automatizaciones con IA y agentes conversacionales (RAG) usando Python, n8n, LangGraph y modelos LLM.",
    ctaPrimary: "Hablemos",
    ctaSecondary: "Ver proyectos",
    pipeline: [
      ["IN","Datos crudos"], ["EMB","Procesamiento"], ["AI","Agente / Modelo"], ["OUT","Resultado útil"]
    ],
    meta: [
      ["Ubicación","El Coca, Orellana, Ecuador"],
      ["Contacto","+593 098 808 1331"],
      ["Email","jamil2014andi@hotmail.com"],
      ["GitHub","github.com/Andy-J12","https://github.com/Andy-J12"],
    ],
    specialistLabel: "Especialista en",
    specialistList: ["Python / Pandas / scikit-learn","n8n / Automatización de flujos","LangGraph / CrewAI / Agentes IA","RAG / LLMs / Vector Search"],
    stat1: "6+ proyectos aplicados",
    stat2: "2024–2026 experiencia reciente"
  },
  services: {
    heading: "Servicios",
    sub: "Puedo aportar desde el diagnóstico del proceso hasta un sistema en producción: automatización, análisis de datos y agentes de IA.",
    items: [
      {n:"01", title:"Automatización de Procesos", desc:"Elimino tareas repetitivas conectando sistemas, correos, hojas de cálculo y bases de datos con flujos confiables y fáciles de mantener.", tags:["n8n","VBA / Excel Macros","Docker"]},
      {n:"02", title:"Ciencia de Datos / ML end-to-end", desc:"Desde la limpieza y exploración de datos hasta modelos entrenados y expuestos como API lista para consumir.", tags:["Python","scikit-learn","FastAPI","CatBoost"]},
      {n:"03", title:"Chatbots y Agentes con LLMs (RAG)", desc:"Construyo asistentes que responden con base en documentos reales, no en memoria del modelo, con arquitecturas de agente + herramientas.", tags:["LangGraph","CrewAI","Supabase / pgvector","Cohere / Gemini"]},
    ]
  },
  experience: {
    heading: "Experiencia",
    sub: "Experiencia reciente en docencia, desarrollo académico y soporte administrativo, combinada con proyectos independientes de automatización.",
    items: [
      { role:"Ayudante de Cátedra — Machine Learning", org:"Universidad Yachay Tech", date:"Sep 2025 – Nov 2025",
        bullets:["Apoyó la enseñanza de conceptos de Machine Learning a estudiantes de la asignatura, incluyendo resolución de dudas prácticas y revisión de ejercicios."] },
      { role:"Practicante Preprofesional — Proyecto Connect YT", org:"Dirección General de Posgrados, Yachay Tech", date:"Jun 2024 – Jul 2024",
        bullets:["Desarrolló módulos backend (Node.js, Express) y frontend (Angular) con operaciones CRUD para admisiones y programas de posgrado.","Diseñó la base de datos en PostgreSQL y probó los endpoints con Postman."] },
      { role:"Servicios Independientes — Soporte Técnico y Automatización", org:"Remoto / Freelance", date:"Independiente",
        bullets:["Desarrolló sistemas contables en Excel con macros VBA, incluyendo gestión completa para un hostal.","Brindó mantenimiento remoto de PC y recuperación de cuentas de correo financieras."] },
      { role:"Asistente de Finanzas", org:"Empresa Petrolera 4L — Depto. de Finanzas", date:"2021 – 2022",
        bullets:["Apoyó tareas administrativas y de conciliación dentro del área de finanzas."] },
    ]
  },
  projects: {
    heading: "Proyectos",
    sub: "Una muestra de proyectos que combinan automatización, IA aplicada y análisis de datos.",
    items: [
      { title:"Consulta Galápagos — Chatbot RAG en Telegram", tags:["n8n","Supabase / pgvector","Cohere","Gemini"],
        desc:"Chatbot conversacional que responde sobre trámites migratorios usando una arquitectura de Agente de IA + Tool, tras migrar desde un patrón de recuperación fija por un bug de integración diagnosticado en n8n.", link:"https://github.com/Andy-J12" },
      { title:"Automatización de Procesamiento de CVs", tags:["n8n","Gmail API","DeepSeek","Supabase"],
        desc:"Pipeline que recibe hojas de vida por correo, extrae y clasifica candidatos (junior/semi-senior/senior) con LLMs, y notifica automáticamente al reclutador.", link:"https://github.com/Andy-J12" },
      { title:"Asistente de Investigación Multi-Agente", tags:["LangGraph","Gemini","Tavily","Pydantic"],
        desc:"Grafo de estado con lógica condicional (Research → Analyst → Writer) que decide autónomamente si repetir la búsqueda o redactar el reporte final.", link:"https://github.com/Andy-J12" },
      { title:"API de Predicción de Depósitos Bancarios", tags:["FastAPI","CatBoost","scikit-learn"],
        desc:"API REST que sirve un modelo de clasificación binaria con interfaz web integrada para pruebas en tiempo real.", link:"https://github.com/Andy-J12" },
      { title:"Predicción de Churn en Telecomunicaciones — Tesis", tags:["CrewAI","GPT-4o-mini","DeepSeek"],
        desc:"Comparación de cuatro configuraciones de autonomía de agentes LLM, desde línea base humana hasta pipeline totalmente autónomo.", link:"https://github.com/Andy-J12" },
      { title:"CompararProcesoVsTunel — Automatización VBA", tags:["Excel VBA"],
        desc:"Macro de producción para una planta procesadora de mariscos: detección dinámica de columnas, tolerancias y resumen de discrepancias.", link:"https://github.com/Andy-J12" },
    ]
  },
  certifications: {
    heading: "Certificaciones",
    sub: "Formación continua enfocada en IA, datos y automatización.",
    items: [
      ["DataCamp","Introduction to Deep Learning with PyTorch"],
      ["DataCamp","Image Processing in Python"],
      ["DataCamp","Advanced Search and Innovative Research"],
      ["DataCamp","Monetizing Artificial Intelligence"],
      ["Certificación","Introduction to Cybersecurity"],
      ["Yachay Tech","Ayudante de Cátedra — Machine Learning"],
      ["Curso","Get Started Quickly with Jira"],
      ["Curso","Introduction to Python"],
    ]
  },
  contact: {
    heading:"Construyamos el próximo flujo que le ahorre horas a tu equipo.",
    lede:"Si necesitás automatizar un proceso, poner en producción un modelo o construir un asistente con IA, hablemos.",
    cta:"Escribime por correo"
  },
  footer: { role:"Ingeniería en TIC • Datos & IA Aplicada", available:"Disponible para proyectos remotos" }
},

en: {
  nav: [
    ["#servicios","Services"],["#experiencia","Experience"],
    ["#proyectos","Projects"],["#certificaciones","Certifications"],
    ["#contacto","Contact"]
  ],
  hero: {
    eyebrow: "Data • Automation • Applied AI",
    title: 'I turn <span class="hl">manual processes and scattered data</span> into systems that run themselves.',
    lede: "I'm Jamil Andi, an Information and Communication Technologies engineer. I design data pipelines, AI-driven automations, and conversational agents (RAG) using Python, n8n, LangGraph, and LLMs.",
    ctaPrimary: "Let's talk",
    ctaSecondary: "View projects",
    pipeline: [
      ["IN","Raw data"], ["EMB","Processing"], ["AI","Agent / Model"], ["OUT","Useful output"]
    ],
    meta: [
      ["Location","El Coca, Orellana, Ecuador"],
      ["Phone","+593 098 808 1331"],
      ["Email","jamil2014andi@hotmail.com"],
      ["GitHub","github.com/Andy-J12","https://github.com/Andy-J12"],
    ],
    specialistLabel: "Specialized in",
    specialistList: ["Python / Pandas / scikit-learn","n8n / Workflow Automation","LangGraph / CrewAI / AI Agents","RAG / LLMs / Vector Search"],
    stat1: "6+ applied projects",
    stat2: "2024–2026 recent experience"
  },
  services: {
    heading: "Services",
    sub: "I can help from diagnosing the process to a system running in production: automation, data analysis, and AI agents.",
    items: [
      {n:"01", title:"Process Automation", desc:"I remove repetitive tasks by connecting systems, email, spreadsheets, and databases with reliable, maintainable workflows.", tags:["n8n","VBA / Excel Macros","Docker"]},
      {n:"02", title:"End-to-End Data Science / ML", desc:"From data cleaning and exploration to trained models exposed as a ready-to-consume API.", tags:["Python","scikit-learn","FastAPI","CatBoost"]},
      {n:"03", title:"LLM Chatbots & Agents (RAG)", desc:"I build assistants that answer from real documents, not model memory, using agent + tool architectures.", tags:["LangGraph","CrewAI","Supabase / pgvector","Cohere / Gemini"]},
    ]
  },
  experience: {
    heading: "Experience",
    sub: "Recent experience in teaching, academic development, and administrative support, combined with independent automation projects.",
    items: [
      { role:"Teaching Assistant — Machine Learning", org:"Yachay Tech University", date:"Sep 2025 – Nov 2025",
        bullets:["Supported course instruction on Machine Learning concepts, including student Q&A and exercise review."] },
      { role:"Undergraduate Intern — Connect YT Project", org:"Graduate Studies Office, Yachay Tech", date:"Jun 2024 – Jul 2024",
        bullets:["Developed backend modules (Node.js, Express) and frontend components (Angular) with CRUD operations for admissions and graduate programs.","Designed the PostgreSQL database and tested endpoints with Postman."] },
      { role:"Independent — Technical Support & Automation", org:"Remote / Freelance", date:"Ongoing",
        bullets:["Built accounting systems in Excel with VBA macros, including a full bookkeeping system for a hostel.","Provided remote PC maintenance and financial email account recovery."] },
      { role:"Finance Assistant", org:"Empresa Petrolera 4L — Finance Dept.", date:"2021 – 2022",
        bullets:["Supported administrative and reconciliation tasks within the finance department."] },
    ]
  },
  projects: {
    heading: "Projects",
    sub: "A selection of projects combining automation, applied AI, and data analysis.",
    items: [
      { title:"Consulta Galápagos — RAG Telegram Chatbot", tags:["n8n","Supabase / pgvector","Cohere","Gemini"],
        desc:"Conversational chatbot answering migratory procedure questions using an AI Agent + Tool architecture, after migrating from a fixed-retrieval pattern due to an n8n integration bug.", link:"https://github.com/Andy-J12" },
      { title:"CV Processing Automation", tags:["n8n","Gmail API","DeepSeek","Supabase"],
        desc:"Pipeline that receives CVs by email, extracts and classifies candidates (junior/semi-senior/senior) with LLMs, and auto-notifies recruiters.", link:"https://github.com/Andy-J12" },
      { title:"Multi-Agent Research Assistant", tags:["LangGraph","Gemini","Tavily","Pydantic"],
        desc:"Stateful graph with conditional logic (Research → Analyst → Writer) that autonomously decides whether to loop back or write the final report.", link:"https://github.com/Andy-J12" },
      { title:"Bank Deposit Prediction API", tags:["FastAPI","CatBoost","scikit-learn"],
        desc:"REST API serving a binary classification model with an integrated web interface for real-time testing.", link:"https://github.com/Andy-J12" },
      { title:"Telecom Churn Prediction — Thesis", tags:["CrewAI","GPT-4o-mini","DeepSeek"],
        desc:"Compared four LLM-agent autonomy configurations, from human-led baseline to a fully autonomous pipeline.", link:"https://github.com/Andy-J12" },
      { title:"CompararProcesoVsTunel — VBA Automation", tags:["Excel VBA"],
        desc:"Production macro for a seafood processing plant: dynamic column detection, tolerances, and discrepancy summaries.", link:"https://github.com/Andy-J12" },
    ]
  },
  certifications: {
    heading: "Certifications",
    sub: "Continuous learning focused on AI, data, and automation.",
    items: [
      ["DataCamp","Introduction to Deep Learning with PyTorch"],
      ["DataCamp","Image Processing in Python"],
      ["DataCamp","Advanced Search and Innovative Research"],
      ["DataCamp","Monetizing Artificial Intelligence"],
      ["Certification","Introduction to Cybersecurity"],
      ["Yachay Tech","Teaching Assistant — Machine Learning"],
      ["Course","Get Started Quickly with Jira"],
      ["Course","Introduction to Python"],
    ]
  },
  contact: {
    heading:"Let's build the next workflow that saves your team hours.",
    lede:"If you need to automate a process, ship a model to production, or build an AI assistant, let's talk.",
    cta:"Email me"
  },
  footer: { role:"ICT Engineering • Data & Applied AI", available:"Available for remote projects" }
}
};

/* ============================================================
   Render
   ============================================================ */
function el(html){ const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content; }

function renderNav(lang){
  const nav = document.getElementById('main-nav');
  nav.innerHTML = CONTENT[lang].nav.map(([href,label])=>`<a href="${href}">${label}</a>`).join('');
}

function renderApp(lang){
  const c = CONTENT[lang];
  const app = document.getElementById('app');

  const hero = `
  <section class="hero wrap" style="border-top:none;">
    <div class="eyebrow">${c.hero.eyebrow}</div>
    <h1>${c.hero.title}</h1>
    <p class="lede">${c.hero.lede}</p>
    <div class="hero-ctas">
      <a class="btn btn-primary" href="mailto:jamil2014andi@hotmail.com">${c.hero.ctaPrimary}</a>
      <a class="btn btn-ghost" href="#proyectos">${c.hero.ctaSecondary}</a>
    </div>
    <div class="pipeline" aria-hidden="true">
      ${c.hero.pipeline.map(([tag,lbl],i)=>`
        <div class="pipeline-node"><div class="pt">${tag}</div><div class="lbl">${lbl}</div></div>
        ${i < c.hero.pipeline.length-1 ? '<div class="pipeline-link"></div>' : ''}
      `).join('')}
    </div>
    <div class="hero-meta">
      ${c.hero.meta.map(([k,v,href])=>`
        <div class="meta-block"><div class="k">${k}</div><div class="v">${href ? `<a href="${href}" target="_blank" rel="noopener">${v}</a>` : v}</div></div>
      `).join('')}
      <div class="meta-block">
        <div class="k">${c.hero.specialistLabel}</div>
        <div class="chiplist">${c.hero.specialistList.map(s=>`<span class="chip">${s}</span>`).join('')}</div>
      </div>
    </div>
  </section>`;

  const services = `
  <section id="servicios">
    <div class="wrap">
      <div class="node-rule"><span class="dot"></span></div>
      <div class="section-head"><h2>${c.services.heading}</h2><p>${c.services.sub}</p></div>
      <div class="services-grid">
        ${c.services.items.map(s=>`
          <div class="service-card">
            <span class="num">${s.n}</span>
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
            <div class="chiplist">${s.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;

  const experience = `
  <section id="experiencia">
    <div class="wrap">
      <div class="node-rule"><span class="dot amber"></span></div>
      <div class="section-head"><h2>${c.experience.heading}</h2><p>${c.experience.sub}</p></div>
      <div class="timeline">
        ${c.experience.items.map(x=>`
          <div class="tl-item">
            <div class="tl-date">${x.date}</div>
            <div>
              <div class="tl-role">${x.role}</div>
              <div class="tl-org">${x.org}</div>
              <ul>${x.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;

  const projects = `
  <section id="proyectos">
    <div class="wrap">
      <div class="node-rule"><span class="dot"></span></div>
      <div class="section-head"><h2>${c.projects.heading}</h2><p>${c.projects.sub}</p></div>
      <div class="projects-grid">
        ${c.projects.items.map(p=>`
          <div class="project-card">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="chiplist">${p.tags.map(t=>`<span class="chip">${t}</span>`).join('')}</div>
            <a class="link" href="${p.link}" target="_blank" rel="noopener">GitHub →</a>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;

  const certifications = `
  <section id="certificaciones">
    <div class="wrap">
      <div class="node-rule"><span class="dot amber"></span></div>
      <div class="section-head"><h2>${c.certifications.heading}</h2><p>${c.certifications.sub}</p></div>
      <div class="cert-grid">
        ${c.certifications.items.map(([issuer,title])=>`
          <div class="cert-card"><div class="issuer">${issuer}</div><h4>${title}</h4></div>
        `).join('')}
      </div>
    </div>
  </section>`;

  const contact = `
  <section id="contacto" class="contact">
    <div class="wrap">
      <div class="node-rule"><span class="dot"></span></div>
      <h2>${c.contact.heading}</h2>
      <p class="lede">${c.contact.lede}</p>
      <a class="btn btn-primary" href="mailto:jamil2014andi@hotmail.com">${c.contact.cta}</a>
    </div>
  </section>`;

  const footer = `
  <footer>
    <div class="wrap footer-inner">
      <div>
        <div class="footer-name">Jamil Andi</div>
        <div class="footer-role">${c.footer.role}</div>
      </div>
      <div class="footer-links">
        <a href="mailto:jamil2014andi@hotmail.com">Email</a>
        <a href="https://github.com/Andy-J12" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.linkedin.com/in/jamil-andi-059704359/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
      <div class="footer-role">${c.footer.available}</div>
    </div>
  </footer>`;

  app.innerHTML = hero + services + experience + projects + certifications + contact + footer;
}

let currentLang = 'es';

function setLang(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-opt').forEach(o=>o.classList.toggle('is-active', o.dataset.lang===lang));
  renderNav(lang);
  renderApp(lang);
}

document.getElementById('lang-toggle').addEventListener('click', (e)=>{
  const opt = e.target.closest('.lang-opt');
  if(!opt) return;
  setLang(opt.dataset.lang);
});

document.getElementById('nav-burger').addEventListener('click', ()=>{
  const nav = document.getElementById('main-nav');
  const open = nav.classList.toggle('is-open');
  document.getElementById('nav-burger').setAttribute('aria-expanded', open);
});

setLang('es');
