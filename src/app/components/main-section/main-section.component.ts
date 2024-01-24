import { Component } from '@angular/core';
import { ImgComponent } from "../img/img.component";

@Component({
    selector: 'app-main-section',
    standalone: true,
    templateUrl: './main-section.component.html',
    styleUrl: './main-section.component.scss',
    imports: [ImgComponent]
})
export class MainSectionComponent {
  imgPortada = "../assets/images/portada2.jpg"
}
