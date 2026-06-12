import { Component, Input, OnDestroy, OnInit } from '@angular/core';

export interface CarouselSlide {
  src: string;
  alt: string;
}

@Component({
  selector: 'photo-carousel',
  standalone: true,
  imports: [],
  templateUrl: './photo-carousel.component.html',
  styleUrl: './photo-carousel.component.scss',
})
export class PhotoCarouselComponent implements OnInit, OnDestroy {
  @Input() slides: CarouselSlide[] = [];
  @Input() autoPlayMs = 0;

  current = 0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    if (this.autoPlayMs > 0) {
      this.timer = setInterval(() => this.next(), this.autoPlayMs);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  prev(): void {
    this.current = (this.current - 1 + this.slides.length) % this.slides.length;
  }

  next(): void {
    this.current = (this.current + 1) % this.slides.length;
  }

  goTo(idx: number): void {
    this.current = idx;
  }
}
