import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ChangepasswordPage } from './changepassword.page';

describe('ChangepasswordPage', () => {
  let component: ChangepasswordPage;
  let fixture: ComponentFixture<ChangepasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangepasswordPage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangepasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
