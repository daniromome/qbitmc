import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './about-us.component.pug',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  datapackList = [
    { name: 'Anti Enderman Grief', sorce: 'https://www.youtube.com/watch?v=lfcwKXhjC9Y&feature=youtu.be&t=241' },
    { name: 'Coordinates HUD', source: 'https://www.youtube.com/watch?v=LSJNVuKMVrY' },
    { name: 'Dragon Drops', source: 'https://www.youtube.com/watch?v=lfcwKXhjC9Y&feature=youtu.be&t=359' },
    { name: 'More Mob Heads', source: 'https://www.youtube.com/watch?v=C04fwclOdQo' },
    { name: 'Nether Portal Coords', source: 'https://www.youtube.com/watch?v=_rRR-CBq1yM' },
    { name: 'Player Graves', source: 'https://www.youtube.com/watch?v=zev-h5kw3U4' },
    { name: 'Player Head Drops', source: 'https://www.youtube.com/watch?v=Usb1mEIK_wQ' },
    { name: 'Track Raw Statistics', source: 'https://www.youtube.com/watch?v=yq2W2F-k18E' },
    { name: 'Track Statistics', source: 'https://www.youtube.com/watch?v=lfcwKXhjC9Y&feature=youtu.be&t=529' },
    { name: 'Some of the Crafting Tweaks', source: 'https://vanillatweaks.net/picker/crafting-tweaks/' }
  ];

  modificationList = [
    { name: 'Carpet', source: 'https://github.com/gnembon/fabric-carpet' },
    { name: 'Fabric Discord Link', source: 'https://github.com/arthurbambou/Fabric---Discord-Link' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
