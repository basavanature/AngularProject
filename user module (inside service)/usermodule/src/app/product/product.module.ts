import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductbabyComponent } from './productbaby/productbaby.component';
import { ProductComponent } from '../product/product.component';
import { Router, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes=[
  {path:"",component:ProductComponent}
 
]

@NgModule({
  declarations: [ProductbabyComponent, ProductComponent],
  imports: [CommonModule,
    RouterModule.forChild(routes)
  
  ],


})
export class ProductModule {}
