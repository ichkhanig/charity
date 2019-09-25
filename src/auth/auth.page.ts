import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'page-auth',
  templateUrl: './auth.page.html',
})

export class AuthPage implements OnInit {

  mode: string;

  constructor(private authService: AuthService,
              private navParams: NavParams) {}

  ngOnInit() {
    this.mode = this.navParams.get('mode');
  }
}
