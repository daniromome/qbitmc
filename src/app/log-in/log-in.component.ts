import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { RecoverPasswordComponent } from '../recover-password/recover-password.component';
import { DataRequestService } from '../data-request.service';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { first } from 'rxjs/operators';
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
    public dialogRef: MatDialogRef<NavBarComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
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
      maxHeight: '33em',
      maxWidth: '22em',
      data: { snackBar: this.data.snackBar }
    });
  }

  openRecovery() {
    this.dialog.open(RecoverPasswordComponent, {
      maxHeight: '15em',
      maxWidth: '22em',
      data: { snackBar: this.data.snackBar }
    });
  }

  onSubmit(formData) {
    this.dataRequestService.logIn(formData)
      .pipe(first())
      .subscribe((data: any) => {
        if (data.success) {
          this.data.snackBar.open(data.result, '✓', {
            duration: 3000
          });
          this.router.navigate(['/community']);
          this.dialogRef.close();
        } else {
          this.data.snackBar.open(data.result, 'x', {
            duration: 3000
          });
        }
      });
    /* this.dataRequestService.logIn(formData).subscribe((data: any) => {
      console.log(data);
      if (!data.success) {
        this.data.snackBar.open(data.result, 'x', {
          duration: 3000
        });
      } else {
        localStorage.setItem('user', JSON.stringify(data.user));
        this.data.snackBar.open(data.result, '✓', {
          duration: 3000
        });
        if (this.router.url !== '/') {
          this.router.navigate(['/']);
        } else {
          this.dialogRef.close();
        }
      }
    }); */
  }

}
