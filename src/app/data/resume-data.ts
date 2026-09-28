export interface AttributeItem {
  field: string;
  value: string;
}

export interface SkillItem {
  name: string;
  score?: number;
  logoUrl?: string;
  keywords?: string[];
  description?: string;
}

export interface SkillCategory {
  name: string;
  icon?: string;
  type: 'score' | 'image' | 'tag';
  content: SkillItem[];
}

export interface ResumeProfile {
  templateSettings: AttributeItem[];
  presentation: AttributeItem[];
  email: string;
  github: string;
  linkedin?: string;
  mobile: string;
  location: string;
  workExperiences: AttributeItem[][];
  academicExperiences: AttributeItem[][];
  skills: SkillCategory[];
}

export const RESUME_DATA: ResumeProfile = {
  templateSettings: [
    { field: "BackgroundURL", value: "https://www.pikpng.com/pngl/b/45-456227_transparent-black-border-border-clipart-education-black-and.png" }
  ],
  presentation: [
    { field: "ImageURL", value: "https://avatars.githubusercontent.com/u/20101141?v=4" },
    { field: "Name", value: "John Lenin Ortiz Gamba" },
    { field: "Profession", value: "Staff Software Engineer · Enterprise Full-Stack & Agentic Systems · BS Mechanical Engineering" },
    { 
      field: "Presentation", 
      value: "Staff Software Engineer with 15+ years of experience delivering enterprise-grade platforms, autonomous AI systems, and high-performance full-stack architectures. Proven track record leading development teams through major engineering transformations: migrating legacy enterprise monoliths to Angular 14+ and Nx monorepos, architecting Java 17 / Spring Boot microservices, and pioneering agentic AI frameworks (author of Agent Neo Web Component, Model Context Protocol MCP servers, and local Ollama orchestration). Author of real-time 3D spatial computing interfaces with Three.js and MediaPipe computer vision. Rare hybrid engineering foundation combining computer science with a BS in Mechanical Engineering, CREG 174 clean energy regulatory approval, and rigorous engineering governance across JaCoCo patch coverage gates, Karma testing, and adversarial pre-PR reviews."
    }
  ],
  email: "johnleninortiz@gmail.com",
  github: "github.com/rent-a-human",
  linkedin: "linkedin.com/in/john-lenin-ortiz",
  mobile: "+57 302 568 8681",
  location: "Colombia",
  workExperiences: [
    [
      { field: "CompanyLogoUrl", value: "https://avatars.githubusercontent.com/u/6602522?s=200&v=4" },
      { field: "CompanyName", value: "Gravity / ClearGov (via Slabcode)" },
      { field: "Period", value: "Sep 2021 - Present" },
      { field: "Position", value: "Staff Software Engineer · Development Team Leader" },
      { 
        field: "Achievements", 
        value: "Led full-stack engineering of Gravity Financial Close Management System, serving enterprise and municipal clients across North America. Spearheaded migration of legacy enterprise codebases to Angular 14+ within an Nx monorepo (Disclosure Studio), cutting bundle sizes and achieving 40%+ build caching speedups. Architected Disclosure Studio WYSIWYG financial report authoring suite, integrating live browser preview, client-side jsPDF rendering, and server-side Adobe InDesign Server (IDS) dynamic templating. Engineered advanced spreadsheet and rich-text engines using CKEditor and Jspreadsheet, resolving complex hybrid ranges, cell notes variable resolution, dynamic formula shifting, and cross-sheet operations. Developed and scaled Java 17 / Spring Boot backend microservices with robust DTO mappings, Stream API pipelines, and secure REST endpoints. Established automated engineering quality gates enforcing MIN_PATCH 70% coverage across JaCoCo (backend) and Karma/lcov (frontend), plus adversarial pre-PR review pipelines. Integrated Agent Neo conversational AI into Disclosure Studio to automate report queries and user guidance."
      }
    ],
    [
      { field: "CompanyLogoUrl", value: "https://img.icons8.com/color/96/sun--v1.png" },
      { field: "CompanyName", value: "SolarVerde SAS" },
      { field: "Period", value: "May 2026 - Present" },
      { field: "Position", value: "Co-Founder · Lead Software & Systems Architect" },
      { 
        field: "Achievements", 
        value: "Co-founded and engineered the complete technical and regulatory architecture for a renewable energy service company (ESCO) in Colombia. Secured official CREG 174 regulatory approval from ESSA ESP for the company's 5.04 kWp photovoltaic autogeneration pilot project. Architected a web-based solar savings calculator featuring real-time iframe synchronization via postMessage and custom solar irradiance modeling. Built 'Lumina'—an intelligent conversational AI agent based on Agent Neo—performing multimodal invoice parsing to extract utility tariff brackets, kWh consumption, and geolocation from electricity bills. Implemented a high-performance backend featuring automated PDF text parsing, spatial coordinates extraction, and an IP-based unique visitor analytics engine."
      }
    ],
    [
      { field: "CompanyLogoUrl", value: "https://avatars.githubusercontent.com/u/20101141?v=4" },
      { field: "CompanyName", value: "rent-a-human / you-work (Personal AI Ecosystem)" },
      { field: "Period", value: "2024 - Present" },
      { field: "Position", value: "Founder · AI Systems Architect & Open Source Creator" },
      { 
        field: "Achievements", 
        value: "Designed and built an open-source, multi-tier AI ecosystem from scratch. Agent Neo: Authored a framework-agnostic conversational AI library distributed as a Web Component (compatible with React, Angular, and Vanilla JS) supporting deterministic decision trees, skipIf conditions, multi-turn LLM dialogue, and automated tool calling. api-llm: Built an LLM orchestration backend with dual-tier inference routing (Claude 3.5, Gemini 2.0, and local Ollama), featuring a native Model Context Protocol (MCP) server exposing filesystem, web search, and OpenJSCAD parametric CAD tools to autonomous agent loops. jarvis-dashboard: Engineered an Iron Man-inspired 3D holographic command center with React Three Fiber and MediaPipe computer vision, featuring touchless 3D raycasting, eye/gaze tracking, multi-step agent workflows, and digital PDF signing. chess-3d: Created a 3D chess game integrating Stockfish WASM engine (levels 1-7), Agent Neo AI persona tracking board state, and Capacitor packaging for mobile iOS and Android."
      }
    ],
    [
      { field: "CompanyLogoUrl", value: "https://avatars.githubusercontent.com/u/83523063?v=4" },
      { field: "CompanyName", value: "Olimpia SAS - MiFirma" },
      { field: "Period", value: "Feb 2021 - Sep 2021" },
      { field: "Position", value: "Frontend Developer" },
      { 
        field: "Achievements", 
        value: "Designed and built the MiFirma Office Add-in using Node.js, enabling seamless document signing through Microsoft Office integration. Implemented a biometric digital signature feature for PDF documents using Angular and .NET Core, delivering a legally compliant, cryptographically secure signing workflow."
      }
    ],
    [
      { field: "CompanyLogoUrl", value: "assets/icons/slabcode.svg" },
      { field: "CompanyName", value: "Slabcode SAS" },
      { field: "Period", value: "Feb 2021 - Present" },
      { field: "Position", value: "Senior Software Developer" },
      { 
        field: "Achievements", 
        value: "Delivered responsive, production-grade enterprise web and mobile applications using Angular, React Native, and Svelte across diverse client engagements. Implemented modern design patterns, state machines, and reactive architectures to maintain scalable, long-lived codebases."
      }
    ],
    [
      { field: "CompanyLogoUrl", value: "assets/img/tera-logo.jpeg" },
      { field: "CompanyName", value: "IngeProyectos TERA" },
      { field: "Period", value: "Sep 2016 - Jan 2021" },
      { field: "Position", value: "Development Engineer" },
      { 
        field: "Achievements", 
        value: "Directed end-to-end mechanical and software systems engineering for CNC machinery, industrial textile folding equipment, and COVID-19 emergency mechanical ventilators. Modeled 3D CAD assemblies using SolidWorks and Autodesk Inventor, conducting finite element structural analysis (FEM). Developed web portals and e-commerce platforms in PHP/MySQL. Built automated engineering calculation tools using Excel VBA macros for the Virtual Drilling Engineering petroleum project."
      }
    ],
    [
      { field: "CompanyLogoUrl", value: "assets/img/freelance.png" },
      { field: "CompanyName", value: "Freelance" },
      { field: "Period", value: "Feb 2006 - Oct 2009" },
      { field: "Position", value: "Web Developer" },
      { 
        field: "Achievements", 
        value: "Built and deployed custom PHP/MySQL web applications, WordPress and PrestaShop stores, desktop database systems in MS Access, and office automation tools in Excel VBA. Commenced professional software engineering at age 15."
      }
    ]
  ],
  academicExperiences: [
    [
      { field: "InstitutionLogoUrl", value: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/USB_logo.svg/1920px-USB_logo.svg.png" },
      { field: "InstitutionName", value: "Universidad Simon Bolivar" },
      { field: "Period", value: "Sep 2010 - Jun 2016" },
      { field: "DegreeAcquired", value: "BS in Mechanical Engineering" },
      { field: "Achievements", value: "Graduation Thesis: Design, thermodynamics analysis, and precision fabrication of a parabolic solar tracking dish coupled with a Stirling engine for solar thermal energy generation." }
    ],
    [
      { field: "InstitutionLogoUrl", value: "assets/img/iestj.jpeg" },
      { field: "InstitutionName", value: "IE Santa Teresa de Jesus - CASD" },
      { field: "Period", value: "Jan 2003 - Dec 2005" },
      { field: "DegreeAcquired", value: "IT Certificate" },
      { field: "Achievements", value: "Comprehensive foundations in HTML, CSS, JavaScript, Visual Basic, PHP, MySQL, and systems analysis. Launched commercial freelance software engineering career the subsequent year at age 15." }
    ]
  ],
  skills: [
    {
      name: "AI & Autonomous Agent Systems",
      icon: "smart_toy",
      type: "score",
      content: [
        { name: "Agent Neo (Creator / Author)", score: 96, keywords: ["Web Component", "Autonomous Agents", "Decision Trees", "Tool Calling"] },
        { name: "Model Context Protocol (MCP SDK)", score: 94, keywords: ["Tool Integration", "Filesystem", "Search", "Agentic Pipelines"] },
        { name: "LLM Orchestration & Pipelines", score: 92, keywords: ["Multi-turn", "Structured Outputs", "Prompt Engineering"] },
        { name: "Local LLM Inference (Ollama)", score: 90, keywords: ["Llama 3", "DeepSeek", "Local Inference", "Privacy-first AI"] },
        { name: "Claude & Gemini APIs", score: 92, keywords: ["Multimodal", "Vision Ingestion", "Function Calling"] },
        { name: "Multi-Agent Coding Workflows", score: 90, keywords: ["Antigravity", "Custom Skills", "Automated Reviews"] },
        { name: "OpenJSCAD Parametric AI", score: 86, keywords: ["Automated CAD", "Generative 3D", "Geometric Code"] }
      ]
    },
    {
      name: "Enterprise Backend & Monorepos",
      icon: "dns",
      type: "score",
      content: [
        { name: "Java 17 & Spring Boot", score: 88, keywords: ["Microservices", "REST APIs", "Stream API", "DTO Architecture"] },
        { name: "Nx Monorepo Architecture", score: 92, keywords: ["Monorepo Consolidation", "Affected Builds", "Computation Cache"] },
        { name: "Adobe InDesign Server (IDS)", score: 88, keywords: ["Dynamic PDF Templating", "Automated Publishing", "SOAP/REST IDS"] },
        { name: "Node.js & Express", score: 90, keywords: ["Asynchronous I/O", "Microservices", "Office Add-ins"] },
        { name: "PostgreSQL & MySQL", score: 85, keywords: ["Relational Schemas", "Query Optimization", "Transactions"] },
        { name: "C# & .NET Core", score: 80, keywords: ["Web APIs", "Digital Signatures", "Biometrics"] },
        { name: "Docker & Containerization", score: 84, keywords: ["Docker Compose", "Multi-stage Builds", "Dev Containers"] },
        { name: "Wompi & PSE Payment Gateways", score: 85, keywords: ["Fintech Checkout", "Webhooks", "Transaction Security"] }
      ]
    },
    {
      name: "Frontend & Rich Client Architecture",
      icon: "web",
      type: "score",
      content: [
        { name: "Angular (v14+)", score: 98, keywords: ["RxJS", "Directives", "Custom Decorators", "SSR/Universal", "Performance"] },
        { name: "TypeScript", score: 96, keywords: ["Strict Typing", "Generics", "Type Guards", "AST"] },
        { name: "Web Components / Custom Elements", score: 92, keywords: ["Framework-agnostic", "Shadow DOM", "Microfrontends"] },
        { name: "CKEditor Custom Plugins", score: 90, keywords: ["WYSIWYG Directives", "Variable Injection", "Document Authoring"] },
        { name: "Jspreadsheet Engines", score: 92, keywords: ["Dynamic Formulas", "Hybrid Ranges", "Undo/Redo State Machines"] },
        { name: "React & React Native", score: 88, keywords: ["Hooks", "Custom Context", "Mobile Architecture"] },
        { name: "Svelte & SvelteKit", score: 90, keywords: ["Reactivity", "Lightweight Add-ons", "High Performance"] },
        { name: "jsPDF & Client-Side PDF", score: 88, keywords: ["Client Rendering", "Vector Graphics", "Document Export"] },
        { name: "HTML5 / CSS3 / LESS / Tailwind", score: 95, keywords: ["Responsive Layouts", "Print CSS", "Design Systems"] }
      ]
    },
    {
      name: "Spatial Computing, CV & WebAssembly",
      icon: "view_in_ar",
      type: "score",
      content: [
        { name: "Three.js & React Three Fiber (R3F)", score: 88, keywords: ["3D Scenes", "Shaders", "Camera Controllers", "WebXR"] },
        { name: "MediaPipe (Hand & Eye Tracking)", score: 86, keywords: ["Computer Vision", "Hand Raycaster", "Touchless Navigation"] },
        { name: "YOLOE Vision Recognition", score: 82, keywords: ["Object Detection", "Real-time Inference", "Multimodal CV"] },
        { name: "Stockfish WASM (WebAssembly)", score: 85, keywords: ["WASM Compilation", "Parallel Workers", "Chess Engines"] }
      ]
    },
    {
      name: "Quality Engineering & Code Governance",
      icon: "verified_user",
      type: "score",
      content: [
        { name: "JaCoCo Patch Coverage Gates", score: 92, keywords: ["CI/CD Quality Gates", "MIN_PATCH 70%", "Java Test Enforcements"] },
        { name: "Karma & Jasmine (Frontend Testing)", score: 92, keywords: ["Angular Unit Tests", "Mocking", "Coverage Reports"] },
        { name: "Adversarial Pre-PR Code Reviews", score: 94, keywords: ["Static Analysis", "SonarQube", "Race Condition Hunting"] },
        { name: "Git & Automated CI/CD", score: 92, keywords: ["Git Worktrees", "Multi-repo Porting", "GitHub Actions"] }
      ]
    },
    {
      name: "CleanTech & Physical Systems",
      icon: "solar_power",
      type: "score",
      content: [
        { name: "CREG 174 Regulatory Compliance", score: 92, keywords: ["ESSA ESP Approval", "Autogeneration Grid Interconnection"] },
        { name: "Solar Irradiance Modeling", score: 88, keywords: ["Photovoltaic Calculations", "Energy Yield", "Tariff Analysis"] },
        { name: "SolidWorks & Autodesk Inventor", score: 88, keywords: ["3D Parametric CAD", "Assembly Modeling", "Technical Drawings"] },
        { name: "Finite Element Method (FEM)", score: 82, keywords: ["Structural Stress Analysis", "Thermal Modeling"] },
        { name: "CNC Machining & Rapid Prototyping", score: 85, keywords: ["G-Code", "CAM Toolpaths", "Mechanical Fabrication"] }
      ]
    },
    {
      name: "Native, Mobile & Dev Tools",
      icon: "build",
      type: "image",
      content: [
        { name: "Swift & SwiftUI (macOS AppKit)", logoUrl: "https://developer.apple.com/assets/elements/icons/swift/swift-96x96_2x.png", keywords: ["NSTextView", "macOS Native", "RTF"] },
        { name: "Capacitor (iOS & Android)", logoUrl: "https://capacitorjs.com/assets/img/meta/favicon.png", keywords: ["Mobile Packaging", "Plugins"] },
        { name: "GIT", logoUrl: "assets/icons/git.svg" },
        { name: "VS Code", logoUrl: "assets/icons/vscode.svg" },
        { name: "IntelliJ IDEA", logoUrl: "assets/icons/intellij.svg" },
        { name: "JIRA", logoUrl: "assets/icons/jira.svg" },
        { name: "Blender", logoUrl: "assets/icons/blender.svg" },
        { name: "Raspberry Pi", logoUrl: "assets/icons/raspberry.png" },
        { name: "Arduino", logoUrl: "assets/icons/arduino.svg" }
      ]
    },
    {
      name: "Languages",
      icon: "language",
      type: "score",
      content: [
        { name: "Spanish (Native)", score: 100 },
        { name: "English (Full Professional Proficiency)", score: 92 }
      ]
    }
  ]
};
