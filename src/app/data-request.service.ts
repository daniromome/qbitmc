import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor(
    private http: HttpClient
  ) { }

  submitApplication(application) {
    return this.http.post(`${environment.api}/application/submit`, application);
  }

  fetchApplications() {
    return this.http.get(`${environment.api}/application/fetch`);
  }

  logIn(userData) {
    return this.http.post(`${environment.api}/user/logIn`, userData);
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
