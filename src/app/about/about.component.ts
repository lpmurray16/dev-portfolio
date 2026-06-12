import { Component } from '@angular/core';
import { PhotoCarouselComponent, CarouselSlide } from '../shared/photo-carousel/photo-carousel.component';

@Component({
  selector: 'about',
  standalone: true,
  imports: [PhotoCarouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly familySlides: CarouselSlide[] = [
    { src: 'https://metoobubba16.sirv.com/Images/fam.png', alt: 'Me and the family' },
    { src: 'https://metoobubba16.sirv.com/Images/el_aug.png', alt: 'My kids Elsie & August' },
    { src: 'https://metoobubba16.sirv.com/Images/dogs.png', alt: 'My dogs Bodie & Quill' },
  ];
}
