import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HomeComponent } from '../home/home.component';
import { MyserviceService } from '../myservice.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-product-center',
  templateUrl: './product-center.component.html',
  styleUrls: ['./product-center.component.scss']
})
export class ProductCenterComponent implements OnInit {

  products:any ;
  
constructor(private myservice:MyserviceService) {

}


async sendProduct(id:any){  
  this.myservice.setdata(id)
}
deleteProduct(id:any){
  this.myservice.deleteProduct(id)
  window.location.reload();
}

  ngOnInit(): void {
    this.myservice.getProduct().subscribe(data => this.products = data)  }
 
}
