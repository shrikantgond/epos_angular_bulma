import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { SidenavComponent } from './layouts/master-layout/sidenav/sidenav.component';

import { SharedModule } from './shared';
import { TopnavComponent } from './layouts/master-layout/topnav/topnav.component'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MasterLayoutComponent,
    SidenavComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,

    // app
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
