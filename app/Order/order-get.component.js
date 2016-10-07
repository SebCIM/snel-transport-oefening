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
var OrderGetComponent = (function () {
    function OrderGetComponent(http) {
        this.http = http;
        this.customers = [];
        this.products = [];
        this.getTotal = '500';
    }
    // // without strong typing
    // onKey(event:any) {
    //   newTotal = getTotal(this.values);
    // }
    // getTotal(quantity){
    //     var total = 0;
    //     total = products.price * quantity;
    //     }
    //     return total;
    // }
    OrderGetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("http://localhost:8080/snelTransport/resources/customers").
            toPromise().then(function (r) { return r.json(); }).then(function (r) { return _this.customers = r; });
        this.http.get("http://localhost:8080/snelTransport/resources/products").
            toPromise().then(function (r) { return r.json(); }).then(function (r) { return _this.products = r; });
    };
    OrderGetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'order',
            templateUrl: "order.component.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderGetComponent);
    return OrderGetComponent;
}());
exports.OrderGetComponent = OrderGetComponent;
//# sourceMappingURL=order-get.component.js.map