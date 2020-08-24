import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public username;

  constructor(private router: Router,) { }

  ngOnInit() {

  }
  async ionViewWillEnter() {
    console.log("Entro")
    const user = await Auth.currentUserInfo();
    this.username = user.username
    console.log(user);
  }
  changePass() {
    this.router.navigate(['changepassword'])
  }

}
