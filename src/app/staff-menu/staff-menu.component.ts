import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnnounceComponent } from '../announce/announce.component';

@Component({
  templateUrl: './staff-menu.component.pug',
  styleUrls: ['./staff-menu.component.css']
})
export class StaffMenuComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openAnnounce(){
    this.dialog.open(AnnounceComponent, {
      maxWidth: '30em',
      maxHeight: '42em'
    });
  }

}
