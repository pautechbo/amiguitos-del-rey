import { Component } from '@angular/core';
import { About } from './sections/about/about';
import { Admissions } from './sections/admissions/admissions';
import { Contact } from './sections/contact/contact';
import { Day } from './sections/day/day';
import { Faq } from './sections/faq/faq';
import { Gallery } from './sections/gallery/gallery';
import { Hero } from './sections/hero/hero';
import { Methodology } from './sections/methodology/methodology';
import { Programs } from './sections/programs/programs';
import { Social } from './sections/social/social';
import { Stats } from './sections/stats/stats';
import { Team } from './sections/team/team';
import { Testimonials } from './sections/testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Stats,
    About,
    Programs,
    Methodology,
    Day,
    Gallery,
    Testimonials,
    Team,
    Admissions,
    Faq,
    Contact,
    Social,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
