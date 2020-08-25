import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
//import { Auth } from 'aws-amplify';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MockStore } from '@ngrx/store/testing';
import { Auth } from 'aws-amplify';
const loginSevice = {
  login(username: string, password: string) {
    const userData = {
      username: 'hamil',
      password: '12345678'
    }
    return userData;
  }
}

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  const formBuilder = new FormBuilder();
  let store: MockStore;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), CommonModule, RouterTestingModule],
      providers: [{ provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }, { provide: formBuilder, useValue: formBuilder }, { provide: Auth, useValue: Auth }]
    }).compileComponents();

  });
  beforeEach(async () => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })
  describe('Check components', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  describe('Check Login', () => {
    it('should create the app', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
    it('should have as username, password variables', () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.username).toEqual('');
      expect(app.password).toEqual('');
    });
    it('should change router', () => {
      component.password = '12345';
      component.username = 'hamil';
      spyOn(component, 'signIn');
      fixture.whenStable().then(() => {
        expect(component.signIn()).toHaveBeenCalled();
      })
    });
    it('should change register', () => {
      spyOn(component, 'register');
      fixture.whenStable().then(() => {
        expect(component.register()).toHaveBeenCalled();
      })
    });
    it('should change forget', () => {
      spyOn(component, 'forgetPass');
      fixture.whenStable().then(() => {
        expect(component.forgetPass()).toHaveBeenCalled();
      })
    });

  });


});
