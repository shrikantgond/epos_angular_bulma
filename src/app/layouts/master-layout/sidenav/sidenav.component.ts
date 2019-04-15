import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  selected_menu;

  constructor(private route: Router) { 
    this.routeEvent(this.route);
  }

  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let url = e.url.substring(1,e.url.length);
        if (url.indexOf("/")>0) {
          url = url.substring(0,url.indexOf("/"));
        }
        this.selected_menu = url;
        console.log(this.selected_menu);
      }

    });
  }

  ngOnInit() {
    //this.selected_menu="";
  }

}
