import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.scss',
})
export class Icon {
  /** Nombre del icono dentro del set interno. */
  readonly name = input.required<string>();
  readonly size = input(24);
}
