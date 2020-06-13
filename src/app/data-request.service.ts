import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  submitApplication(application) {
    return this.http.post(`${environment.api}/application/submit`, application);
  }

  fetchApplications() {
    return this.http.get(`${environment.api}/application/fetch`);
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  logIn(userData) {
    return this.http.post<any>(`${environment.api}/user/logIn`, userData)
      .pipe(map(data => {
        if (data.success) {
          const user: User = new User(data.user);
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(data);
        } else {
          this.userSubject.next(data);
        }
        return data;
    }));
  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  registerUser(userData){
    return this.http.post(`${environment.api}/user/register`, userData);
  }

  confirmEmail(id){
    return this.http.get(`${environment.api}/user/email/${id}`);
  }

  recoverPassword(email) {
    return this.http.get(`${environment.api}/user/password/recover/${email}`);
  }

  resetPassword(userData){
    return this.http.put(`${environment.api}/user/password/reset`, userData);
  }

  fetchDiscord() {
    return this.http.get(`https://discordapp.com/api/guilds/${environment.discordid}/widget.json`);
  }

  fetchMinecraftStatistics() {
    return this.http.get(`https://minecraft-statistic.net/api/server/info/${environment.minecraftip}_${environment.minecraftport}`);
  }

}
