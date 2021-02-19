import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './create-order/create-order.component';
import { GetOrdersComponent } from './get-orders/get-orders.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    CreateOrderComponent,
    GetOrdersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class OrdersModule { }
