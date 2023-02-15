import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { date } from 'joi';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss'],
})
export class ApplyLeaveComponent {
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
}
