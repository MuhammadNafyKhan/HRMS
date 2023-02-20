import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { date } from 'joi';
import { Observable } from 'rxjs';
import { consumers } from 'stream';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public router: Router, private http: HttpClient) {}

  title = 'LoginForm';
  public static auth_token: any;
  loginForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  login = async () => {
    console.log('Form Values : ', this.loginForm.value);
    try {
      console.log('Login Request to be sent data');
      console.log('Email : ', this.loginForm.value.email);
      console.log('Password : ', this.loginForm.value.password);
      // this.router.navigate(['/adminHome']);

      this.http
        .post('http://10.0.8.128:3500/api/user/login', {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        })
        .subscribe((data: any) => {
          if (data.result.role.role_id === 3) {
            console.log('Status 3');
            console.log(data.result.token);
            this.router.navigate(['/employeeHome']);
          } else if (data.result.role.role_id === 1) {
            console.log('Status 1');
            console.log(data.result.token);
            LoginComponent.auth_token = String(data.result.token);

            this.router.navigate(['/adminHome']);
          } else {
            console.log("username or password doesn't match");
          }
        });
    } catch (err) {
      console.log('error occured');
    }
  };
  onSubmit() {
    this.login();
  }
}
