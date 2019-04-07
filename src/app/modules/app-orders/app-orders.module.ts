import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppOrdersComponent } from './pages/app-orders/app-orders.component';
import { AppOrdersRoutingModule } from './app-orders-routing.module';
import { SharedModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    AppOrdersRoutingModule,
    SharedModule
  ],
  declarations: [AppOrdersComponent]
})
export class AppOrdersModule { }
