import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FourOhFourPage } from './four-oh-four.page';

const routes: Routes = [
  {
    path: '',
    component: FourOhFourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FourOhFourPage]
})
export class FourOhFourPageModule {}
