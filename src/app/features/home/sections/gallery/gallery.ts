import { Component, HostListener, signal } from '@angular/core';
import { GALLERY, GalleryItem } from '../../../../core/site-content';
import { Icon } from '../../../../shared/icon/icon';
import { Reveal } from '../../../../shared/reveal/reveal';

@Component({
  selector: 'app-gallery',
  imports: [Icon, Reveal],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  protected readonly items = GALLERY;
  protected readonly selected = signal<number | null>(null);

  protected open(index: number): void {
    this.selected.set(index);
    document.body.classList.add('no-scroll');
  }

  protected close(): void {
    this.selected.set(null);
    document.body.classList.remove('no-scroll');
  }

  protected current(): GalleryItem | null {
    const index = this.selected();
    return index === null ? null : this.items[index];
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.selected() !== null) this.close();
  }
}
