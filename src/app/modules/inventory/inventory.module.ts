import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { SharedModule } from '../../shared';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryListComponent } from './pages/inventory-list/inventory-list.component';
import { VendorListComponent } from './pages/vendor-list/vendor-list.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule
  ],
  declarations: [InventoryComponent, InventoryListComponent, VendorListComponent]
})
export class InventoryModule { }
