import { Component } from '@angular/core';
import { Icon } from '../icon/icon';
import { Logo } from '../logo/logo';
import { NAV, PROGRAMS, SITE, SOCIALS } from '../../core/site-content';

@Component({
  selector: 'app-footer',
  imports: [Logo, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly site = SITE;
  protected readonly nav = NAV;
  protected readonly programs = PROGRAMS;
  protected readonly year = new Date().getFullYear();
  protected readonly socials = SOCIALS;
}
