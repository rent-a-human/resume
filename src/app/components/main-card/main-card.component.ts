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
          { field: 'Profession', value: "Software Developer / BS in Mechanical Engineering" },
          { field: 'Presentation', value: "Software Developer with experience in Frontend and Backend Frameworks (AngularJS, Angular, React, Vue, Javascript, NodeJS, Java, .NET ), I'm also familiar with 3D modeling & animation, industrial automation, robotics and electronics. Passionate about developing prototypes, applications and using state-of-the-art technologies." }
        ],
        email: "lenincomp@gmail.com",
        github: "github.com/rent-a-human",
        mobile: "+573025688681",
        location: "Colombia",
        workExperiences: [[
          { field: 'CompanyLogoUrl', value: 'https://avatars.githubusercontent.com/u/6602522?s=200&v=4' },
          { field: 'CompanyName', value: 'IGM Technology' },
          { field: 'Period', value: 'Oct 2021 - Present' },
          { field: 'Position', value: 'Tech Lead Developer' },
          { field: 'Achievements', value: 'Project: Gravity: Cloud Based Financial Close Management System. Implemented full migration of legacy frontend angularJS application to Angular2+ Material' }
        ],
        [
          { field: 'CompanyLogoUrl', value: 'https://avatars.githubusercontent.com/u/83523063?v=4' },
          { field: 'CompanyName', value: 'Olimpia SAS - MiFirma' },
          { field: 'Period', value: 'Feb 2021 - Sep 2021' },
          { field: 'Position', value: 'Frontend Developer' },
          { field: 'Achievements', value: 'Project: MiFirma: MiFirma\'s Office Add-in (NodeJS) and MiFirma: Biometric Signature for PDF documents (Angular + .net Core).' }
        ],
        [
          { field: 'CompanyLogoUrl', value: 'assets/icons/slabcode.svg' },
          { field: 'CompanyName', value: 'Slabcode SAS' },
          { field: 'Period', value: 'Feb 2021 - Present' },
          { field: 'Position', value: 'Frontend Developer' },
          { field: 'Achievements', value: 'Built and maintain clients web solutions (React, Angular, Javascript)' }
        ],
        [
          { field: 'CompanyLogoUrl', value: 'assets/img/tera-logo.jpeg' },
          { field: 'CompanyName', value: 'IngeProyectos TERA' },
          { field: 'Period', value: 'Sep 2016 - Jan 2021' },
          { field: 'Position', value: 'Product Development Engineer' },
          { field: 'Achievements', value: 'Product development from conceptualization to manufacturing, including: various CNC screen printing machines, mechanical ventilators for patients with COVID type respiratory crisis, machines to fold and unfold fabrics, used general CAD & CAM tools for 3D modeling and manufacturing, created various landing pages and e-shops for small companies. Implemented Spreadsheet automation with macros in oil well drilling Project: Virtual Drilling Enginnering' }
        ],
        [
          { field: 'CompanyLogoUrl', value: 'assets/img/freelance.png' },
          { field: 'CompanyName', value: 'Freelance' },
          { field: 'Period', value: 'Feb 2006 - Oct 2009' },
          { field: 'Position', value: 'Other' },
          { field: 'Achievements', value: 'Build and mantain PHP based websites. Build Wordpress & PrestaShop landing pages. Developed desktop data base systems using MS Access. Taught English and systems private lessons. Help students developing academic projects.' }
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
              { name: "HTML", score: 90 },
              { name: "CSS", score: 90 },
              { name: "JavaScript", score: 90 },
              { name: "TypeScript", score: 90 },
              { name: "Angular", score: 90 },
              { name: "AngularJS", score: 70 },
              { name: "React", score: 80 },
              { name: "Vue", score: 60 },
              { name: "React Native", score: 70 },
            ]
          },
          {
            name: "Backend", type: 'score', content: [
              { name: "Spring Boot", score: 70 },
              { name: "NodeJS", score: 70 },
              { name: "Java", score: 60 },
              { name: "C#-Vb.Net", score: 70 },
              { name: "PHP", score: 70 },
              { name: "C++", score: 70 },
              { name: "MySQL", score: 80 },
              { name: "Mongo", score: 60 },
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
              { name: "Blender", logoUrl: 'assets/icons/blender.svg' }
            ]
          },
          {
            name: "Languages", type: 'score', content: [
              { name: "Spanish", score: 100 },
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
