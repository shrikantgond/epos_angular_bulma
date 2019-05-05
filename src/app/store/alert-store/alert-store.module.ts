import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AlertReducer } from 'src/app/store/alert-store/alert';
import { AlertEffects } from 'src/app/store/alert-store/alert.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('alert', {alert:AlertReducer}),
    EffectsModule.forFeature([AlertEffects])
  ],
  providers: [AlertEffects] 
})
export class AlertStoreModule { }
