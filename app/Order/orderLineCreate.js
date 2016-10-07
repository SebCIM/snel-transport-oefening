"use strict";
var orderLineCreate = (function () {
    function orderLineCreate(id, name, category, code, price, quantity, total) {
        this.Id = id;
        this.name = name;
        this.category = category;
        this.code = code;
        this.price = price;
        this.quantity = quantity;
        this.total = total;
    }
    orderLineCreate.prototype.getQuantity = function () {
        return this.quantity;
    };
    orderLineCreate.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
        this.setnewPrice(quantity);
    };
    orderLineCreate.prototype.setnewPrice = function (quantity) {
        this.total = this.price * quantity;
    };
    return orderLineCreate;
}());
exports.orderLineCreate = orderLineCreate;
//# sourceMappingURL=orderLineCreate.js.map