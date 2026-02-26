import { Component } from '@angular/core';
import { CoolButtonComponent } from "../shared/cool-button.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'hero-section',
  templateUrl: 'hero-section.component.html',
  styleUrl: 'hero-section.component.scss',
  standalone: true,
  imports: [CoolButtonComponent, RouterLink],
})
export class HeroSectionComponent {

}
