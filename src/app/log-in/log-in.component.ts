import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { RecoverPasswordComponent } from '../recover-password/recover-password.component';
import { DataRequestService } from '../data-request.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './log-in.component.pug',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  pass = new FormControl('', [
    Validators.required
  ]);

  logInForm;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private dataRequestService: DataRequestService,
    private snackBar: MatSnackBar
  ) {
    this.logInForm = this.formBuilder.group({
      Email: this.email,
      Password: this.pass
    });
  }

  ngOnInit(): void {
  }

  openRegistration() {
    this.dialog.open(RegisterComponent, {
      height: '26em',
      width: '20em',
    });
  }

  openRecovery() {
    this.dialog.open(RecoverPasswordComponent, {
      height: '26em',
      width: '20em',
    });
  }

  onSubmit(formData) {
    this.dataRequestService.logIn(formData).subscribe((data: any) => {
      console.log(data);
      if (!data.success) {
        this.snackBar.open(data.result, '✖️', {
          duration: 3000
        });
      }
    });
  }

}
