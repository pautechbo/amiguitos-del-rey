import { Component } from '@angular/core';
import { PROGRAMS, Program } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-programs',
  imports: [Icon, Reveal],
  templateUrl: './programs.html',
  styleUrl: './programs.scss',
})
export class Programs {
  protected readonly programs = PROGRAMS;

  private readonly icons: Record<string, string> = {
    maternal: 'heart',
    prekinder: 'blocks',
    kinder: 'book',
    talleres: 'palette',
  };

  protected iconFor(program: Program): string {
    return this.icons[program.id] ?? 'star';
  }
}
