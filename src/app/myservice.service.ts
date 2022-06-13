import { Injectable } from '@angular/core';
import { Product } from './product';
import {from, Observable} from 'rxjs'
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  products :any
  id:any

  constructor(private httpClient:HttpClient) { 
  
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

   deleteProduct(id:any){
    this.httpClient.delete<Product>(`http://localhost:3000/api/products/${id}`,this.httpOptions).subscribe(
      (val) => {
          console.log("The DELETE observable is now completed.");
      });

  }
   getProduct():Observable<Product[]>{
    return  this.httpClient.get<Product[]>('http://localhost:3000/api/products')
  }

 getData():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`http://localhost:3000/api/products/${this.id}`)
}
 
  setdata(id:any){
    this.id=id;
    
  }

 
}
