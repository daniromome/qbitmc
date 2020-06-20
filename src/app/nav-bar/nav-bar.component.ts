import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { LogInComponent } from '../log-in/log-in.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataRequestService } from '../data-request.service';
import { StaffMenuComponent } from '../staff-menu/staff-menu.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.pug',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user;
  qbitor = false;
  staff = false;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private dataRequestService: DataRequestService
  ) {
    this.updateComponent();
  }

  openApplication() {
    this.dialog.open(ApplicationFormComponent, {
      maxHeight: '51em',
      maxWidth: '42em',
      data: { snackBar: this.snackBar }
    });
  }

  openLogIn() {
    const dialogRef = this.dialog.open(LogInComponent, {
      maxHeight: '26em',
      maxWidth: '22em',
      data: { snackBar: this.snackBar }
    });
    dialogRef.afterClosed().subscribe(() => this.updateComponent());
  }

  updateComponent() {
    this.dataRequestService.user.subscribe(x => {
      this.user = x;
    });
    if (this.user) {
      this.qbitor = this.user.Roles.includes('Qbitor');
      this.staff = this.user.Roles.includes('Staff');
    } else {
      this.qbitor = false;
      this.staff = false;
    }
  }

  logOut() {
    this.dataRequestService.logOut();
    this.updateComponent();
  }

  openStaffMenu() {
    const dialogRef = this.dialog.open(StaffMenuComponent, {
      maxHeight: '26em',
      maxWidth: '22em',
      data: { snackBar: this.snackBar }
    });
    dialogRef.afterClosed().subscribe(() => this.updateComponent());
  }

  ngOnInit(): void {
  }

}
