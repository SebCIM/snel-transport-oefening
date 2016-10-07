import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { OrderGetComponent }  from './order/order-get.component';
import { OrderCreateComponent }  from './order/order-create.component';
import { DeliveryListComponent }  from './deliverylist/delivery-list.component';
import { ContactsComponent }  from './contacts/contacts.component';
// import { FiltersComponent }  from './filters/filters.component';
import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    OrderGetComponent,
    OrderCreateComponent,
    DeliveryListComponent,
    ContactsComponent,
    // FiltersComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

