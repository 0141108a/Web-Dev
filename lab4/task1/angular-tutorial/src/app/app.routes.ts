import {Routes} from '@angular/router';
import {Home, UserPage} from './app';

export const routes: Routes = [
  {
    path: '',
    title: 'App Home Page',
    component: Home,
  },
  {
    path: 'user',
    title: 'App User Page',
    component: UserPage,
  },
];