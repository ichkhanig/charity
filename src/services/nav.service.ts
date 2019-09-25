import { Nav } from '../models/Nav';
import { Injectable } from '@angular/core';

@Injectable()
export class NavService {

     navList: Nav[] = [
    {
      name: 'Box',
      icon: 'cube',
      navLink: '/box',
      show: false
    },
    {
      name: 'Camionette',
      icon: 'car',
      navLink: '/truck',
      show: false
    },
    {
      name: 'Nouvelle Distribution',
      icon: 'md-calendar',
      navLink: '/new-mission',
      show: false
    },
    {
      name: 'Historique',
      icon: 'clipboard',
      navLink: '/history',
      show: true
    },
    {
      name: 'Teams',
      icon: 'contacts',
      navLink: '/teams',
      show: true
    }
  ];

    getAllNav() {
        return this.navList;
    }

}
