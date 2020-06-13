import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { LogInComponent } from '../log-in/log-in.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/user.model';
import { DataRequestService } from '../data-request.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.pug',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: User;
  qbitor = false;
  staff = false;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private dataRequestService: DataRequestService
  ) {
    this.user = this.dataRequestService.userValue;
    if (this.user) {
      this.qbitor = this.user.Roles.includes('Qbitor');
      this.staff = this.user.Roles.includes('Staff');
    }
  }

  openApplication() {
    this.dialog.open(ApplicationFormComponent, {
      height: '51em',
      width: '42em',
      data: { snackBar: this.snackBar }
    });
  }

  openLogIn() {
    this.dialog.open(LogInComponent, {
      height: '26em',
      width: '22em',
      data: { snackBar: this.snackBar }
    });
  }

  ngOnInit(): void {
  }

}
