import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
