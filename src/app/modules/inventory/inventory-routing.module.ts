import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { InventoryComponent } from './pages/inventory/inventory.component';

const routes: Routes = [
  {
    path: '',
   component: InventoryComponent,
   data: {breadcrumb: 'inventory'},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }