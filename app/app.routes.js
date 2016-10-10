"use strict";
var router_1 = require('@angular/router');
var order_routes_1 = require('./order/order.routes');
var delivery_list_routes_1 = require('./deliverylist/delivery-list.routes');
var contacts_routes_1 = require('./contacts/contacts.routes');
// import { filtersRoutes }    from './filters/filters.routes';
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/order/create',
        pathMatch: 'full'
    }
].concat(order_routes_1.orderRoutes, delivery_list_routes_1.deliveryRoutes, contacts_routes_1.contactsRoutes);
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map