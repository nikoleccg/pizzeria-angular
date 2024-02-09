import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent {
  @Input() product : Product = {
    id: "",
    title: "",
    name: "",
    price: 0,
    image: ""
  }

  @Output() addedProduct = new EventEmitter<Product>();
  onAddToCart(){
    this.addedProduct.emit(this.product);
  }
}
