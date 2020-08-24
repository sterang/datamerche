import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { ToastController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
  public oldpassword;
  public newpassword;
  constructor(private router: Router, public toastController: ToastController) { }
  ngOnInit() {
  }
  changePass() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        return Auth.changePassword(user, this.oldpassword, this.newpassword);
      })
      .then(data => console.log(data))
      .catch(async (err) => {
        console.log(err);
        if (err.code === 'LimitExceededException') {
          const toast = await this.toastController.create({ message: 'Ya has cambiado tu clave, intentalo mas tarde', duration: 2000 });
          toast.present();
        }


        console.log("Error");

      });
  }
  retornar() {

  }
}
