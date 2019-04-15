import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BillsComponent } from './pages/bills/bills.component';

const routes: Routes = [
  {
    path: '',
   component: BillsComponent,
   data: {breadcrumb: 'bills'},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule { }