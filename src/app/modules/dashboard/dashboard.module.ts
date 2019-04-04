import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TileComponent } from './pages/tile/tile.component';
import { PaymentChartComponent } from './pages/payment-chart/payment-chart.component';
import { OrderChartComponent } from './pages/order-chart/order-chart.component';
import { PaymentSummeryChartComponent } from './pages/payment-summery-chart/payment-summery-chart.component';
import { OrderStatusChartComponent } from './pages/order-status-chart/order-status-chart.component';
import { SaleStatusChartComponent } from './pages/sale-status-chart/sale-status-chart.component';
import { TopSellingComponent } from './pages/top-selling/top-selling.component';
import { InventoryStatusComponent } from './pages/inventory-status/inventory-status.component';
import { DashboardRoutes } from './dashboard-routing.module';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes, 
    SharedModule
  ],
  declarations: [DashboardComponent, TileComponent, PaymentChartComponent, OrderChartComponent, PaymentSummeryChartComponent, OrderStatusChartComponent, SaleStatusChartComponent, TopSellingComponent, InventoryStatusComponent]
})
export class DashboardModule { }
