import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BoxPage } from './box.page';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { AdminGuard } from '../../auth/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: BoxPage,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BoxPage]
})
export class BoxPageModule {}
