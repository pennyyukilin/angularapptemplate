import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { MenuItem } from '../../shared/models/models';
import { Adal8Service } from 'adal-angular8';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})

export class NavTopComponent implements OnInit {
  items: Array<MenuItem>;
  userName: string;

  constructor(
    public router: Router,
    private menuService: MenuService,
    private adalService: Adal8Service) { }

  ngOnInit() {
    this.items = this.menuService.getMenuItems();
    if (this.adalService.userInfo) {
      setTimeout(() => {
        this.userName = this.adalService.userInfo.profile.name;
      }, 500);
    }
  }
}
