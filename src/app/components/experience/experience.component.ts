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
    if (this.experience && this.experience[4] && this.experience[4].value) {
      // Split by dot followed by whitespace or end of line, avoiding splitting decimal numbers like 5.04 or v1.5
      this.splittedExperience = this.experience[4].value
        .split(/(?<=\b[a-zA-Z0-9\)]+)\.\s+/)
        .map((s: string) => s.trim())
        .filter((s: string) => s.length > 0);
    }
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
