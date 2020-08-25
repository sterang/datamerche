import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public username;
  public password;
  public email;
  public phone_number;
  constructor(
    private router: Router,
    public toastController: ToastController) {
    this.username = "";
    this.password = "";
    this.email = "";
    this.phone_number = "";
  }
  ngOnInit() {
  }
  retorna() {
    this.router.navigate(['home'])
  }
  async signUp() {
    try {
      let password = this.password;
      let username = this.username;
      let email = this.email;
      let phone_number = this.phone_number;
      if (username != "" && password != "" && email != "") {
        const user = await Auth.signUp({
          username,
          password,
          attributes: {
            email
          }
        }).then((user) => {
          //console.log(user)
          //console.log("Entro");
          this.router.navigate(['validation', this.username]);
        }).catch(async (err) => {
          console.log(err)
          if (err.code === 'UsernameExistsException') {
            const toast = await this.toastController.create({ message: 'El usuario ya esta registrado intenta con otro', duration: 2000 });
            toast.present();
          } else if (err.code === 'InvalidParameterException') {
            const toast = await this.toastController.create({ message: 'La contraseña debe de tener mas de 7 caracteres', duration: 2000 });
            toast.present();
          } else {
            const toast = await this.toastController.create({ message: 'Error del sistema vuelvalo a intentar', duration: 2000 });
            toast.present();
          }
        });
      } else {
        const toast = await this.toastController.create({ message: 'Rellena todos los campos para poder registrar', duration: 2000 });
        toast.present();
      }

    } catch (error) {
      //console.log('error signing up', error)
    }
  }


}

