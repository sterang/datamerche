import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DetailsmusicPage } from './detailsmusic.page';

describe('DetailsmusicPage', () => {
  let component: DetailsmusicPage;
  let fixture: ComponentFixture<DetailsmusicPage>;

  beforeEach(async(() => {
    let route: ActivatedRoute;
    TestBed.configureTestingModule({
      declarations: [DetailsmusicPage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsmusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


});
