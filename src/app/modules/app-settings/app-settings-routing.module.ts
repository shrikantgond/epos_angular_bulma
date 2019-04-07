import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppSettingsComponent } from './pages/app-settings/app-settings.component';

const routes: Routes = [
  {
    path: '',
   component: AppSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSettingsRoutingModule { }