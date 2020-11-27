import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-delete-product',
  templateUrl:'delete-product.component.html',
  styleUrls: ['delete-product.component.css']
})

export class DeleteProductComponent implements OnInit {

  produto: Product;

  constructor(private service:ProductService , private router:Router , private route:ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.gettingId(id).subscribe( res => this.produto = res );
  }

  DeleteProduto(){
    this.service.delete(this.produto.id.toString()).subscribe( _ => {
      this.service.onShow('Prduto Deletado !');
      this.router.navigate(['/products'])
    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }

}
