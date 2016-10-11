import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app.component';
import { OrderGetComponent }  from './order/order-get.component';
import { OrderCreateComponent }  from './order/order-create.component';
import { ContactsComponent }  from './contacts/contacts.component';
import { OrderListComponent } from './orderlist/order-list.component';
// import { FiltersComponent }  from './filters/filters.component';
import { routing } from './app.routes';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  imports: [
    BrowserModule,
    SimpleNotificationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    OrderGetComponent,
    OrderCreateComponent,
    ContactsComponent,
    OrderListComponent
    // FiltersComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

