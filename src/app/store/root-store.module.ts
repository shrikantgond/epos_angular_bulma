import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DashboardStoreModule } from './dashboard-store/dashboard-store.module';
import { OrderStoreModule } from './order-store/order-store.module';
import { InventoryStoreModule } from './inventory-store/inventory-store.module';
import { CustomerStoreModule } from './customer-store/customer-store.module';
import { BillStoreModule } from './bill-store/bill-store.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardStoreModule,
    OrderStoreModule,
    InventoryStoreModule,
    CustomerStoreModule,
    BillStoreModule,
    StoreModule.forRoot({}),//(initialReducerMap, { initialState: getInitialState }),
    EffectsModule.forRoot([]),//.forRoot([NewsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  declarations: []
})
export class RootStoreModule {}