import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TableReducer } from './reducers/table.reducer';
import { TableEffects } from './effects/table.effects';
import { MenuReducer } from './reducers/menu.reducer';
import { MenuEffects } from './effects/menu.effects';
import { OrderReducer } from './reducers/order.reducer';
import { OrderEffects } from './effects/order.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('table', TableReducer),
    StoreModule.forFeature('menu', MenuReducer),
    StoreModule.forFeature('order', OrderReducer),
    EffectsModule.forFeature([TableEffects,MenuEffects,OrderEffects])
  ],
  providers: []
})
export class OrderStoreModule { }
