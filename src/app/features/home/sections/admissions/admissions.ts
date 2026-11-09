import { Component } from '@angular/core';
import { ADMISSION_INCLUDES, ADMISSION_STEPS } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-admissions',
  imports: [Icon, Reveal],
  templateUrl: './admissions.html',
  styleUrl: './admissions.scss',
})
export class Admissions {
  protected readonly steps = ADMISSION_STEPS;
  protected readonly includes = ADMISSION_INCLUDES;
}
