import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProfilePage } from './profile.page';

describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  describe('Check components', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

  });


});
