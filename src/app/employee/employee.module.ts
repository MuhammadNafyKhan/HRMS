import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';



@NgModule({
  declarations: [
    ViewLeaveComponent,
    ApplyLeaveComponent,
    ProfileComponent,
    AttendanceComponent,
    EmployeeHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
