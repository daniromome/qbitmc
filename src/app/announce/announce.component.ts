import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SectionComponent } from './section/section.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataRequestService } from '../data-request.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface SectionData {
  header: string;
  body: string;
}
@Component({
  templateUrl: './announce.component.pug',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {

  Sections: SectionData[] = [];
  Section: SectionData;

  announcementForm;
  title = new FormControl('', [
    Validators.required
  ]);
  image = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private dataRequestService: DataRequestService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<AnnounceComponent>,
  ) {
    this.announcementForm = this.formBuilder.group({
      Title: this.title,
      Image: this.image,
      Content: this.Sections,
      Author: this.dataRequestService.userValue.IGN
    });
  }

  ngOnInit(): void {
  }

  addSection(): void {
    const dialogRef = this.dialog.open(SectionComponent, {
      maxHeight: '33em',
      maxWidth : '44em'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.Section = {
          header: result.header,
          body: result.body,
        };
        this.Sections.push(this.Section);
      }
    });
  }

  removeItem(section): void {
    this.Sections.splice(section, 1);
  }

  onSubmit(): void {
    this.announcementForm.get('Content').setValue(this.Sections);
    if (this.Sections.length === 0) {
      this.snackBar.open('There must be at least one section in the announcement', 'x', {
        duration: 3000
      });
      return;
    }
    this.dataRequestService.createAnnouncement(this.announcementForm.value).subscribe((data: any) => {
      if (data.success) {
        this.snackBar.open('Successfully submited a new announcement', '✓', {
          duration: 3000
        });
      } else if (data.code === 400) {
        this.dataRequestService.logOut();
      } else {
        this.snackBar.open(data.result, 'x', {
          duration: 3000
        });
      }
      this.dialogRef.close();
    });
  }

}
