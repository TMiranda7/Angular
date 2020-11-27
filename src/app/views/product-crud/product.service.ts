import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    baseUrl =  "http://localhost:3002/products"
    
    constructor( private Snack: MatSnackBar , private http: HttpClient ) {}

    onShow( msg: string, isError:boolean = false ):void{
        this.Snack.open(msg,'X',{
            duration:3000,
            horizontalPosition:"right",
            verticalPosition:"top",
            panelClass: isError ? ['msg-error'] : ['msg-success']
        })
    }

    create(produto: Product):Observable<Product>{
       return this.http.post<Product>(this.baseUrl,produto).pipe(
            map( (obj) => obj),
            catchError( e => this.errorHandle(e)) 
           )
    }

    errorHandle(e:any):Observable<any>{
        this.onShow('Deu erro !',true);
        return EMPTY;
    }

    delete(id: string):Observable<Product>{
        let url = `${this.baseUrl}/${id}`
        return this.http.delete<Product>(url).pipe(
            map( (obj) => obj),
            catchError( e => this.errorHandle(e)) 
           )
    }

    getting():Observable<Product[]>{
        return this.http.get<Product[]>( this.baseUrl )
    }

    // leitura de um unico item 
    gettingId(id: string):Observable<Product>{
        let url =`${this.baseUrl}/${id}`
        return this.http.get<Product>(url);
    }

    update(produto:Product):Observable<Product>{
        let url = `${this.baseUrl}/${produto.id}`
        return this.http.put<Product>(url,produto).pipe(
            map( (obj) => obj),
            catchError( e => this.errorHandle(e)) 
           )
    }
}