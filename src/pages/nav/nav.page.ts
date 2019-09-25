import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {NavService} from '../../services/nav.service';
import {Nav} from '../../models/Nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {
  private authStatus;
  private navList: Nav[];

  constructor(private authService: AuthService,
              private navService: NavService) { }

  ngOnInit() {
    this.navList = this.navService.getAllNav();
    this.authStatus = this.authService.isAuth;
  }

}
