import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppOrdersComponent } from './pages/app-orders/app-orders.component';
import { AppOrderComponent } from './pages/app-order/app-order.component';

const routes: Routes = [
  {
    path: '',
   component: AppOrdersComponent,
   data: {breadcrumb: 'orders'},
  },
  {
    path: 'order/:id',
   component: AppOrderComponent,
   data: {breadcrumb: 'order'},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppOrdersRoutingModule { }