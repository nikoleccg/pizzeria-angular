import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-pizzas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-pizzas.component.html',
  styleUrl: './popular-pizzas.component.scss'
})
export class PopularPizzasComponent {
  pizzas = [
    { name: 'Pizza champiñones y jamón serrano', image: '../assets/images/p1.png' },
    { name: 'Pizza margarita', image: '../assets/images/p5.png', link: 'pizza_margarita.html' },
    { name: 'Pizza camarones', image: '../assets/images/p4.png' },
  ];
}
