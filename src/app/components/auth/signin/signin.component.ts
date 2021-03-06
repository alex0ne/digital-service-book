import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
  login(form : NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.signIn(username, password);
  }

}
