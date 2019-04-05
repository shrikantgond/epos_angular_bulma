import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillsComponent } from './pages/bills/bills.component';
import { SharedModule } from '../../shared';
import { BillsRoutingModule } from './bills-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BillsRoutingModule, 
    SharedModule
  ],
  declarations: [BillsComponent]
})
export class BillsModule { }
