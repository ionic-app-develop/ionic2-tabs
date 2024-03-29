import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AccountPage } from '../account/account';
import { SignupPage } from '../signup/signup';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData) { }

  onLogin(form) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.navCtrl.setRoot(AccountPage);
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
