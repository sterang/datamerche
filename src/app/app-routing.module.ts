import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListmusicPage } from './listmusic/listmusic.page'
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [NologinGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'validation/:username',
    loadChildren: () => import('./validation/validation.module').then(m => m.ValidationPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'listmusic',
    loadChildren: () => import('./listmusic/listmusic.module').then(m => m.ListmusicPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detailsmusic/:idmusic',
    loadChildren: () => import('./detailsmusic/detailsmusic.module').then(m => m.DetailsmusicPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then(m => m.ChangepasswordPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forgetpass',
    loadChildren: () => import('./modal/forgetpass/forgetpass.module').then( m => m.ForgetpassPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
