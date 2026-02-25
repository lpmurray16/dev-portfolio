import { Component, HostBinding, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'floating-nav',
  templateUrl: 'floating-nav.component.html',
  styleUrls: ['./floating-nav.component.scss'],
})
export class FloatingNavComponent implements OnInit {
  @HostBinding('class.open') isOpen = false;

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
