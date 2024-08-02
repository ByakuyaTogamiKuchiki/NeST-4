import { Component } from '@angular/core';
import { Carousel3Component } from '../../carousel3/carousel3.component';
import { AccordionComponent } from '../../accordion/accordion.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [Carousel3Component,AccordionComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
