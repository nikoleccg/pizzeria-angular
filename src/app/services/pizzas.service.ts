import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPizzas(){
    return this.http.get<Product []>('https://fakestoreapi.com/products')
  }
}
