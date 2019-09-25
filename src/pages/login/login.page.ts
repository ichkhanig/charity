import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'page-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})

export class LoginPage implements OnInit {
    private authStatus;
    private supAdminStatus;
    private tab;
    private wrongPwd = false;

    constructor(private router: Router,
                private authService: AuthService) { }

    ngOnInit(): void {
        this.authStatus = this.authService.isAuth;
        this.supAdminStatus = this.authService.isSuperAdmin;
    }

    onSubmit(f: NgForm) {
        this.tab = f.value;
        if (this.tab.username === 'superadmin' && this.tab.password === 'sa') {
            this.authService.signAsSuperAdmin.then(() => {
                this.authStatus = this.authService.isAuth;
                this.supAdminStatus = this.authService.isSuperAdmin;
                this.router.navigate(['/nav']);
            });
        } else if (this.tab.username === 'admin' && this.tab.password === 'a') {
            this.authService.signIn.then(() => {
                this.authStatus = this.authService.isAuth;
                this.router.navigate(['/nav']);
            });
        } else {
            this.wrongPwd = true;
        }
    }

    onInvite() {
        this.router.navigate(['/nav']);
    }
}
