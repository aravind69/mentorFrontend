import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
url:string= "http://localhost:56995/api/orderProperties";
  constructor(private http:HttpClient) { }

  public getAllOrders():Observable<any[]>{
   
    return this.http.get<any>(this.url);
  }
  
}
