import { Injectable } from '@angular/core';
//import * as firebase from 'firebase';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { environment as env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token : string;

  constructor(

    private toastr : ToastrService,
    private router : Router,
    private http : HttpClient
  ) { }

  signUp(email: string, password : string) {
    const user = {
      username: email,
      password: password,
    }

    this.http.post(`${env.BASE_URL}/user/${env.APP_KEY}`, user).toPromise().then(res => {
      this.toastr.success('Signed Up', 'Success');
      this.router.navigate(['/authentication/signin']);
    }).catch(err => {
      console.log(err);
    })
  }

  saveUserInfo(res: Object) {
    localStorage.setItem('username', res['username']);
    localStorage.setItem('token', res['_kmd']['authtoken']);
    localStorage.setItem('userId', res['_id']);
  }

  signIn(email : string, password : string) {
    const user = {
      username: email,
      password: password,
    }

    this.http.post(`${env.BASE_URL}/user/${env.APP_KEY}/login`, user).toPromise().then(res => {
      this.token = localStorage.getItem('token');
      this.toastr.success('Logged In', 'Success');
      this.router.navigate(['/components/home']);
    }).catch(err => {
      console.log(err);
    })
  }

  logout() {
    localStorage.clear();
    this.token = null;
    this.router.navigate(['/']);
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() : boolean {
    return this.token != null;
  }

  
}