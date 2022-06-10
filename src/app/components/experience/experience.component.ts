import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {
  @ViewChild("editMenu") editMenu!: MatMenuTrigger;
  @Input() experience: any;
  @Input() editmode!: boolean;
  constructor() { }

  ngOnInit(): void {
    
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
