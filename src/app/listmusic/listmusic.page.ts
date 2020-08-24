import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listmusic',
  templateUrl: './listmusic.page.html',
  styleUrls: ['./listmusic.page.scss'],
})
export class ListmusicPage implements OnInit {
  public productos;
  constructor(
    private router: Router,
  ) { }

  async ngOnInit() {
    //const user = await Auth.currentUserInfo();
    //if (user == null) {
    //  console.log("Regresa");
    //  this.router.navigate(['home']);
    //}
    //console.log("ImprimiendoDatos")
    //console.log(user);
    //console.log(comproved);
  }
  async signOut() {
    try {
      await Auth.signOut().then(() => {
        console.log("Entro");
        this.router.navigate(['home']);
      }, async () => {
        console.log("No entra");
      });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}
