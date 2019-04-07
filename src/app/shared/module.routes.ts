import { Routes } from '@angular/router';

export const MODULE_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: '../modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'orders',
    loadChildren: '../modules/app-orders/app-orders.module#AppOrdersModule'
  },
  {
    path: 'bills',
    loadChildren: '../modules/bills/bills.module#BillsModule'
  },
  {
    path: 'customers',
    loadChildren: '../modules/customers/customers.module#CustomersModule'
  },
  {
    path: 'menus',
    loadChildren: '../modules/app-menus/app-menus.module#AppMenusModule'
  },
  {
    path: 'inventory',
    loadChildren: '../modules/inventory/inventory.module#InventoryModule'
  },
  {
    path: 'reports',
    loadChildren: '../modules/app-reports/app-reports.module#AppReportsModule'
  },
  {
    path: 'help',
    loadChildren: '../modules/help/help.module#HelpModule'
  },
  {
    path: 'settings',
    loadChildren: '../modules/app-settings/app-settings.module#AppSettingsModule'
  }
  
];
