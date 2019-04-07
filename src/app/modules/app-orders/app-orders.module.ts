import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppOrdersComponent } from './pages/app-orders/app-orders.component';
import { AppOrdersRoutingModule } from './app-orders-routing.module';
import { SharedModule } from 'src/app/shared';
import { RoundTableComponent } from './pages/round-table/round-table.component';
import { SquareTableComponent } from './pages/square-table/square-table.component';
import { AppOrderComponent } from './pages/app-order/app-order.component';

@NgModule({
  imports: [
    CommonModule,
    AppOrdersRoutingModule,
    SharedModule
  ],
  declarations: [AppOrdersComponent, RoundTableComponent, SquareTableComponent, AppOrderComponent]
})
export class AppOrdersModule { }
