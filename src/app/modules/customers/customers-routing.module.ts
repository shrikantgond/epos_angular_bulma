import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';

const routes: Routes = [
  {
    path: '',
   component: CustomersComponent
  },
  {
    path: 'profile',
   component: CustomerProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }