import { Component } from '@angular/core';
import { TEAM } from '../../../../core/site-content';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-team',
  imports: [Reveal],
  templateUrl: './team.html',
  styleUrl: './team.scss',
})
export class Team {
  protected readonly team = TEAM;
}
