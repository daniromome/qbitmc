import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataRequestService } from '../data-request.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogInComponent } from '../log-in/log-in.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './recover-password.component.pug',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  Email = new FormControl('', [
    Validators.email,
    Validators.required
  ]);

  constructor(
    private dataRequestService: DataRequestService,
    public dialogRef: MatDialogRef<LogInComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
  }

  onSubmit(email) {
    this.dataRequestService.recoverPassword(email).subscribe((data: any) => {
      if (data.success) {
        this.data.snackBar.open(data.result, '✓', {
          duration: 3000
        });
        this.dialogRef.close();
      } else {
        this.data.snackBar.open(data.result, 'x', {
          duration: 3000
        });
      }
    });
  }

}
