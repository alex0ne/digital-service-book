import { Component, OnInit,  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }
  register(form : NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.signUp(username, password);
  }

}