import { Routes } from '@angular/router';

export const MODULE_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  // {
  //   path: 'orders',
  //   loadChildren: './modules/about/about.module#AboutModule'
  // },
  // {
  //   path: 'bills',
  //   loadChildren: './modules/contact/contact.module#ContactModule'
  // },
  // {
  //   path: 'customers',
  //   loadChildren: './modules/contact/contact.module#ContactModule'
  // },
  // {
  //   path: 'menus',
  //   loadChildren: './modules/contact/contact.module#ContactModule'
  // },
  // {
  //   path: 'inventory',
  //   loadChildren: './modules/contact/contact.module#ContactModule'
  // },
  // {
  //   path: 'reports',
  //   loadChildren: './modules/contact/contact.module#ContactModule'
  // },
  // {
  //   path: 'helpcenter',
  //   loadChildren: './modules/contact/contact.module#ContactModule'
  // },
  // {
  //   path: 'settings',
  //   loadChildren: './modules/contact/contact.module#ContactModule'
  // }
  
];
