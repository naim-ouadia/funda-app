import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {first, map} from 'rxjs/operators';
import firebase from 'firebase';
import {loggedIn} from '@angular/fire/auth-guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoggedIn = new Observable();
  isLoggedout = new Observable();

  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => console.log(user));
    this.isLoggedIn = this.afAuth.authState.pipe(first());
    this.isLoggedout = this.afAuth.authState.pipe(map(loggedIn => !loggedIn));
  }

  logOut() {
    this.afAuth.signOut();
  }

}
