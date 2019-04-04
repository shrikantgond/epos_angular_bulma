import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';

import { MODULE_ROUTES } from './shared';

//import { NoAuthGuard } from './core';

const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/auth/login',
//     pathMatch: 'full'
//   },
  {
    path: '',
    component: MasterLayoutComponent,
    // canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: MODULE_ROUTES
  },
//   {
//     path: 'auth',
//     component: AuthLayoutComponent,
//     loadChildren: './modules/auth/auth.module#AuthModule'
//   },
  // Fallback when no prior routes is matched
//   { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
