import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './pages/help/help.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HelpComponent]
})
export class HelpModule { }
