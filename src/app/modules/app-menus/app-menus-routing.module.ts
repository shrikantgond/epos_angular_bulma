import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppMenusComponent } from './pages/app-menus/app-menus.component';
import { MenuDetailsComponent } from './pages/menu-details/menu-details.component';

const routes: Routes = [
  {
    path: '',
   component: AppMenusComponent
  },
  {
    path: 'menu-details',
   component: MenuDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMenusRoutingModule { }