import { RegisterPage } from './../register/register';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core'

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
  }
@ViewChild(Slides) slides: Slides;

public goToLogin (){
  this.navCtrl.push(LoginPage);
}
goToRegister(){
  this.navCtrl.push(RegisterPage)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
