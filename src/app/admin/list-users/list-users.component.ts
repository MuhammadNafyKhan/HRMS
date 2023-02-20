import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
export interface DialogData {}
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent {
  public http;
  constructor() {
    this.http = HttpClient;
  }

  public async showUsers() {
    console.log(
      await this.http.get('https://jsonplaceholder.typicode.com/users')
    );
  }
}
