import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { DataSource } from '@angular/cdk/collections'

@Component({
    selector:'product-rader',
    templateUrl:'reader-product.component.html',
    styleUrls:['reader-product.component.css']
})

export class ReaderProductComponent implements OnInit {
    
    products: Product[];
    displayedColumns = ['id','name','price','actions'];

    constructor( private service : ProductService ){ }

    ngOnInit(): void{
        this.service.getting().subscribe( produto => {
            this.products = produto
            console.log(this.products);
        } )
    }
}