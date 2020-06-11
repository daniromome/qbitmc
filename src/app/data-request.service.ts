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

  fetchDiscord() {
    return this.http.get(`https://discordapp.com/api/guilds/${environment.discordid}/widget.json`);
  }

  fetchMinecraftStatistics() {
    return this.http.get(`https://minecraft-statistic.net/api/server/info/${environment.minecraftip}_${environment.minecraftport}`);
  }

}
