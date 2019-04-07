import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './pages/help/help.component';
import { SharedModule } from '../../shared';
import { HelpRoutingModule } from './help-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HelpRoutingModule,
    SharedModule
  ],
  declarations: [HelpComponent]
})
export class HelpModule { }
