import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './pages/customers/customers.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }
