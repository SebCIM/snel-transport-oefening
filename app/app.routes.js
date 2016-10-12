"use strict";
var router_1 = require('@angular/router');
var order_routes_1 = require('./order/order.routes');
var contacts_routes_1 = require('./contacts/contacts.routes');
var order_list_routes_1 = require('./orderlist/order-list.routes');
// import { filtersRoutes }    from './filters/filters.routes';
var delivery_list_routes_1 = require('./deliverylist/delivery-list.routes');
// Route Configuration
exports.routes = [
    {
        path: '',
        redirectTo: '/order/create',
        pathMatch: 'full'
    }
].concat(order_routes_1.orderRoutes, contacts_routes_1.contactsRoutes, order_list_routes_1.orderListRoutes, delivery_list_routes_1.deliveryRoutes);
// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map