import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.less']
})
export class MainCardComponent implements OnInit {
  editmode = true;
  user: any;

  constructor() { }

  ngOnInit(): void {
    const userData = localStorage.getItem('user-data');
    if(userData) {
      this.user = JSON.parse(userData);
    } else {
      this.user = {
        name: 'John Lenin Ortiz Gamba',
        profession: "Web/App Developer & Engineer",
        presentation: "Software Developer with experience in Frontend and Backend Frameworks, 3D modeling & animation, industrial automation, oil well drilling planning & equipment, Robotics and Electronics. Passionate about developing prototypes, applications and using state-of-the-art technologies.",
        email: "lenincomp@gmail.com",
        github: "github.com/rent-a-human",
        mobile: "+573025688681",
        location: "Colombia",
        imgUrl: "https://avatars.githubusercontent.com/u/20101141?v=4",
        workExperiences: [{
          entityName: "IGM Technology",
          period: "Oct 2021 - Present",
          position: "Tech Lead Developer",
          achievements: "Full migration of legacy frontend angularJS application to Angular2+ Material",
          logoUrl: "https://avatars.githubusercontent.com/u/6602522?s=200&v=4"
        },
        {
          entityName: "Olimpia SAS - MiFirma",
          period: "Feb 2021 - Sep 2021",
          position: "Frontend Developer",
          achievements: "MS Office NodeJS Add-in and biometric signature implementations with Angular",
          logoUrl: "https://avatars.githubusercontent.com/u/83523063?v=4"
        },
        {
          entityName: "Slabcode SAS",
          period: "Feb 2021 - Present",
          position: "Frontend Developer",
          achievements: "Built stable and maintanable web solutions using React, Angular and Vanilla Javascript",
          logoUrl: "assets/icons/slabcode.svg"
        }],
        academicExperiences: [
          {
            entityName: "Universidad Simon Bolivar",
            period: "Sep 2010 - Jun 2016",
            position: "Mechanical Engineer",
            achievements: "Design and fabrication of a solar-tracker parabolic dish for adapting to a stirling engine",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/USB_logo.svg/1920px-USB_logo.svg.png"
          },
          {
            entityName: "IE Santa Teresa de Jesus - CASD",
            period: "Jan 2003 - Dec 2005",
            position: "IT Certificate",
            achievements: "HTML, CSS, JavaScript, Visual Basic, PHP, MySQL, MSOffice",
            logoUrl: "https://iesantateresadejesus.edu.co/wp-content/uploads/2020/05/favicon.jpg"
          }
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
    
    console.log(this.user)

  }

  saveData() {
    localStorage.setItem('user-data', JSON.stringify(this.user));
  }

}
