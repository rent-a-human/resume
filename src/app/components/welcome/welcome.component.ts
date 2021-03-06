import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  username: string = ''
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  openUser() {
    this.router.navigate([`/users/${this.username}`]);
  }

  redirect() {
    this.router.navigate([`/users/john`]);
  }

}
