import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
import { CarouselComponent } from './units/carousel/carousel.component';
import { CardsComponent } from './units/cards/cards.component';
import { Carousel1Component } from './pages/carousel1/carousel1.component';
import { Carousel2Component } from './units/carousel2/carousel2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent,CarouselComponent,Carousel1Component,Carousel2Component,CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NeST';
}
