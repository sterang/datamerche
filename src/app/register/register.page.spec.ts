import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from 'aws-amplify';
import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }, { provide: Auth, useValue: Auth }]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  describe('Check components', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  it('should have as username, email and password variables', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.username).toEqual('');
    expect(app.password).toEqual('');
    expect(app.email).toEqual('');
  });
  it('should change devolver', () => {
    spyOn(component, 'retorna');
    fixture.whenStable().then(() => {
      expect(component.retorna()).toHaveBeenCalled();
    })
  });
  it('should registra user with nothing', () => {
    spyOn(component, 'signUp');
    fixture.whenStable().then(() => {
      expect(component.signUp()).toHaveBeenCalled();
    })
  });
  it('should registra user with push', () => {
    component.password = '12345';
    component.username = 'hamil';
    component.email = 'hamil@unicauca.edu.co';
    spyOn(component, 'signUp');
    fixture.whenStable().then(() => {
      expect(component.signUp()).toHaveBeenCalled();
    })
  });

});

