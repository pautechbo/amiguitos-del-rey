import { Component } from '@angular/core';
import { METHOD } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-methodology',
  imports: [Icon, Reveal],
  templateUrl: './methodology.html',
  styleUrl: './methodology.scss',
})
export class Methodology {
  protected readonly method = METHOD;
}
