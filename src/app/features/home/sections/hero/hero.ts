import { Component } from '@angular/core';
import { SITE } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly year = SITE.year;

  protected readonly chips = [
    { icon: 'users', label: 'Grupos reducidos' },
    { icon: 'shield', label: 'Ambientes seguros' },
    { icon: 'star', label: 'Docentes tituladas' },
  ] as const;

  protected readonly values = [
    'Juego',
    'Afecto',
    'Naturaleza',
    'Arte',
    'Música',
    'Familia',
    'Curiosidad',
    'Movimiento',
  ] as const;

  protected readonly avatars = [
    { initials: 'MP', theme: 'coral' },
    { initials: 'DR', theme: 'teal' },
    { initials: 'AV', theme: 'plum' },
  ] as const;
}
