import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: '../pages/home/home.module#HomePageModule'},
  { path: 'login', loadChildren: '../pages/login/login.module#LoginPageModule'},
  { path: 'nav', loadChildren: '../pages/nav/nav.module#NavPageModule' },
  { path: 'box', loadChildren: '../pages/box/box.module#BoxPageModule' },
  { path: 'history', loadChildren: '../pages/history/history.module#HistoryPageModule' },
  { path: 'not-found', loadChildren: '../pages/four-oh-four/four-oh-four.module#FourOhFourPageModule' },
  { path: 'options-page', loadChildren: '../pages/options-page/options-page.module#OptionsPagePageModule' },
  { path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
