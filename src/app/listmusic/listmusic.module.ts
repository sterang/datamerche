import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListmusicPageRoutingModule } from './listmusic-routing.module';

import { ListmusicPage } from './listmusic.page';
import { ComponentModule } from '../component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListmusicPageRoutingModule,
    ComponentModule
  ],
  declarations: [ListmusicPage]
})
export class ListmusicPageModule { }
