import { Component } from '@angular/core';
import { CoolButtonComponent } from "../shared/cool-button.component";

@Component({
  selector: 'hero-section',
  templateUrl: 'hero-section.component.html',
  styleUrl: 'hero-section.component.scss',
  standalone: true,
  imports: [CoolButtonComponent],
})
export class HeroSectionComponent {

}
