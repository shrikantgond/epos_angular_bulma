import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMenusComponent } from './pages/app-menus/app-menus.component';
import { AppMenusRoutingModule } from './app-menus-routing.module';
import { SharedModule } from 'src/app/shared';
import { MenuDetailsComponent } from './pages/menu-details/menu-details.component';

@NgModule({
  imports: [
    CommonModule,
    AppMenusRoutingModule,
    SharedModule
  ],
  declarations: [AppMenusComponent, MenuDetailsComponent]
})
export class AppMenusModule { }
