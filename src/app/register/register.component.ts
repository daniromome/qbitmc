import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataRequestService } from '../data-request.service';
import { LogInComponent } from '../log-in/log-in.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl: './register.component.pug',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]*'),
    Validators.minLength(6)
  ]);

  confirmPassword = new FormControl('', [
    Validators.required
  ]);

  ign = new FormControl('', [
    Validators.required
  ]);

  registrationForm;

  constructor(
    private formBuilder: FormBuilder,
    private dataRequestService: DataRequestService,
    public dialogRef: MatDialogRef<LogInComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.registrationForm = this.formBuilder.group({
      IGN: this.ign,
      Email: this.email,
      Password: this.password
    });
  }

  onKey() {
    if (this.password !== this.confirmPassword) {
      this.confirmPassword.setErrors({
        pattern: 'Passwords do not match'
      });
    }
  }

  onSubmit(userData) {
    this.dataRequestService.registerUser(userData).subscribe((data: any) => {
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

  ngOnInit(): void {
  }

}
