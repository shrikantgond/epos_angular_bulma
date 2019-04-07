import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppReportsComponent } from './pages/app-reports/app-reports.component';

const routes: Routes = [
  {
    path: '',
   component: AppReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppReportsRoutingModule { }