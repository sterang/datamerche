import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavmusicPage } from './favmusic.page';

describe('FavmusicPage', () => {
  let component: FavmusicPage;
  let fixture: ComponentFixture<FavmusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavmusicPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavmusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


});
