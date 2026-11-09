import { Component } from '@angular/core';
import { SOCIALS } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-social',
  imports: [Icon],
  templateUrl: './social.html',
  styleUrl: './social.scss',
})
export class Social {
  protected readonly socials = SOCIALS;
}
