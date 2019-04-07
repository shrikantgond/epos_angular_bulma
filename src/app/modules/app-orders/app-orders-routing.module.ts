import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppOrdersComponent } from './pages/app-orders/app-orders.component';

const routes: Routes = [
  {
    path: '',
   component: AppOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppOrdersRoutingModule { }