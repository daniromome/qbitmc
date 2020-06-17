import { Component, OnInit } from '@angular/core';
import { DataRequestService } from '../data-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.pug',
  styleUrls: ['./confirm-user.component.css']
})
export class ConfirmUserComponent implements OnInit {

  id: string;

  confirmationForm;

  pass = new FormControl('', [
    Validators.required
  ]);

  constructor(
    private dataRequestService: DataRequestService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.confirmationForm = this.formBuilder.group({
      _id: this.id,
      Password: this.pass
    });
  }

  ngOnInit(): void {}

  onSubmit(userData) {
    this.dataRequestService.confirmEmail(userData).subscribe((data: any) => {
      if (data.success) {
        this.router.navigateByUrl('/', {
          queryParams: { emailConfirmed : true }
        });
      } else { this.router.navigate(['/'], {
        queryParams: { emailConfirmed : false, result: data.result }
      }); }
    });
  }


}
