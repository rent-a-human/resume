import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.less']
})
export class MainCardComponent implements OnInit {
  @ViewChild("editMenu") editMenu!: MatMenuTrigger;
  @ViewChild("editBGMenu") editBGMenu!: MatMenuTrigger;
  public username!: string | null;
  editmode = true;
  user: any;
  imagesURLs!: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.imagesURLs = [
      { field: 'BackgroundURL', value: 'https://i.pinimg.com/originals/85/ad/c3/85adc3bfcb71282a1da80f30eb902395.png' },
      { field: 'BackgroundURL', value: 'https://www.pikpng.com/pngl/b/45-456227_transparent-black-border-border-clipart-education-black-and.png' },
      { field: 'BackgroundURL', value: 'https://i.pinimg.com/564x/06/f9/c3/06f9c329fdade1424131af26fc1f96b1.jpg' },
    ]
    this.username = this.route.snapshot.paramMap.get('username');
    const userData = null;//localStorage.getItem('user-data');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.user =
      {
        "templateSettings": [
          { "field": "BackgroundURL", "value": "https://www.pikpng.com/pngl/b/45-456227_transparent-black-border-border-clipart-education-black-and.png" }
        ],
        "presentation": [
          { "field": "ImageURL", "value": "https://avatars.githubusercontent.com/u/20101141?v=4" },
          { "field": "Name", "value": "John Lenin Ortiz Gamba" },
          { "field": "Profession", "value": "Full-Stack Engineer · Development Team Leader · BS Mechanical Engineering" },
          { "field": "Presentation", "value": "Senior Full-Stack Engineer and Team Leader with 15+ years of experience delivering production software across fintech, document automation, and AI-powered systems. Expert in Angular, React, NodeJS, and TypeScript, with a rare engineering background spanning frontend architecture, LLM orchestration, parametric CAD generation, spatial computing, and mechanical systems design. Builder of agentic AI ecosystems using MCP (Model Context Protocol), local LLM inference (Ollama), and immersive 3D interfaces (Three.js / React Three Fiber) with real-time hand and eye tracking via MediaPipe. Author of Agent Neo — a framework-agnostic Web Component conversational AI library supporting deterministic workflows, multi-turn LLM interactions, and parametric personas across React, Angular, and Vanilla JS. Former mechanical engineer with hands-on experience in FEM simulation, CNC design, and prototype manufacturing — bridging software and physical systems in ways most developers cannot." }
        ],
        "email": "johnleninortiz@gmail.com",
        "github": "github.com/rent-a-human",
        "mobile": "+57 302 568 8681",
        "location": "Colombia",
        "workExperiences": [
          [
            { "field": "CompanyLogoUrl", "value": "https://avatars.githubusercontent.com/u/6602522?s=200&v=4" },
            { "field": "CompanyName", "value": "Gravity / ClearGov (via Slabcode)" },
            { "field": "Period", "value": "Sep 2021 - Present" },
            { "field": "Position", "value": "Development Team Leader" },
            { "field": "Achievements", "value": "Led full-stack development of Gravity, a cloud-based Financial Close Management System serving enterprise clients across North America. Spearheaded migration of a legacy AngularJS codebase to Angular 14, delivering measurable performance improvements and a modernized UX. Architected and built Disclosure Studio — a state-of-the-art WYSIWYG financial report authoring tool featuring live PDF preview, rich-text and spreadsheet editors (CKEditor), client-side rendering (jsPDF), and server-side styled template generation via Adobe InDesign Server. Led upgrade of Google Workspace Add-ons from AngularJS to Svelte. Developed full-stack custom module integrations across Angular and Java (Spring Boot). Continued contributing post-acquisition through the ClearGov / LeadEdge merger." }
          ],
          [
            { "field": "CompanyLogoUrl", "value": "https://avatars.githubusercontent.com/u/20101141?v=4" },
            { "field": "CompanyName", "value": "rent-a-human / you-work (Personal Ecosystem)" },
            { "field": "Period", "value": "2024 - Present" },
            { "field": "Position", "value": "Founder · Engineer · AI Systems Designer" },
            { "field": "Achievements", "value": "Designed and built a four-application AI-native ecosystem from scratch. api-llm: LLM orchestration backend with dual-layer inference (Claude/Gemini cloud + Ollama local), parametric CAD generation via OpenJSCAD (Evolution Series: Shopping Cart to Scooter Hybrid with articulated suspension), and full MCP (Model Context Protocol) server implementation exposing filesystem, search, and CAD tools to agentic workflows. Agent Neo: authored a framework-agnostic conversational AI library distributed as a Web Component, compatible with React, Angular, and Vanilla JS; supports deterministic decision-tree workflows with skipIf logic and auto-execution, multi-turn LLM interactions, parametric persona switching, and LLM-triggered tool calling and report generation. jarvis-dashboard: immersive Iron Man-inspired holographic 3D control interface built with React Three Fiber and MediaPipe, featuring real-time hand tracking (custom Hand Raycaster), eye/gaze tracking for touchless spatial navigation, Agent Neo orchestration for multi-step cinematic workflows and digital PDF signing, real-time parametric modeling UI with Evolution Modules, and full Spanish/English i18n. chess-3d: conversational AI-integrated 3D chess with Agent Neo (Boris persona) tracking board state in real time, Stockfish WASM engine (levels 1-7), multiple immersive 3D environments, and Capacitor packaging for iOS/Android." }
          ],
          [
            { "field": "CompanyLogoUrl", "value": "https://avatars.githubusercontent.com/u/83523063?v=4" },
            { "field": "CompanyName", "value": "Olimpia SAS - MiFirma" },
            { "field": "Period", "value": "Feb 2021 - Sep 2021" },
            { "field": "Position", "value": "Frontend Developer" },
            { "field": "Achievements", "value": "Designed and built the MiFirma Office Add-in using Node.js, enabling seamless document signing through Microsoft Office integration. Implemented a biometric signature feature for PDF documents using Angular and dotNET Core, delivering a legally binding signing solution." }
          ],
          [
            { "field": "CompanyLogoUrl", "value": "assets/icons/slabcode.svg" },
            { "field": "CompanyName", "value": "Slabcode SAS" },
            { "field": "Period", "value": "Feb 2021 - Present" },
            { "field": "Position", "value": "Software Developer" },
            { "field": "Achievements", "value": "Delivered responsive, production-grade web and mobile applications using Angular, React Native, and Svelte across multiple client engagements. Applied modern design patterns and state management architectures to ensure scalable, maintainable codebases." }
          ],
          [
            { "field": "CompanyLogoUrl", "value": "assets/img/tera-logo.jpeg" },
            { "field": "CompanyName", "value": "IngeProyectos TERA" },
            { "field": "Period", "value": "Sep 2016 - Jan 2021" },
            { "field": "Position", "value": "Development Engineer" },
            { "field": "Achievements", "value": "Led end-to-end design and manufacturing of mechanical systems including CNC machines, mechanical ventilators for COVID-19 respiratory crises, and industrial fabric folding/unfolding machines. Applied CAD/CAM tools (SolidWorks, Autodesk Inventor) for 3D modeling and manufacturing. Conducted finite element simulations (FEM) for structural stress analysis. Built client-facing web applications and e-shops in PHP/MySQL. Developed spreadsheet automation using Excel VBA macros for the Virtual Drilling Engineering project in oil well drilling operations." }
          ],
          [
            { "field": "CompanyLogoUrl", "value": "assets/img/freelance.png" },
            { "field": "CompanyName", "value": "Freelance" },
            { "field": "Period", "value": "Feb 2006 - Oct 2009" },
            { "field": "Position", "value": "Web Developer" },
            { "field": "Achievements", "value": "Built and maintained PHP-based websites, WordPress and PrestaShop storefronts, desktop database systems in MS Access, and workflow automations using Excel VBA. First professional programming experience beginning at age 15." }
          ]
        ],
        "academicExperiences": [
          [
            { "field": "InstitutionLogoUrl", "value": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/USB_logo.svg/1920px-USB_logo.svg.png" },
            { "field": "InstitutionName", "value": "Universidad Simon Bolivar" },
            { "field": "Period", "value": "Sep 2010 - Jun 2016" },
            { "field": "DegreeAcquired", "value": "BS in Mechanical Engineering" },
            { "field": "Achievements", "value": "Thesis: Design and manufacture of a parabolic solar tracking dish coupled with a Stirling engine for solar energy harvesting — combining optical engineering, thermodynamics, and precision mechanical fabrication." }
          ],
          [
            { "field": "InstitutionLogoUrl", "value": "https://iesantateresadejesus.edu.co/wp-content/uploads/2020/05/favicon.jpg" },
            { "field": "InstitutionName", "value": "IE Santa Teresa de Jesus - CASD" },
            { "field": "Period", "value": "Jan 2003 - Dec 2005" },
            { "field": "DegreeAcquired", "value": "IT Certificate" },
            { "field": "Achievements", "value": "Foundational training in HTML, CSS, JavaScript, Visual Basic, PHP, MySQL, and MS Office. Began freelance web development professionally the following year at age 15." }
          ]
        ],
        "skills": [
          {
            "name": "Frontend",
            "type": "score",
            "content": [
              { "name": "Angular", "score": 95 },
              { "name": "React / React Native", "score": 88 },
              { "name": "Svelte", "score": 90 },
              { "name": "TypeScript", "score": 92 },
              { "name": "JavaScript", "score": 92 },
              { "name": "HTML / CSS", "score": 95 },
              { "name": "Three.js / R3F", "score": 84 },
              { "name": "Framer Motion", "score": 78 },
              { "name": "Tailwind CSS", "score": 85 },
              { "name": "Web Components", "score": 82 }
            ]
          },
          {
            "name": "Backend & Infrastructure",
            "type": "score",
            "content": [
              { "name": "Node.js", "score": 85 },
              { "name": "C# / VB.NET", "score": 80 },
              { "name": "Spring Boot / Java", "score": 72 },
              { "name": "PHP", "score": 72 },
              { "name": "C++", "score": 70 },
              { "name": "MySQL", "score": 82 },
              { "name": "PostgreSQL", "score": 78 },
              { "name": "MongoDB", "score": 76 },
              { "name": "Docker", "score": 68 }
            ]
          },
          {
            "name": "AI & Agentic Systems",
            "type": "score",
            "content": [
              { "name": "Agent Neo (author)", "score": 90 },
              { "name": "Claude / Gemini APIs", "score": 88 },
              { "name": "Ollama (local LLM)", "score": 85 },
              { "name": "LLM Orchestration", "score": 85 },
              { "name": "MCP SDK", "score": 82 },
              { "name": "Agentic Workflows", "score": 83 },
              { "name": "OpenJSCAD / JSCAD", "score": 78 }
            ]
          },
          {
            "name": "Spatial Computing & CV",
            "type": "score",
            "content": [
              { "name": "MediaPipe (hands/face)", "score": 82 },
              { "name": "Eye / Gaze Tracking", "score": 78 },
              { "name": "Spatial UI / XR", "score": 76 },
              { "name": "3D Raycasting", "score": 80 },
              { "name": "Environment Mapping", "score": 78 }
            ]
          },
          {
            "name": "Document & Publishing",
            "type": "score",
            "content": [
              { "name": "CKEditor (rich text)", "score": 88 },
              { "name": "jsPDF", "score": 85 },
              { "name": "Adobe InDesign Server", "score": 75 },
              { "name": "WYSIWYG Editors", "score": 90 },
              { "name": "DevExtreme", "score": 78 }
            ]
          },
          {
            "name": "Engineering & Hardware",
            "type": "image",
            "content": [
              { "name": "SolidWorks", "logoUrl": "assets/icons/sw.svg" },
              { "name": "Autodesk Inventor", "logoUrl": "assets/icons/inventor.svg" },
              { "name": "Blender", "logoUrl": "assets/icons/blender.svg" },
              { "name": "Arduino", "logoUrl": "assets/icons/arduino.svg" },
              { "name": "Raspberry Pi", "logoUrl": "assets/icons/raspberry.png" },
              { "name": "Proteus", "logoUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Proteus_Design_Suite_Atom_Logo.png/172px-Proteus_Design_Suite_Atom_Logo.png" },
              { "name": "Capacitor", "logoUrl": "https://capacitorjs.com/assets/img/meta/favicon.png" }
            ]
          },
          {
            "name": "IDE's & Dev Tools",
            "type": "image",
            "content": [
              { "name": "GIT", "logoUrl": "assets/icons/git.svg" },
              { "name": "VSCode", "logoUrl": "assets/icons/vscode.svg" },
              { "name": "IntelliJ", "logoUrl": "assets/icons/intellij.svg" },
              { "name": "JIRA", "logoUrl": "assets/icons/jira.svg" },
              { "name": "Figma", "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
              { "name": "Photoshop", "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" },
              { "name": "Docker", "logoUrl": "https://avatars.githubusercontent.com/u/5429470?s=200&v=4" },
              { "name": "Ruby on Rails", "logoUrl": "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png" }
            ]
          },
          {
            "name": "Interests",
            "type": "image",
            "content": [
              { "name": "NASA", "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" },
              { "name": "SpaceX", "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/3/36/SpaceX-Logo-Xonly.svg" },
              { "name": "Local AI / Ollama", "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
              { "name": "Dept. of Energy DOE", "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Seal_of_the_United_States_Department_of_Energy.svg" },
              { "name": "Renewable Energy", "logoUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Solar_panel_on_roof.jpg" }
            ]
          },
          {
            "name": "Languages",
            "type": "score",
            "content": [
              { "name": "Spanish", "score": 99 },
              { "name": "English", "score": 90 }
            ]
          }
        ]
      }
      this.saveData();
    }

    console.log(this.user.presentation)

  }

  saveData() {
    localStorage.setItem('user-data', JSON.stringify(this.user));
  }

  dismiss() {
    this.editMenu.closeMenu();
  }

  clearField() {

  }

  currentUrl() {
    return window.location.origin;
  }

  saveChanges(attribute: any) {
    this.saveData();
    this.dismiss();
  }

  captureEvent(event: any) {
    event.stopPropagation();
  }

}
