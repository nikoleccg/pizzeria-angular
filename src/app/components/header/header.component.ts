import { Component } from '@angular/core';
import { ImgComponent } from "../img/img.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [ImgComponent]
})
export class HeaderComponent {
  logoSrc = '../assets/images/logopizzam.png';
}
