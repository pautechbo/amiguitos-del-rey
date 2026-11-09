import { Component, signal } from '@angular/core';
import { FAQS } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-faq',
  imports: [Icon, Reveal],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly faqs = FAQS;
  protected readonly open = signal<number | null>(0);

  protected toggle(index: number): void {
    this.open.update((current) => (current === index ? null : index));
  }
}
