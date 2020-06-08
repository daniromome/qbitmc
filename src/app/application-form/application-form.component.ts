import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RulesComponent } from '../rules/rules.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';

@Component({
  templateUrl: './application-form.component.pug',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  applicationForm;
  ign;
  url;
  Activities = new FormControl();
  activityList: string[] = [
    'Architect, I like building things and I consider myself really creative',
    'Redstone Mechanic, I enjoy doing redstone inventions for automation and fun',
    'Technical Engineer, I know how things function on a technical level and I can explain them easily',
    'Grind Opportunist, I like obtaining lots of resources and love grinding for them',
    'Casual Crafter, I play every now and then to have some fun and entertain myself'
  ];
  safeUrlReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  linkFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.safeUrlReg),
  ]);

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    this.applicationForm = this.formBuilder.group({
      Forename: '',
      IGN: '',
      Reasons: '',
      Experiences: '',
      Activities: this.Activities,
      PrevWork: this.linkFormControl,
      Agreement: ''
    });
  }

  openRules() {
    const dialogRef = this.dialog.open(RulesComponent, {
      height: '49em',
      width: '42em',
      // height: '400px',
      // width: '540px',
    });
  }

  openPrivacyPolicy() {
    const dialogRef = this.dialog.open(PrivacyPolicyComponent, {
      height: '49em',
      width: '42em',
      // height: '400px',
      // width: '540px',
    });
  }

  onSubmit(applicationData) {
    console.log('Your application has been submited', applicationData);
  }

  onKey(value: string) {
    this.ign = value;
    this.url = `https://minotar.net/helm/${this.ign}/100.png`;
  }

  ngOnInit(): void {
  }

}
