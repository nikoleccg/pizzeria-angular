import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainSectionComponent } from "./components/main-section/main-section.component";
import { PopularPizzasComponent } from "./components/popular-pizzas/popular-pizzas.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, MainSectionComponent, PopularPizzasComponent]
})
export class AppComponent {
  title = 'pizzeria-angular';
}
