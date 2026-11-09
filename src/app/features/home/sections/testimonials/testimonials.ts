import { Component } from '@angular/core';
import { TESTIMONIALS } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-testimonials',
  imports: [Icon, Reveal],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  protected readonly testimonials = TESTIMONIALS;
  protected readonly stars = [1, 2, 3, 4, 5];
}
