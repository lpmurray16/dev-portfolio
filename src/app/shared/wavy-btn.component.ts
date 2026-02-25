import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'wavy-btn',
  template: `
    <!-- From Uiverse.io by satyamchaudharydev -->
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styles: `
    /* From Uiverse.io by satyamchaudharydev */
    /* this button is inspired from this -- s://www.newline.co/pricing */
    button {
      --width: 150px;
      --timing: 3s;
      border: 0;
      width: var(--width);
      padding-block: 1em;
      color: #fff;
      font-weight: bold;
      font-size: 1em;
      background: rgb(64, 192, 87);
      transition: all 0.2s;
      border-radius: 3px;
      cursor: pointer;
    }

    button:hover {
      background-image: linear-gradient(
        to right,
        var(--dark-purple),
        var(--dark-purple) 16.65%,
        var(--pink) 16.65%,
        var(--pink) 33.3%,
        var(--retro-red) 33.3%,
        var(--retro-red) 49.95%,
        var(--orange) 49.95%,
        var(--orange) 66.6%,
        var(--light-orange) 66.6%,
        var(--light-orange) 83.25%,
        var(--yellow) 83.25%,
        var(--yellow) 100%
      );
      animation: var(--timing) linear dance6123 infinite;
      transform: scale(1.1) translateY(-1px);
    }

    @keyframes dance6123 {
      to {
        background-position: var(--width);
      }
    }
  `,
})
export class WavyBtnComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
