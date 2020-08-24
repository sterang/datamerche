import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavmusicPageRoutingModule } from './favmusic-routing.module';

import { FavmusicPage } from './favmusic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavmusicPageRoutingModule
  ],
  declarations: [FavmusicPage]
})
export class FavmusicPageModule {}
