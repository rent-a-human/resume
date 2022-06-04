import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.less']
})
export class MainCardComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  user: any;

  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: 'John Lenin Ortiz Gamba',
      profession: "Web/App Developer & Engineer",
      presentation: "Bilingual professional (Spanish, English) with experience and skills in frontend & backend development, oil well drilling, pumping equipment, 3D modeling and printing, industrial automation, manufacturing and electronics. Passionate about developing prototypes, algorithms, applications and new products.",
      email: "lenincomp@gmail.com",
      github: "github.com/rent-a-human",
      mobile: "+573025688681",
      location: "Colombia",
      workExperiences: [{
        entityName: "IGM Technology",
        period: "Oct 2021 - Present",
        position: "Tech Lead Developer",
        achievements: "Full migration of legacy angularJS app to Angular Material",
        logoUrl: "https://avatars.githubusercontent.com/u/6602522?s=200&v=4"
      },
      {
        entityName: "Olimpia SAS - MiFirma",
        period: "Feb 2021 - Sep 2021",
        position: "Frontend Developer",
        achievements: "MS Office Add-in and biometric signature Implementations",
        logoUrl: "https://avatars.githubusercontent.com/u/83523063?v=4"
      }],
      academicExperiences: [
        {
          entityName: "Universidad Simon Bolivar",
          period: "Sep 2010 - Jun 2016",
          position: "Mechanical Engineer",
          achievements: "Design and fabrication of a solar parabolic dish for adapting to a solar stirling engine",
          logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/USB_logo.svg/1920px-USB_logo.svg.png"
        },
        {
          entityName: "IE Santa Teresa de Jesus - CASD",
          period: "Jan 2000 - Dec 2005",
          position: "IT Certificate",
          achievements: "HTML, CSS, JavaScript, Visual Basic, PHP, MySQL, MSOffice",
          logoUrl: "https://iesantateresadejesus.edu.co/wp-content/uploads/2020/05/favicon.jpg"
        }
      ]
    }
  }

}
