import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { CreateProductComponent } from './views/product-crud/create-product/create-product.component';
import { UpdateProductComponent } from './views/product-crud/update-product/update-product.component';
import { DeleteProductComponent } from './views/product-crud/delete-product/delete-product.component';

const routes: Routes = [
  { path:'' , component: HomeComponent },
  { path:'products' , component: ProductCrudComponent },
  { path:'products/createProduto' , component: CreateProductComponent },
  { path:'products/update/:id' , component: UpdateProductComponent },
  { path:'products/delete/:id' , component: DeleteProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
