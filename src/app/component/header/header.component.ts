import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from 'aws-amplify';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() { }
  async signOut() {
    try {
      await Auth.signOut().then(() => {
        console.log("Entro");
        this.router.navigate(['home']);
      }, async () => {
        console.log("No entra");
      });;
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
  returnSe() {
    this.router.navigate(['listmusic']);
  }
}
