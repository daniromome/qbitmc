import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RulesComponent } from '../rules/rules.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { DataRequestService } from '../data-request.service';

@Component({
  templateUrl: './application-form.component.pug',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  checked = false;
  applicationForm;
  ign;
  url;
  activityList: string[] = [
    'Architect, I like building things and I consider myself really creative',
    'Redstone Mechanic, I enjoy doing redstone inventions for automation and fun',
    'Technical Engineer, I know how things function on a technical level and I can explain them easily',
    'Grind Opportunist, I like obtaining lots of resources and love grinding for them',
    'Casual Crafter, I play every now and then to have some fun and entertain myself'
  ];
  safeUrlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  Forename  = new FormControl('', [
    Validators.required
  ]);
  Discord  = new FormControl('', [
    Validators.required
  ]);
  IGN = new FormControl('', [
    Validators.required
  ]);
  Reasons = new FormControl('', [
    Validators.required
  ]);
  Experiences = new FormControl('', [
    Validators.required
  ]);
  Activities = new FormControl('', [
    Validators.required
  ]);
  linkFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.safeUrlReg),
  ]);

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataRequestService,
    public dialog: MatDialog
  ) {
    this.applicationForm = this.formBuilder.group({
      Forename: this.Forename,
      Discord: this.Discord,
      IGN: this.IGN,
      Reasons: this.Reasons,
      Experiences: this.Experiences,
      Activities: this.Activities,
      PrevWork: this.linkFormControl,
      Agreement: ''
    });
  }

  openRules() {
    const dialogRef = this.dialog.open(RulesComponent, {
      height: '51em',
      width: '42em',
      // height: '400px',
      // width: '540px',
    });
  }

  openPrivacyPolicy() {
    const dialogRef = this.dialog.open(PrivacyPolicyComponent, {
      height: '51em',
      width: '42em',
      // height: '400px',
      // width: '540px',
    });
  }

  onSubmit(applicationData) {
    this.dataService.submitApplication(applicationData).subscribe((data: any[]) => {
      console.log({ Message: 'Your application has been submited', Application: data});
    });
  }

  onKey(value: string) {
    this.ign = value;
    this.url = `https://minotar.net/helm/${this.ign}/100.png`;
  }

  ngOnInit(): void {
  }

}
