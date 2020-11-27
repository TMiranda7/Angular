import { Component, OnInit } from '@angular/core';
import { ProductService } from '.././product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-create-product',
  templateUrl:'create-product.component.html',
  styleUrls: ['create-product.component.css']
})

export class CreateProductComponent implements OnInit {

  produto : Product = {
    name:'',
    price: null
  }

  constructor(private service:ProductService , private router:Router) { }

  ngOnInit(): void {
  }

  saveProduto(){
    console.log("entrou ")
    this.service.create(this.produto).subscribe( _ =>{
      this.service.onShow('Salvo com Sucesso !')
      this.router.navigate(['/products'])
    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }

}
