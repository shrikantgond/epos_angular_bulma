import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { InventoryReducer } from './reducers/inventory.reducer';
import { InventoryEffects } from './effects/inventory.effects';
import { VendorReducer } from './reducers/vendor.reducer';
import { VendorEffects } from './effects/vendor.effects';
// import { TableReducer } from './reducers/table.reducer';
// import { TableEffects } from './effects/table.effects';
// import { MenuReducer } from './reducers/menu.reducer';
// import { MenuEffects } from './effects/menu.effects';
// import { OrderReducer } from './reducers/order.reducer';
// import { OrderEffects } from './effects/order.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('inventory', InventoryReducer),
    StoreModule.forFeature('vendor', VendorReducer),
    // StoreModule.forFeature('order', OrderReducer),
    EffectsModule.forFeature([InventoryEffects, VendorEffects])
  ],
  providers: []
})
export class InventoryStoreModule { }
