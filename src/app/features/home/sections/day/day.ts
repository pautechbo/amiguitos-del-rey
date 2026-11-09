import { Component } from '@angular/core';
import { DAY } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-day',
  imports: [Icon, Reveal],
  templateUrl: './day.html',
  styleUrl: './day.scss',
})
export class Day {
  protected readonly moments = DAY;
}
