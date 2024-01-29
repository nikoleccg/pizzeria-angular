import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { PizzaComponent } from '../pizza/pizza.component';

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

  pizzas:Product[] = [
    { id: '1', name: 'Pizza champiñones y jamón serrano', img: '../assets/images/p1.png', price: 60 },
    { id: '2', name: 'Pizza margarita', img: '../assets/images/p5.png', link: 'pizza_margarita.html', price: 70 },
    { id: '3', name: 'Pizza camarones', img: '../assets/images/p4.png', price: 80 },
  ];

  onAddToShoppingCart(product: Product){
    this.myShoppingCart.push(product)
    console.log(this.myShoppingCart)
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    console.log(this.total)
  }
}
