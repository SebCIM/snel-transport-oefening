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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.customers = [];
        this.products = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("http://localhost:8080/snelTransport/resources/customers").
            toPromise().then(function (r) { return r.json(); }).then(function (r) { return _this.customers = r; });
        this.http.get("http://localhost:8080/snelTransport/resources/products").
            toPromise().then(function (r) { return r.json(); }).then(function (r) { return _this.products = r; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Klanten</h1>\n  <ol>\n  <li *ngFor=\"let customer of customers\">{{customer.code}} {{customer.name}} {{customer.adres}} {{customer.houseNum}} {{customer.zipCode}} {{customer.city}} {{customer.telNum}} {{customer.faxNum}}</li>\n  </ol>\n  <h1> Artikelen </h1>\n  <ol> \n  <li *ngFor=\"let product of products\">{{product.code}} {{product.name}} {{product.price}}</li>\n  </ol>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map