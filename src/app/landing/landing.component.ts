import { Component, OnInit } from '@angular/core';
import { DataRequestService } from '../data-request.service';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationFormComponent } from '../application-form/application-form.component';

@Component({
  templateUrl: './landing.component.pug',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  name: string;
  instantInvite: string;
  members: object[];
  online: number;

  ip: string;
  status: number;
  players: number;
  maxPlayers: number;
  playersList: [];

  applications: object[];


  constructor(
    private dataService: DataRequestService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataService.fetchDiscord().subscribe((data: any) => {
      this.name = data.name;
      this.instantInvite = data.instant_invite;
      this.members = data.members;
      this.online = data.presence_count;
    });

    this.dataService.fetchMinecraftStatistics().subscribe((data: any) => {
      this.ip = data.domain;
      this.status = data.status;
      this.players = data.info.players;
      this.maxPlayers = data.info.max_players;
      this.playersList = data.info.players_list;
    });

    this.dataService.fetchApplications().subscribe((data: any) => {
      this.applications = data.result;
    });
  }

  openDialog() {
    this.dialog.open(ApplicationFormComponent, {
      height: '51em',
      width: '42em',
    });
  }

}
