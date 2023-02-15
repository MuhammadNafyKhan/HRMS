import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { date } from 'joi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public router: Router, private http: HttpClient) {}

  title = 'LoginForm';
  loginForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
  login = async () => {
    // console.log('Form Values : ', this.loginForm.value);

    try {
      this.http.post('http://10.0.8.128:3500/api/user/login', {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }).subscribe((data: any) => {
        if (data.status === '1') {
          console.log('Status 1');
          this.router.navigate(['/employeeHome']);
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
