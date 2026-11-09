import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Amiguitos del Rey | Educación Inicial',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  { path: '**', redirectTo: '' },
];
