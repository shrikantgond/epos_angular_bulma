import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEffects } from './dashboard-store.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardReducer } from './dashboard-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('dashboard', {dashboard:DashboardReducer}),
    EffectsModule.forFeature([DashboardEffects])
  ],
  providers: [DashboardEffects]
})
export class DashboardStoreModule { }
