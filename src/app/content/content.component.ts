import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  channelsOfTheWeek = [
    { name: 'Autumn', image: 'https://data.whicdn.com/images/256938776/superthumb.jpg?t=1472606549' },
    { name: 'Animals', image: 'https://data.whicdn.com/images/289408571/superthumb.jpg?t=1497425469' },
    { name: 'Food', image: 'https://data.whicdn.com/images/302076230/superthumb.jpg?t=1511611491' },
    { name: 'Nails', image: 'https://data.whicdn.com/images/224166976/superthumb.jpg?t=1455194875' },
    { name: 'Art', image: 'https://data.whicdn.com/images/280848849/superthumb.jpg?t=1489106695' },
    { name: 'School', image: 'https://data.whicdn.com/images/262370890/superthumb.jpg?t=1476376544' },
    { name: 'Friendship', image: 'https://data.whicdn.com/images/243439254/superthumb.jpg?t=1465260753' },
    { name: 'Hair', image: 'https://data.whicdn.com/images/220860745/superthumb.jpg?t=1453632205' }
  ];

  getChannels($event: Event) {
    let selector = $event.target;

    return this.channelsOfTheWeek;
  }

}
