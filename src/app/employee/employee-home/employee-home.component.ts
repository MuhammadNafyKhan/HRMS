import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.scss'],
})
export class EmployeeHomeComponent {
  applyforLeave() {
    console.log('in apply leave');
  }
  constructor(public router: Router, private http: HttpClient) {}
  leaveForm = new FormGroup({
    birthday: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    this.applyforLeave();
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
