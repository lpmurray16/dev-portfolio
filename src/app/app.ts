import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FloatingNavComponent } from "./shared/floating-nav/floating-nav.component";
import { FooterSectionComponent } from "./footer-section/footer-section.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FloatingNavComponent, FooterSectionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Logan Murray - Software Engineer');
}
