import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsmusicPage } from './detailsmusic.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsmusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsmusicPageRoutingModule {}
