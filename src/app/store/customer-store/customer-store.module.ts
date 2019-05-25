import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomerReducer } from './reducers/customer.reducer';
import { CustomerEffects } from './effects/customer.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('customer', CustomerReducer),   
    EffectsModule.forFeature([CustomerEffects])
  ],
  providers: []
})
export class CustomerStoreModule { }
