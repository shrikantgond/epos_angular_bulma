import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './pages/customers/customers.component';
import { SharedModule } from '../../shared';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerProfileComponent } from './pages/customer-profile/customer-profile.component';
import { CustomerTopOrdersComponent } from './pages/customer-top-orders/customer-top-orders.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ],
  declarations: [CustomersComponent, CustomerProfileComponent, CustomerTopOrdersComponent, CustomerListComponent]
})
export class CustomersModule { }
