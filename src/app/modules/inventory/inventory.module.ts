import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InventoryComponent]
})
export class InventoryModule { }
