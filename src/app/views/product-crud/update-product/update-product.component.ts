import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-update-product',
  templateUrl:'update-product.component.html',
  styleUrls: ['update-product.component.css']
})

export class UpdateProductComponent implements OnInit {

  produto: Product;

  constructor(private service:ProductService , private router:Router , private route:ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.gettingId(id).subscribe( res =>{
      this.produto = res
    })
  }

  updateProduto(){
    this.service.update(this.produto).subscribe( _ =>{
      this.service.onShow('Alterado com sucesso!');
      this.router.navigate(['/products'])
    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }

}
