import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {
  public code;
  public username;
  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    public toastController: ToastController
  ) {
    this.username = "";
    this.code = "";
  }
  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.username = params['username']
    });
  }
  resendCode() {
    Auth.resendSignUp(this.username).then(async () => {
      const toast = await this.toastController.create({ message: 'Un nuevo codigo fue enviado a su correo', duration: 2000 });
      toast.present();
    }).catch(async (err) => {
      const toast = await this.toastController.create({ message: 'No pudimos enviarte un nuevo codigo vuelve a intentarlo', duration: 2000 });
      toast.present();
    });
  }
  async confirmSignUp() {
    try {
      await Auth.confirmSignUp(this.username, this.code).then(async () => {
        const toast = await this.toastController.create({ message: 'Usuario registrado', duration: 2000 });
        toast.present();
        this.router.navigate(['home']);
      }).catch(async (err) => {
        if (err.code === 'CodeMismatchException') {
          const toast = await this.toastController.create({ message: 'El codigo no es correcto vuelva a intentar', duration: 2000 });
          toast.present();
        } else {
          const toast = await this.toastController.create({ message: 'Hay un error del servidor intentalo de nuevo', duration: 2000 });
          toast.present();
        }
        console.log(err);
      });
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }
}
