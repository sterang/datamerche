import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Auth } from 'aws-amplify';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.page.html',
  styleUrls: ['./forgetpass.page.scss'],
})
export class ForgetpassPage implements OnInit {

  constructor(public modalCtrl: ModalController, public toastController: ToastController,) { }
  public username;
  public code;
  public password;
  public check;
  public desaparece = false;
  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  checkFirs() {
    this.check = Auth.forgotPassword(this.username)
      .then(data => {
        console.log(data);
        this.desaparece = true;
      })
      .catch(async (err) => {
        if (err.code === 'UserNotFoundException') {
          const toast = await this.toastController.create({ message: 'El usuario que ha ingresado no se encuentra registrado', duration: 2000 });
          toast.present();
        } else {
          const toast = await this.toastController.create({ message: 'Hay un error en el sistema intentalo de nuevo o mas tarde', duration: 2000 });
          toast.present();
        }
        console.log(err);
      });
  }
  confirmarCambio() {
    Auth.forgotPasswordSubmit(this.username, this.code, this.password)
      .then(async data => {
        console.log(data)
        const toast = await this.toastController.create({ message: 'La contraseña ha sido restablecida', duration: 2000 });
        toast.present();
        this.dismiss();
      })
      .catch(async (err) => {
        if (err.code === 'CodeMismatchException') {
          const toast = await this.toastController.create({ message: 'El codigo no es correcto vuelva a intentar', duration: 2000 });
          toast.present();
        } else if (err.code === 'InvalidParameterException') {
          const toast = await this.toastController.create({ message: 'La contraseña debe de tener mas de 7 caracteres', duration: 2000 });
          toast.present();
        }
        else {
          const toast = await this.toastController.create({ message: 'Hay un error del servidor intentalo de nuevo', duration: 2000 });
          toast.present();
        }
        console.log(err)
      });
  }
}