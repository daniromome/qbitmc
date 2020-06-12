import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.pug',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openApplication() {
    this.dialog.open(ApplicationFormComponent, {
      height: '51em',
      width: '42em',
    });
  }

  openLogIn() {
    this.dialog.open(LogInComponent, {
      height: '26em',
      width: '20em',
    });
  }

  ngOnInit(): void {
  }

}
