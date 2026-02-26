import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'cool-button',
  template: `
    <a
      class="button"
      [attr.href]="href || null"
      [attr.download]="download || null"
      [attr.target]="target || null"
      [attr.rel]="target === '_blank' ? 'noopener noreferrer' : null"
      [attr.role]="href ? null : 'button'"
      [attr.aria-disabled]="href ? null : 'true'"
    >
      <ng-content></ng-content>
    </a>
  `,
  styles: `
    .button {
      /* typography */
      font-size: 22px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;

      /* ui */
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 10px 30px;
      background: var(--orange);
      color: #fff;
      text-decoration: none;
      box-shadow:
        0 0 0 3px #ffffffff,
        0 6px 0 #ffffffff;
      transition:
        all 0.1s ease,
        background 0.3s ease;
    }

    .button:hover,
    .button:focus {
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
      background-size: 200px 100%;
      animation: 3s linear dance6123 infinite;
      transform: scale(1.1) translateY(-1px);
    }

    @keyframes dance6123 {
      to {
        background-position: 200px;
      }
    }

    .button:active {
      box-shadow:
        0 0 0 3px var(--pink),
        0 4px 0 var(--dark-purple);
      transform: translateY(2px);
    }
  `,
})
export class CoolButtonComponent implements OnInit {
  @Input() href?: string;
  @Input() download?: string;
  @Input() target?: '_blank' | '_self' | '_parent' | '_top';

  constructor() {}

  ngOnInit() {}
}
