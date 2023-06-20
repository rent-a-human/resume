import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {
  splittedExperience: any;
  @ViewChild("editMenu") editMenu!: MatMenuTrigger;
  @Input() experience: any;
  @Input() editmode!: boolean;
  constructor() { }

  ngOnInit(): void {
    this.splittedExperience = this.experience[4].value.split('.')
  }

  captureEvent(event: any) {
    event.stopPropagation();
  }

  dismiss() {
    this.editMenu.closeMenu();
  }

  saveChanges(att: any) {
    this.dismiss()
  }

}
