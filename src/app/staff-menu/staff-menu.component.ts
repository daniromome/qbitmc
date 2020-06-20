import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AnnounceComponent } from '../announce/announce.component';

@Component({
  templateUrl: './staff-menu.component.pug',
  styleUrls: ['./staff-menu.component.css']
})
export class StaffMenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<StaffMenuComponent>
  ) { }

  ngOnInit(): void {
  }

  openAnnounce(){
    const dialogRef = this.dialog.open(AnnounceComponent, {
      maxWidth: '30em',
      maxHeight: '42em'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.dialogRef.close();
    });
  }

}
