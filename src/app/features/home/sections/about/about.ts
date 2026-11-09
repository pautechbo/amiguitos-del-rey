import { Component } from '@angular/core';
import { PILLARS } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-about',
  imports: [Icon, Reveal],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly pillars = PILLARS;
}
