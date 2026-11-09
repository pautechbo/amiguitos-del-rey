import { Component } from '@angular/core';
import { STATS } from '../../../../core/site-content';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-stats',
  imports: [Reveal],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
  protected readonly stats = STATS;
}
