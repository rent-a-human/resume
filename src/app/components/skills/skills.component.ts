import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {
  @Input() skill: any;
  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {

  }

}
