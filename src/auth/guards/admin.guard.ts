import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private alertController: AlertController) {}

  async canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot) {

    if (this.authService.isSuperAdmin) {
      return true;
    } else {
      const alert = await this.alertController.create({
        header: 'wrong way josey',
        subHeader: 'you are not allowed in there',
        buttons: [
          {
            text: 'Ok',
            role: 'cancel'
          }
        ]
      });
      alert.present();
      return false;
    }
  }
}
