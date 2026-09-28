import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { RESUME_DATA } from '../../data/resume-data';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.less']
})
export class MainCardComponent implements OnInit {
  @ViewChild("editMenu") editMenu!: MatMenuTrigger;
  @ViewChild("editBGMenu") editBGMenu!: MatMenuTrigger;
  public username!: string | null;
  editmode = false;
  atsMode = false;
  user: any;
  imagesURLs!: any[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.imagesURLs = [
      { field: 'BackgroundURL', value: 'https://i.pinimg.com/originals/85/ad/c3/85adc3bfcb71282a1da80f30eb902395.png' },
      { field: 'BackgroundURL', value: 'https://www.pikpng.com/pngl/b/45-456227_transparent-black-border-border-clipart-education-black-and.png' },
      { field: 'BackgroundURL', value: 'https://i.pinimg.com/564x/06/f9/c3/06f9c329fdade1424131af26fc1f96b1.jpg' },
    ];
    this.username = this.route.snapshot.paramMap.get('username');
    this.loadUserData();
  }

  loadUserData() {
    const userData = typeof localStorage !== 'undefined' ? localStorage.getItem('user-data-v2') : null;
    if (userData) {
      try {
        this.user = JSON.parse(userData);
      } catch (e) {
        this.resetToDefault();
      }
    } else {
      this.resetToDefault();
    }
  }

  resetToDefault() {
    this.user = JSON.parse(JSON.stringify(RESUME_DATA));
    this.saveData();
  }

  saveData() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('user-data-v2', JSON.stringify(this.user));
    }
  }

  toggleAtsMode() {
    this.atsMode = !this.atsMode;
  }

  printResume() {
    if (typeof window !== 'undefined') {
      window.print();
    }
  }

  dismiss() {
    if (this.editMenu) {
      this.editMenu.closeMenu();
    }
  }

  clearField() {
  }

  currentUrl() {
    if (typeof window !== 'undefined' && window.location) {
      return window.location.origin;
    }
    return 'https://ui-guy-resume.netlify.app';
  }

  saveChanges(attribute: any) {
    this.saveData();
    this.dismiss();
  }

  captureEvent(event: any) {
    event.stopPropagation();
  }
}
