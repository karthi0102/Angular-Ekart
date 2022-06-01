import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ProductCenterComponent} from './product-center/product-center.component'
const routes: Routes = [
  {path:"",redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
