import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderChartReducer } from './reducers/orderchart.reducer';
import { OrderChartEffects } from './effects/orderchart.effects';
import { PaymentChartReducer } from './reducers/paymentchart.reducer';
import { PaymentChartEffects } from './effects/paymentchart.effects';
import { PaymentSummaryChartReducer } from './reducers/paymentsummarychart.reducer';
import { PaymentSummaryChartEffects } from './effects/paymentsummarychart.effects';
import { TileReducer } from './reducers/tile.reducer';
import { TileEffects } from './effects/tile.effects';
import { OrderStatusChartReducer } from './reducers/orderstatuschart.reducer';
import { OrderStatusChartEffects } from './effects/orderstatuschart.effects';
import { TopSellingReducer } from './reducers/topselling.reducer';
import { TopSellingEffects } from './effects/topselling.effects';
import { InventoryStatusReducer } from './reducers/inventorystatus.reducer';
import { InventoryStatusEffects } from './effects/inventorystatus.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    StoreModule.forFeature('orderchart', OrderChartReducer),
    StoreModule.forFeature('paymentchart', PaymentChartReducer),
    StoreModule.forFeature('paymentsummarychart', PaymentSummaryChartReducer),
    StoreModule.forFeature('tiles', TileReducer),
    StoreModule.forFeature('orderstatuschart', OrderStatusChartReducer),
    StoreModule.forFeature('topselling', TopSellingReducer),
    StoreModule.forFeature('inventorystatus', InventoryStatusReducer),
    EffectsModule.forFeature([OrderChartEffects,PaymentChartEffects,
      PaymentSummaryChartEffects,TileEffects,OrderStatusChartEffects,
    TopSellingEffects,InventoryStatusEffects])
  ],
  providers: []
})
export class DashboardStoreModule { }
