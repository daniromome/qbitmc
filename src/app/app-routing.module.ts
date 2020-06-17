import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { WipComponent } from './wip/wip.component';
import { LandingComponent } from './landing/landing.component';
import { CommunityComponent } from './community/community.component';
import { AuthGuard } from './auth.guard';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'community', component: CommunityComponent, canActivate: [AuthGuard]},
  { path: 'confirm-user/:id', component: ConfirmUserComponent},
  { path: 'reset-password/:token', component: ResetPasswordComponent},
  { path: '**', component: WipComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
