import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { PizzaComponent } from '../pizza/pizza.component';
import { StoreService } from '../../services/store.service';
import { PizzasService } from '../../services/pizzas.service';

@Component({
  selector: 'app-popular-pizzas',
  standalone: true,
  imports: [CommonModule, PizzaComponent],
  templateUrl: './popular-pizzas.component.html',
  styleUrl: './popular-pizzas.component.scss'
})
export class PopularPizzasComponent {
  myShoppingCart: Product[] = [];
  total = 0;

  pizzas: Product[] = [];

  constructor(
    private storeService: StoreService,
    private pizzasService: PizzasService
  ){
    this.myShoppingCart = this.storeService.getShoppingCart()
  }

ngOnInit(): void {
  this.pizzasService.getAllPizzas()
    .subscribe(data => {
      this.pizzas = data
    })
}

  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal()
  }
}
