import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Añade la clase `is-visible` cuando el elemento entra en pantalla.
 * La transición vive en `styles.scss` ([appReveal]).
 */
@Directive({
  selector: '[appReveal]',
})
export class Reveal implements OnInit, OnDestroy {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.host.nativeElement;

    if (typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          node.classList.add('is-visible');
          this.observer?.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
