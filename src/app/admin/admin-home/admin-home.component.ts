import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { AddUserComponent } from '../add-user/add-user.component';
import { NgModule } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { GetUserComponent } from '../get-user/get-user.component';
import { ListUsersComponent } from '../list-users/list-users.component';
import { LoginComponent } from 'src/app/authenticate/login/login.component';
import { clear } from 'console';
export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
  private obj1;
  http: any;
  constructor(public dialog: MatDialog) {
    this.obj1 = new ListUsersComponent();
  }
  emailDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      data: { password: '', email: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed result', result);
      console.log('Auth Token :', LoginComponent.auth_token);
      result.deptId = Number(result.deptId);
      result.designationId = Number(result.designationId);
      result.reportingManager = Number(49);
      result.role = Number(result.role);
      const httpOptions = {
        headers: new HttpHeaders({
          'x-auth-token': LoginComponent.auth_token,
        }),
      };

      // Make the HTTP post request with the headers
      this.http
        .post(
          'https://6b6d-202-163-113-216.ap.ngrok.io/api/user/create',
          result,
          httpOptions
        )
        .subscribe((response: any) => {
          console.log(response);
        });
    });
  }
  listUsers(): void {
    this.obj1.showUsers();
  }

  getUserDialog(): void {
    const dialogRef = this.dialog.open(GetUserComponent, {
      data: { email: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  onSubmit() {}

  applyforLeave() {
    console.log('in apply leave');
  }

  changePasswordClicked() {
    console.log('changePasswordClicked');
  }

  viewProfileClicked() {
    console.log('viewProfileClicked');
  }
  viewAttendanceClicked() {
    console.log('viewAttendanceClicked');
  }
}
