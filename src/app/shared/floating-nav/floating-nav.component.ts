import { NgClass } from '@angular/common';
import { Component, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, NgClass],
  selector: 'floating-nav',
  templateUrl: 'floating-nav.component.html',
  styleUrls: ['./floating-nav.component.scss'],
})
export class FloatingNavComponent {
  @HostBinding('class.open') isOpen = false;
  private readonly hostElement = inject(ElementRef<HTMLElement>);

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.closeIfOutside(event.target);
  }

  @HostListener('document:touchstart', ['$event'])
  onDocumentTouchStart(event: TouchEvent) {
    this.closeIfOutside(event.target);
  }

  private closeIfOutside(target: EventTarget | null) {
    if (!this.isOpen || !target) {
      return;
    }

    const clickedInside = this.hostElement.nativeElement.contains(target as Node);
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (!clickedInside && isMobile) {
      this.isOpen = false;
    }
  }
}
