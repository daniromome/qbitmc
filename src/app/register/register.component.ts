import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataRequestService } from '../data-request.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar
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
    let snackAlert: string;
    this.dataRequestService.registerUser(userData).subscribe((data: any) => {
      if (!data.success) { snackAlert = '✖️'; } else if (data.success) { snackAlert = '✔️'; }
      this.snackBar.open(data.result, snackAlert, {
        duration: 3000
      });
    });
  }

  ngOnInit(): void {
  }

}
