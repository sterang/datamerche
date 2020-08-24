import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListmusicPage } from './listmusic.page';

const routes: Routes = [
  {
    path: '',
    component: ListmusicPage,
    children: [
      {
        path: 'musiclist',
        children: [
          {
            path: '',
            loadChildren: () => import('../tabs/musiclist/musiclist.module').then(m => m.MusiclistPageModule)
          }
        ]
      },
      {
        path: 'favmusic',
        children: [
          {
            path: '',
            loadChildren: () => import('../tabs/favmusic/favmusic.module').then(m => m.FavmusicPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../tabs/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/listmusic/musiclist',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/listmusic/musiclist',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListmusicPageRoutingModule { }
