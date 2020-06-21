import { Component, OnInit } from '@angular/core';
import { DataRequestService } from '../data-request.service';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationFormComponent } from '../application-form/application-form.component';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  announcement: object;
  applications: object[];
  announcementCount = 0;


  constructor(
    private dataService: DataRequestService,
    public dialog: MatDialog,
    private readonly route: ActivatedRoute,
    public snackBar: MatSnackBar
  ) {
    this.route.queryParamMap.subscribe(params => {
      if (params.has('emailConfirmed')) {
        const confirmed = params.get('emailConfirmed');
        if (confirmed === 'true') {
          this.snackBar.open('Email confirmed successfully', '✓', { duration: 3000 });
        } else if (confirmed === 'false') {
          this.snackBar.open(params.get('result'), 'x', { duration: 3000 });
        }
      }
      if (params.has('passwordReset')) {
        const passReset = params.get('passwordReset');
        if (passReset === 'true') {
          this.snackBar.open('New password successfully changed', '✓', { duration: 3000 });
        } else if (passReset === 'false') {
          this.snackBar.open(params.get('result'), 'x', {duration: 3000});
        }
      }
    });
  }

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

    this.dataService.fetchAnnouncements(this.announcementCount).subscribe((data: any) => {
      this.announcement = data.result;
      this.announcementCount = data.count;
    });
  }

  openDialog() {
    this.dialog.open(ApplicationFormComponent, {
      height: '51em',
      width: '42em',
    });
  }

  changeAnnouncement(event) {
    this.dataService.fetchAnnouncements(event.pageIndex).subscribe((data: any) => {
      this.announcement = data.result;
      this.announcementCount = data.count;
    });
  }

}
