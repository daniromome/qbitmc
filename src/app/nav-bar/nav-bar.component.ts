import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationFormComponent } from '../application-form/application-form.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.pug',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ApplicationFormComponent, {
      height: '51em',
      width: '42em',
      // height: '400px',
      // width: '540px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
