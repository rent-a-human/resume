import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.less']
})
export class MainCardComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
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
        { name: "Frontend", content: ["HTML", "CSS", "Javascript", "Angular", "AngularJS", "React", "Vue", "React Native", "Typescript"] },
        { name: "Backend", content: ["Spring Boot", "NodeJS", "Java", "C# - .NET", "PHP", "C++", "Visual Basic", "MySql", "Mongo" ] },
        { name: "IDE's & Development Tools", content: ["GIT", "SolidWorks", "IntelliJ", "VSCode", "Autodesk", "Photoshop", "Figma", "JIRA", "Proteus", "PLC", "Arduino", "Raspberry", "CNC"] },
        { name: "Languages", content: ["Spanish", "English"] },
      ]
    }
  }

}
