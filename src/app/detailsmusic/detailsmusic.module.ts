import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsmusicPageRoutingModule } from './detailsmusic-routing.module';

import { DetailsmusicPage } from './detailsmusic.page';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsmusicPageRoutingModule,
    ComponentModule
  ],
  declarations: [DetailsmusicPage]
})
export class DetailsmusicPageModule { }
