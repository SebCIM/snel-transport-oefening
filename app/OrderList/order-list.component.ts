// Imports
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  moduleId: module.id,
  selector: 'orderlist',
  templateUrl : `order-list.component.html`
})

//Leveringsstatus bijwerken

// Component class implementing OnInit
export class OrderListComponent implements OnInit{
  customers = [];

  constructor(private http: Http) {

  }

  ngOnInit() {
    this.http.get("http://localhost:8080/snelTransport/resources/customers").
    toPromise().then(r => r.json()).then(r => this.customers = r);
  }

}