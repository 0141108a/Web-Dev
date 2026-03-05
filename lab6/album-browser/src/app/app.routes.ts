import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./components/home/home').then(m => m.Home) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./components/about/about').then(m => m.About) 
  },
  { 
    path: 'albums', 
    loadComponent: () => import('./components/albums/albums').then(m => m.Albums) 
  },
  { 
    path: 'albums/:id', 
    loadComponent: () => import('./components/album-detail/album-detail').then(m => m.AlbumDetail) 
  },
  { 
    path: 'albums/:id/photos', 
    loadComponent: () => import('./components/album-photos/album-photos').then(m => m.AlbumPhotos) 
  }
];