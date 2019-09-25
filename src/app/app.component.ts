import { Component, OnInit } from '@angular/core';

//import * as firebase from 'firebase';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavService } from '../services/nav.service';
import { Nav } from '../models/Nav';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  private authStatus;
  private navList: Nav[];

  constructor(private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              private navService: NavService,
              private authService: AuthService) {
    //this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      const firebaseConfig = {
        apiKey: 'AIzaSyAFVlXGsJVQizryxyyhv51i8e8eSemRZAs',
        authDomain: 'charityconceptdev.firebaseapp.com',
        databaseURL: 'https://charityconceptdev.firebaseio.com',
        projectId: 'charityconceptdev',
        storageBucket: '',
        messagingSenderId: '474751547871',
        appId: '1:474751547871:web:793f090e0be73cae'
      };
      firebase.initializeApp(firebaseConfig);
    });
  }

  ngOnInit() {
    this.navList = this.navService.getAllNav();
    this.authStatus = this.authService.isAuth;
  }
}
