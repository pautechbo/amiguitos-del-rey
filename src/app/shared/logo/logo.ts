import { Component, input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
})
export class Logo {
  /** `light` se usa sobre fondos oscuros. */
  readonly variant = input<'default' | 'light'>('default');
}
