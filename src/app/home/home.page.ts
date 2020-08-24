import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ForgetpassPage } from '../modal/forgetpass/forgetpass.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public username;
  public password;
  public name;

  constructor(
    private router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public modalCtrl: ModalController
  ) {
    this.username = "";
    this.password = "";
  }
  ngOnInit() {
  }
  register() {
    this.router.navigate(['register'])
  }
  async signIn() {

    try {
      console.log(this.username);
      console.log(this.password);
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 5000
      });
      await loading.present();
      const user = await Auth.signIn(this.username, this.password).then(() => {
        console.log("Entro");
        this.router.navigate(['listmusic']);
      }, async () => {
        const toast = await this.toastController.create({ message: 'Revisa tus datos ingresados', duration: 2000 });
        toast.present();
        console.log("No entra");
      });
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    } catch (error) {
      console.log('error signing in', error);
    }
  }
  async forgetPass() {
    const modal = await this.modalCtrl.create({
      component: ForgetpassPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
