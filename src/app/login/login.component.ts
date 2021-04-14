import {Component, OnInit} from '@angular/core';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import Config = firebaseui.auth.Config;
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ui = new firebaseui.auth.AuthUI(firebase.auth());

  constructor(private afauth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
    const uiConfig: Config = {
      signInSuccessUrl: 'home',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,

      ],
      callbacks: {
        signInSuccessWithAuthResult(authResult, redirectUrl: string): boolean {
          // console.log('je suis la ', firebase.auth().currentUser);

          return true;
        }
      }

    };
    this.ui.start('#firebaseui-auth-container', uiConfig);
  }
}
