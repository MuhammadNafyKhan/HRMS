import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ApproveLeaveComponent } from './approve-leave/approve-leave.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ApproveLeaveComponent,
    EditAdminComponent,
    ListUsersComponent,
    EditUserComponent,
    ProfileComponent,
    AttendanceComponent,

    

  ],
  imports: [CommonModule, BrowserModule,FormsModule, MatFormFieldModule],
})
export class AdminModule {}
