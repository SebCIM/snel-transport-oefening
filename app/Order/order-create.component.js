"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Imports
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var orderLineCreate_1 = require('./orderLineCreate');
var notifications_model_1 = require('../notifications/notifications.model');
var notifications_service_1 = require('../notifications/notifications.service');
var OrderCreateComponent = (function () {
    function OrderCreateComponent(http, _notes) {
        this.http = http;
        this._notes = _notes;
        this.customers = [];
        this.products = [];
        this.selectedProducts = [];
        this.customerId = 0;
        // product variables
        this.productSelectId = 0;
        this.productQuantity = 1;
        // total
        this.quantity = 1;
        this.totalPrice = 0;
        this.orderTotal = 0;
        this.newOrderTotal = 0;
        this.orderlines = [];
    }
    OrderCreateComponent.prototype.addOrderLine = function (id, quantity) {
        if (!isNaN(id)) {
            this.indexOfOrderLine = this.getIndexByValue("Id", id);
            if (!isNaN(this.indexOfOrderLine)) {
                alert("Nee sorry!");
                this._notes.add(new notifications_model_1.Notification("test", "test"));
            }
            else {
                this.productName = this.products[this.productSelectId].name;
                this.productCat = this.products[this.productSelectId].category;
                this.productCode = this.products[this.productSelectId].code;
                this.productPrice = this.products[this.productSelectId].price;
                this.orderLineTotal = this.productPrice * quantity;
                var orderline = new orderLineCreate_1.orderLineCreate(id, this.productName, this.productCat, this.productCode, this.productPrice, quantity, this.orderLineTotal);
                this.orderlines.push(orderline);
                this.orderTotal = this.orderTotal + this.orderLineTotal;
                this.getProductInfo(null);
            }
        }
    };
    OrderCreateComponent.prototype.removeOrderLine = function (orderline) {
        var index = this.orderlines.indexOf(orderline);
        this.orderTotal = this.orderTotal - orderline.total;
        this.orderlines.splice(index, 1);
    };
    OrderCreateComponent.prototype.setOrderTotal = function (total) {
        total = 0;
        this.orderlines.forEach(function (item) {
            total = total + item["total"];
        });
        this.orderTotal = total;
    };
    OrderCreateComponent.prototype.getCustomerInfo = function (customerId) {
        this.customerId = parseInt(customerId) - 1;
        this.customerAddress = this.customers[this.customerId].adres;
        this.customerZipCode = this.customers[this.customerId].zipCode;
        this.customerCity = this.customers[this.customerId].city;
        //this.order.type=value;
        // this.selectedOption = this.options.filter((item)=> item.id == optionid)[0];
    };
    OrderCreateComponent.prototype.getProductInfo = function (productId) {
        if (productId) {
            this.productSelectId = parseInt(productId) - 1;
            this.productCat = this.products[this.productSelectId].category;
            this.productCode = this.products[this.productSelectId].code;
            this.productPrice = this.products[this.productSelectId].price;
            this.productStock = this.products[this.productSelectId].stock;
            this.productId = parseInt(productId);
            //this.selectedProducts[this.productSelectId].push(this.products[this.productSelectId].price);
            this.totalPrice = this.products[this.productSelectId].price * this.quantity;
            this.selectedProducts = [
                { productId: this.productId, totalPrice: this.products[this.productSelectId].price },
            ];
        }
        else {
            this.productCat = null;
            this.productCode = null;
            this.productPrice = null;
            this.productStock = null;
            this.productId = null;
            this.totalPrice = null;
            this.productQuantity = 1;
        }
    };
    OrderCreateComponent.prototype.getTotalPrice = function (quantity, productId) {
        this.quantity = parseInt(quantity);
        if (productId) {
            this.productSelectId = parseInt(productId) - 1;
            this.totalPrice = this.products[this.productSelectId].price * quantity;
        }
    };
    OrderCreateComponent.prototype.updateTotalPrice = function (quantity, productId) {
        this.indexOfOrderLine = this.getIndexByValue("Id", productId);
        this.orderlines[this.indexOfOrderLine].setQuantity(quantity);
        this.setOrderTotal(0);
        // return this.orderlines[]
        // this.quantity = parseInt(quantity);
        // if (productId) {
        //   this.productSelectId = parseInt(productId) - 1;
        //   this.totalPrice = this.products[this.productSelectId].price * quantity;
        // }
    };
    OrderCreateComponent.prototype.getIndexByValue = function (key, value) {
        for (var i = 0; i < this.orderlines.length; i++) {
            if (this.orderlines[i][key] == value) {
                return i;
            }
        }
        return;
    };
    OrderCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("http://localhost:8080/snelTransport/resources/customers").
            toPromise().then(function (r) { return r.json(); }).then(function (r) { return _this.customers = r; });
        this.http.get("http://localhost:8080/snelTransport/resources/products").
            toPromise().then(function (r) { return r.json(); }).then(function (r) { return _this.products = r; });
    };
    OrderCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'order',
            // templateUrl : `order-create.component.html`
            templateUrl: "./order-create.component.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http, notifications_service_1.NotificationsService])
    ], OrderCreateComponent);
    return OrderCreateComponent;
}());
exports.OrderCreateComponent = OrderCreateComponent;
//# sourceMappingURL=order-create.component.js.map