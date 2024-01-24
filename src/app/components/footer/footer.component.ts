import { Component } from '@angular/core';
import { ImgComponent } from "../img/img.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [ImgComponent]
})
export class FooterComponent {
  logoPizza: string= "../assets/images/logopizzam.png"
  imgFacebook: string = "../assets/images/facebooki.svg"
  imgInstagram: string = "../assets/images/Instagram.svg"
  imgYouTube: string = "../assets/images/tiktok.svg"
  imgTiktok: string = "../assets/images/youtube.svg"
}
