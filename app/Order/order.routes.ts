// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { OrderCreateComponent }    from './order-create.component';

// Route Configuration
export const orderRoutes: Routes = [
  { path: 'order/create', component: OrderCreateComponent }
];