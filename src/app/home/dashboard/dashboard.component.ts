import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public weatherData = [
    { month: 'January', min: 5, max: 11 },
    { month: 'February', min: 5, max: 13 },
    { month: 'March', min: 7, max: 15 },
    { month: 'April', min: 10, max: 19 },
    { month: 'May', min: 13, max: 23 },
    { month: 'June', min: 17, max: 28 },
    { month: 'July', min: 20, max: 30 },
    { month: 'August', min: 20, max: 30 },
    { month: 'September', min: 17, max: 26 },
    { month: 'October', min: 13, max: 22 },
    { month: 'November', min: 9, max: 16 },
    { month: 'December', min: 6, max: 13 }
  ];

  public pieData: any = [
    { category: 'Eaten', value: 0.42 },
    { category: 'Not eaten', value: 0.58 }
  ];
  public data: any[] = [{
    kind: 'Hydroelectric', share: 0.175
  }, {
    kind: 'Nuclear', share: 0.238
  }, {
    kind: 'Coal', share: 0.118
  }, {
    kind: 'Solar', share: 0.052
  }, {
    kind: 'Wind', share: 0.225
  }, {
    kind: 'Other', share: 0.192
  }];

  public model = [{
    stat: 'Impressions ',
    count: 434823,
    color: '#0e5a7e'
  }, {
    stat: 'Clicks',
    count: 356854,
    color: '#166f99'
  }, {
    stat: 'Unique Visitors',
    count: 280022,
    color: '#2185b4'
  }, {
    stat: 'Downloads',
    count: 190374,
    color: '#319fd2'
  }, {
    stat: 'Purchases',
    count: 120392,
    color: '#3eaee2'
  }];


  public labelContentFrom(e: any): string {
      return `${ e.value.from } °C`;
  }

  public labelContentTo(e: any): string {
      return `${ e.value.to } °C`;
  }


  public labelContent(e: any): string {
    return e.category;
  }
  constructor(private route: ActivatedRoute, private restangular: Restangular) {

  }

  ngOnInit() {

  }


}


