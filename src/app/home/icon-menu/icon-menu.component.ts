import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.scss']
})
export class IconMenuComponent implements OnInit {

  constructor(private route: ActivatedRoute, private restangular: Restangular) {

  }

  ngOnInit() {

  }

}
