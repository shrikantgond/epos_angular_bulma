import { Routes } from '@angular/router';

export const MODULE_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: '../modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'orders',
    loadChildren: '../modules/orders/orders.module#OrdersModule'
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
    loadChildren: '../modules/menus/menus.module#MenusModule'
  },
  {
    path: 'inventory',
    loadChildren: '../modules/inventory/inventory.module#InventoryModule'
  },
  {
    path: 'reports',
    loadChildren: '../modules/reports/reports.module#ReportsModule'
  },
  {
    path: 'help',
    loadChildren: '../modules/help/help.module#HelpModule'
  },
  {
    path: 'settings',
    loadChildren: '../modules/contact/contact.module#SettingsModule'
  }
  
];
