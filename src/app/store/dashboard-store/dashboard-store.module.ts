import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEffects } from './dashboard-store.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { OrderChartReducer } from './reducers/orderchart.reducer';
import { OrderChartEffects } from './effects/orderchart.effects';
import { PaymentChartReducer } from './reducers/paymentchart.reducer';
import { PaymentChartEffects } from './effects/paymentchart.effects';
import { PaymentSummaryChartReducer } from './reducers/paymentsummarychart.reducer';
import { PaymentSummaryChartEffects } from './effects/paymentsummarychart.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    //StoreModule.forFeature('dashboard', {DashboardReducer}),
    StoreModule.forFeature('orderchart', OrderChartReducer),
    StoreModule.forFeature('paymentchart', PaymentChartReducer),
    StoreModule.forFeature('paymentsummarychart', PaymentSummaryChartReducer),
    EffectsModule.forFeature([OrderChartEffects,PaymentChartEffects,PaymentSummaryChartEffects])
  ],
  providers: [OrderChartEffects,PaymentChartEffects,PaymentSummaryChartEffects]
})
export class DashboardStoreModule { }
