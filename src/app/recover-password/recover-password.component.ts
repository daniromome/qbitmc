import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataRequestService } from '../data-request.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit(email) {
    this.dataRequestService.recoverPassword(email).subscribe((data: any) => {
      let snackAlert: string;
      if (!data.success) { snackAlert = '✖️'; } else if (data.success) { snackAlert = '✔️'; }
      this.snackBar.open(data.result, snackAlert, {
        duration: 3000
      });
    });
  }

}
