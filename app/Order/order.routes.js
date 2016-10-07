"use strict";
var order_get_component_1 = require('./order-get.component');
var order_create_component_1 = require('./order-create.component');
// Route Configuration
exports.orderRoutes = [
    { path: 'order', component: order_get_component_1.OrderGetComponent },
    { path: 'order/create', component: order_create_component_1.OrderCreateComponent }
];
//# sourceMappingURL=order.routes.js.map