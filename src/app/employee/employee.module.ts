import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';



@NgModule({
  declarations: [
    ViewLeaveComponent,
    ApplyLeaveComponent,
    ProfileComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
