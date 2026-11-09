import { Component, HostListener, afterNextRender, effect, signal } from '@angular/core';
import { Icon } from '../icon/icon';
import { Logo } from '../logo/logo';
import { NAV, SITE } from '../../core/site-content';

@Component({
  selector: 'app-header',
  imports: [Logo, Icon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly nav = NAV;
  protected readonly site = SITE;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);
  protected readonly active = signal('#inicio');

  private readonly sectionIds = ['inicio', ...NAV.map((item) => item.href.slice(1))];

  constructor() {
    afterNextRender(() => this.updateActive());

    // Bloquea el scroll del fondo mientras el menú móvil está abierto.
    effect(() => {
      document.body.classList.toggle('no-scroll', this.menuOpen());
    });
  }

  @HostListener('window:scroll', [])
  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
    this.updateActive();
  }

  @HostListener('window:resize', [])
  protected onResize(): void {
    if (window.innerWidth > 1080) this.menuOpen.set(false);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  private updateActive(): void {
    const offset = 150;
    let current = '#inicio';

    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= offset) {
        current = `#${id}`;
      }
    }

    this.active.set(current);
  }
}
