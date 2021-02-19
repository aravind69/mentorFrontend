import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'app/Services/orders.service';

@Component({
  selector: 'app-get-orders',
  templateUrl: './get-orders.component.html',
  styleUrls: ['./get-orders.component.css']
})
export class GetOrdersComponent implements OnInit {
  data: any[] ;
  policies: any[] = [
    {id: 0, name: "policy001"},
    {id: 2, name: "policy002"},
    {id: 3, name: "policy003"},
    {id: 4, name: "policy004"},
    {id: 5, name: "policy005"}, 
];
moviesArr: any[] = [
  {
    "title": "Super Man"
  },
  {
    "title": "Spider Man"
  },
  {
    "title": "Aladdin"
  }, 
  {
    "title": "Downton Abbey"
  }
];
  constructor(private orderservice:OrdersService) { }

  ngOnInit(): void {
    this.orderservice.getAllOrders().subscribe((order:any[]) =>{
this.data= order;
debugger;
    })
  }

}
