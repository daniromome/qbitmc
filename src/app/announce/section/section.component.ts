import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SectionData } from '../announce.component';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './section.component.pug',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  sectionForm;
  header = new FormControl('', [
    Validators.required
  ]);

  body = new FormControl('', [
    Validators.required
  ]);

  constructor(
    public dialogRef: MatDialogRef<SectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SectionData,
    private formBuilder: FormBuilder
  ) {
    this.sectionForm = this.formBuilder.group({
      header: this.header,
      body: this.body
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.dialogRef.close({ header: this.header.value, body: this.body.value });
  }

}
