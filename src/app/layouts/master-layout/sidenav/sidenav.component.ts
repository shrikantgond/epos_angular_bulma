import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  selected_menu;

  constructor() { }

  ngOnInit() {
    this.selected_menu="dashboard";
  }

}
