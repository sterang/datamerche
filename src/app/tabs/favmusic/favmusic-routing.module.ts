import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavmusicPage } from './favmusic.page';

const routes: Routes = [
  {
    path: '',
    component: FavmusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavmusicPageRoutingModule {}
