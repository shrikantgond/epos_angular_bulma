import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppReportsComponent } from './pages/app-reports/app-reports.component';
import { AppReportsRoutingModule } from './app-reports-routing.module';
import { SharedModule } from 'src/app/shared';

@NgModule({
  imports: [
    CommonModule,
    AppReportsRoutingModule,
    SharedModule
  ],
  declarations: [AppReportsComponent]
})
export class AppReportsModule { }
