import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BillReducer } from './reducers/bill.reducer';
import { BillEffects } from './effects/bill.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('bill', BillReducer),
    EffectsModule.forFeature([BillEffects])
  ],
  providers: []
})
export class BillStoreModule { }
