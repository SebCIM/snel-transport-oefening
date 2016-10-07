// Imports
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  moduleId: module.id,
  selector: 'DeliveryList',
  templateUrl : `delivery-list.component.html`
})

// Component class implementing OnInit
export class DeliveryListComponent{

  constructor(private http: Http) {

  }

}
