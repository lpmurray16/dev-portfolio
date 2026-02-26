import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'future-goals',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './future-goals.component.html',
  styleUrl: './future-goals.component.scss',
})
export class FutureGoalsComponent {}
