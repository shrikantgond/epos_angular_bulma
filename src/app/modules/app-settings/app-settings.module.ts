import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsComponent } from './pages/app-settings/app-settings.component';
import { AppSettingsRoutingModule } from './app-settings-routing.module';
import { SharedModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    AppSettingsRoutingModule,
    SharedModule
  ],
  declarations: [AppSettingsComponent]
})
export class AppSettingsModule { }
