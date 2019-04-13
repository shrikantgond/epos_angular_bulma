import { Routes } from '@angular/router';

export const MODULE_ROUTES: Routes = [
  {
    path: '',
    loadChildren: 'src/app/modules/dashboard/dashboard.module#DashboardModule',
    data: { breadcrumb: 'dashboard' }
  },
  {
    path: 'orders',
    loadChildren: 'src/app/modules/app-orders/app-orders.module#AppOrdersModule',
    data: { breadcrumb: 'orders' }
  },
  {
    path: 'bills',
    loadChildren: 'src/app/modules/bills/bills.module#BillsModule',
    data: { breadcrumb: 'bills' }
  },
  {
    path: 'customers',
    loadChildren: 'src/app/modules/customers/customers.module#CustomersModule',
    data: { breadcrumb: 'customers' }
  },
  {
    path: 'menus',
    loadChildren: 'src/app/modules/app-menus/app-menus.module#AppMenusModule',
    data: { breadcrumb: 'menus' }
  },
  {
    path: 'inventory',
    loadChildren: 'src/app/modules/inventory/inventory.module#InventoryModule',
    data: { breadcrumb: 'inventory' }
  },
  {
    path: 'reports',
    loadChildren: 'src/app/modules/app-reports/app-reports.module#AppReportsModule',
    data: { breadcrumb: 'reports' }
  },
  {
    path: 'help',
    loadChildren: 'src/app/modules/help/help.module#HelpModule',
    data: { breadcrumb: 'help' }
  },
  {
    path: 'settings',
    loadChildren: 'src/app/modules/app-settings/app-settings.module#AppSettingsModule',
    data: { breadcrumb: 'settings' }
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }

];
