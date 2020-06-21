import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StripeModule } from 'stripe-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { RulesComponent } from './rules/rules.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { WipComponent } from './wip/wip.component';
import { LandingComponent } from './landing/landing.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CommunityComponent } from './community/community.component';
import { StaffMenuComponent } from './staff-menu/staff-menu.component';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { AnnounceComponent } from './announce/announce.component';
import { ShopComponent } from './shop/shop.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionComponent } from './announce/section/section.component';
import { JwtInterceptor } from './jwtinterceptor';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutUsComponent,
    ApplicationFormComponent,
    RulesComponent,
    PrivacyPolicyComponent,
    WipComponent,
    LandingComponent,
    LogInComponent,
    RegisterComponent,
    RecoverPasswordComponent,
    ResetPasswordComponent,
    CommunityComponent,
    StaffMenuComponent,
    ConfirmUserComponent,
    AnnounceComponent,
    ShopComponent,
    ProfileComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSnackBarModule,
    ClipboardModule,
    MatExpansionModule,
    MatDividerModule,
    MatPaginatorModule,
    StripeModule.forRoot(environment.stripekey)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
