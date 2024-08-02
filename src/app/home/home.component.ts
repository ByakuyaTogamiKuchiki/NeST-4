import { Component } from '@angular/core';
import { Carousel1Component } from '../pages/carousel1/carousel1.component';
import { Carousel2Component } from '../units/carousel2/carousel2.component';
import { CarouselComponent } from '../units/carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel1Component,Carousel2Component,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
