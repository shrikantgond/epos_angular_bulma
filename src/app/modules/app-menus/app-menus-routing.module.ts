import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppMenusComponent } from './pages/app-menus/app-menus.component';

const routes: Routes = [
  {
    path: '',
   component: AppMenusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppMenusRoutingModule { }