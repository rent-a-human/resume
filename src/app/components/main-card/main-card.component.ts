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
      this.user = {
        templateSettings: [
          { field: 'BackgroundURL', value: 'https://www.pikpng.com/pngl/b/45-456227_transparent-black-border-border-clipart-education-black-and.png' }
        ],
        presentation: [
          { field: 'ImageURL', value: 'https://avatars.githubusercontent.com/u/20101141?v=4' },
          { field: 'Name', value: 'John Lenin Ortiz Gamba' },
          { field: 'Profession', value: "Software Developer / Bachelor of Science in Mechanical Engineering" },
          { field: 'Presentation', value: "Expert in Angular, React Native, Svelte, JavaScript, NodeJS, Java, Spring Boot, .NET, Mongo, Postgres and SQL, I'm also familiar with 3D modeling, animation & simulation, industrial automation, robotics and electronics. Passionate about developing prototypes, applications and using state-of-the-art cutting-edge technologies. I hope to one day be working in NASA, SpaceX or Colombian Space Force." }
        ],
        email: "lenincomp@gmail.com",
        github: "github.com/rent-a-human",
        mobile: "+57 3025688681",
        location: "Colombia",
        workExperiences: [[
          { field: 'CompanyLogoUrl', value: 'https://avatars.githubusercontent.com/u/6602522?s=200&v=4' },
          { field: 'CompanyName', value: 'IGM Technology' },
          { field: 'Period', value: 'Oct 2021 - Present' },
          { field: 'Position', value: 'Tech Lead / Developer' },
          { field: 'Achievements', value: 'Project: Gravity: Cloud Based Financial Close Management System. Implemented full migration of legacy frontend angularJS application to Angular14 using Material Design. Upgraded angularJS codebase of Google AddOns to Svelte. Lead and participated in development of fullstack custom module implementations (Angular + Java)' }
        ],
        [
          { field: 'CompanyLogoUrl', value: 'https://avatars.githubusercontent.com/u/83523063?v=4' },
          { field: 'CompanyName', value: 'Olimpia SAS - MiFirma' },
          { field: 'Period', value: 'Feb 2021 - Sep 2021' },
          { field: 'Position', value: 'Frontend Developer' },
          { field: 'Achievements', value: 'Project: MiFirma: MiFirma\'s Office Add-in (NodeJS) and MiFirma: Biometric Signature for PDF documents (Angular + .NET Core).' }
        ],
        [
          { field: 'CompanyLogoUrl', value: 'assets/icons/slabcode.svg' },
          { field: 'CompanyName', value: 'Slabcode SAS' },
          { field: 'Period', value: 'Feb 2021 - Present' },
          { field: 'Position', value: 'Frontend Developer' },
          { field: 'Achievements', value: 'Built and maintain customer\'s web solutions.' }
        ],
        [
          { field: 'CompanyLogoUrl', value: 'assets/img/tera-logo.jpeg' },
          { field: 'CompanyName', value: 'IngeProyectos TERA' },
          { field: 'Period', value: 'Sep 2016 - Jan 2021' },
          { field: 'Position', value: 'Product Development Engineer' },
          { field: 'Achievements', value: 'Product development from conceptualization to manufacturing, including: various CNC screen printing machines, mechanical ventilators for patients with COVID type respiratory crisis, machines to fold and unfold fabrics, used general CAD & CAM tools for 3D modeling and manufacturing, applied finite element simulations for stress analysis, created various landing pages and e-shops for small companies (PHP + MySQL). Implemented Spreadsheet automation with macros in oil well drilling Project: Virtual Drilling Enginnering' }
        ],
        [
          { field: 'CompanyLogoUrl', value: 'assets/img/freelance.png' },
          { field: 'CompanyName', value: 'Freelance' },
          { field: 'Period', value: 'Feb 2006 - Oct 2009' },
          { field: 'Position', value: 'Other' },
          { field: 'Achievements', value: 'Build and mantain PHP based websites. Build Wordpress & PrestaShop landing pages. Developed desktop data base systems using MS Access. Taught English and systems private lessons. Assited students developing academic projects.' }
        ],
        ],
        academicExperiences: [
          [
            { field: 'InstitutionLogoUrl', value: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/USB_logo.svg/1920px-USB_logo.svg.png' },
            { field: 'InstitutionName', value: 'Universidad Simon Bolivar' },
            { field: 'Period', value: 'Sep 2010 - Jun 2016' },
            { field: 'DegreeAcquired', value: 'BS in Mechanical Engineering' },
            { field: 'Achievements', value: 'Design and manufacture of a parabolic solar tracking dish and its coupling with a Stirling engine to harness solar energy.' }
          ],
          [
            { field: 'InstitutionLogoUrl', value: 'https://iesantateresadejesus.edu.co/wp-content/uploads/2020/05/favicon.jpg' },
            { field: 'InstitutionName', value: 'IE Santa Teresa de Jesus - CASD' },
            { field: 'Period', value: 'Jan 2003 - Dec 2005' },
            { field: 'DegreeAcquired', value: 'IT Certificate' },
            { field: 'Achievements', value: 'HTML, CSS, JavaScript, Visual Basic, PHP, MySQL, MSOffice' }
          ]
        ],
        skills: [
          {
            name: "Frontend", type: 'score', content: [
              { name: "Angular", score: 90 },
              { name: "AngularJS", score: 80 },
              { name: "HTML", score: 95 },
              { name: "CSS", score: 95 },
              { name: "JavaScript", score: 90 },
              { name: "TypeScript", score: 90 },
              { name: "React", score: 80 },
              { name: "React Native", score: 90 },
              { name: "Svelte", score: 90 },

            ]
          },
          {
            name: "Backend", type: 'score', content: [
              { name: "NodeJS", score: 80 },
              { name: "C#-Vb.Net", score: 80 },
              { name: "Spring Boot - Java", score: 70 },
              { name: "PHP", score: 70 },
              { name: "C++", score: 70 },
              { name: "MySQL", score: 80 },
              { name: "Postgres", score: 75 },
              { name: "Mongo", score: 75 },
              { name: "Docker", score: 60 }
            ]
          },
          {
            name: "IDE's & Development Tools", type: 'image', content: [
              { name: "GIT", logoUrl: 'assets/icons/git.svg' },
              { name: "SolidWorks", logoUrl: 'assets/icons/sw.svg' },
              { name: "IntelliJ", logoUrl: 'assets/icons/intellij.svg' },
              { name: "VSCode", logoUrl: 'assets/icons/vscode.svg' },
              { name: "Autodesk", logoUrl: 'assets/icons/inventor.svg' },
              { name: "Photoshop", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
              { name: "Figma", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
              { name: "JIRA", logoUrl: 'assets/icons/jira.svg' },
              { name: "Proteus", logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Proteus_Design_Suite_Atom_Logo.png/172px-Proteus_Design_Suite_Atom_Logo.png' },
              { name: "Arduino", logoUrl: 'assets/icons/arduino.svg' },
              { name: "Raspberry", logoUrl: 'assets/icons/raspberry.png' },
              { name: "Blender", logoUrl: 'assets/icons/blender.svg' },
              { name: "Flutter", logoUrl: 'https://raw.githubusercontent.com/dnfield/flutter_svg/7d374d7107561cbd906d7c0ca26fef02cc01e7c8/example/assets/flutter_logo.svg'},
              { name: "Docker", logoUrl: 'https://avatars.githubusercontent.com/u/5429470?s=200&v=4'},
              { name: "Ruby on Rails", logoUrl: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-512.png'}
              
            ]
          },
          {
            name: "Interests", type: 'image', content: [
              { name: "Nasa", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg' },
              { name: "SpaceX", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/SpaceX-Logo-Xonly.svg' },
              { name: "ChatGPT", logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' }
            ]
          },
          {
            name: "Languages", type: 'score', content: [
              { name: "Spanish", score: 99 },
              { name: "English", score: 90 }
            ]
          },
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
