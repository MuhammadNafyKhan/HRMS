import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent  } from './authenticate/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplyLeaveComponent } from './employee/apply-leave/apply-leave.component';
import { HomeComponent } from './home/home.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'employeeLeave', component: ApplyLeaveComponent},
  {path: 'employeeHome', component: EmployeeHomeComponent},
  {path: 'adminHome', component: AdminHomeComponent},
  {path: '', redirectTo: 'login',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent];
