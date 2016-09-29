import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
  template: `<h1>Klanten</h1>
  <ol>
  <li *ngFor="let customer of customers">{{customer.code}} {{customer.name}} {{customer.adres}} {{customer.houseNum}} {{customer.zipCode}} {{customer.city}} {{customer.telNum}} {{customer.faxNum}}</li>
  </ol>
  <h1> Artikelen </h1>
  <ol> 
  <li *ngFor="let product of products">{{product.code}} {{product.name}} {{product.price}}</li>
  </ol>
  `
  
})
export class AppComponent implements OnInit{ 

  customers = [];
  products = [];

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.http.get("http://localhost:8080/snelTransport/resources/customers").
    toPromise().then(r => r.json()).then(r => this.customers = r);

    this.http.get("http://localhost:8080/snelTransport/resources/products").
    toPromise().then(r => r.json()).then(r => this.products = r);
  }
 }
