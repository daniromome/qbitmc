import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataRequestService } from '../data-request.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.pug',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token;

  password = new FormControl('', [
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]*'),
    Validators.minLength(6)
  ]);

  confirm = new FormControl('', [
    Validators.required
  ]);

  passwordForm;

  constructor(
    private dataRequestService: DataRequestService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(params => {
      this.token = params.get('token');
    });
    this.passwordForm = this.formBuilder.group({
      token: this.token,
      Password: this.password
    });
  }

  ngOnInit(): void {
  }

  onKey() {
    if (this.password !== this.confirm) {
      this.confirm.setErrors({
        pattern: 'Passwords do not match'
      });
    }
  }

  onSubmit(userData) {
    this.dataRequestService.resetPassword(userData).subscribe((data: any) => {
      if (data.success) {
        this.router.navigateByUrl('/', {
          queryParams: { passwordReset : true }
        });
      } else { this.router.navigate(['/'], {
        queryParams: { passwordReset : false, result: data.result }
      }); }
    });
  }

}
