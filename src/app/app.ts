import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { Header } from './shared/header/header';
import { Icon } from './shared/icon/icon';
import { SITE } from './core/site-content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly site = SITE;

  protected readonly whatsappUrl =
    `https://wa.me/${SITE.whatsapp}?text=` +
    encodeURIComponent('Hola, quisiera información sobre las inscripciones del próximo año.');
}
