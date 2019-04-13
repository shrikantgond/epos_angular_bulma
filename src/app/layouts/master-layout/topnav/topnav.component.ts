import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  toggle = false;
  breadcrumbs: BreadCrumb[];
  activatedRoute: ActivatedRoute;
  constructor(private route: Router, activatedRoute: ActivatedRoute) {

    this.routeEvent(this.route);
    this.activatedRoute= activatedRoute;
  }
  routeEvent(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        //console.log(e.url.split("/"));

        this.toggle = false;
      }

      if (e instanceof NavigationEnd) {
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
        this.breadcrumbs[this.breadcrumbs.length-1].is_active=true;
        console.log(this.breadcrumbs);

      }

    });
  }

  ngOnInit() {
  }

  buildBreadCrumb(route: ActivatedRoute, url: string = '',
    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
      //console.log(route.routeConfig);
      
    //If no routeConfig is avalailable we are on the root path
    const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : 'home';
    const path = route.routeConfig ? route.routeConfig.path : '';
    //In the routeConfig the complete path is not available, 
    //so we rebuild it each time    
    const nextUrl = path;//`${url}${path}`;
    const breadcrumb = {
      label: label,
      url: nextUrl,
      is_active:false,
    };
    let newBreadcrumbs = breadcrumbs;
    if (!breadcrumbs.find(b=>b.url === breadcrumb.url)) {
      newBreadcrumbs = [...breadcrumbs, breadcrumb];
      //console.log(newBreadcrumbs);  
    }
    
    if (route.firstChild) {
      //console.log(route.firstChild);
      //If we are not on our current path yet, 
      //there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}

export interface BreadCrumb {
  label: string;
  url: string;
  is_active:boolean; 
};
