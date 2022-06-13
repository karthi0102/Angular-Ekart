import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent implements OnInit {
products:any
  
    constructor(private myservice:MyserviceService) {
     
    }
    
    ngOnInit(): void {
        this.myservice.getData().subscribe(data => this.products= data )
    }
}
