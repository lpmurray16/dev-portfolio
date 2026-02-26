import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [HeroSectionComponent, SkillsSectionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
