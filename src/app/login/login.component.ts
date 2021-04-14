import {Component, OnInit} from '@angular/core';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import Config = firebaseui.auth.Config;
import {AngularFireAuth} from '@angular/fire/auth';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //ui: firebaseui.auth.AuthUI | undefined;

  ui = new firebaseui.auth.AuthUI(firebase.auth());

  constructor(private afauth: AngularFireAuth) {
  }

  ngOnInit() {
    const uiConfig: Config = {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl: string): boolean {
          return true;
        }
      }
    };
    // this.ui = new firebaseui.auth.AuthUI(this.afauth);
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  /*
    onLoginSuccessful() {

  }*/

}
