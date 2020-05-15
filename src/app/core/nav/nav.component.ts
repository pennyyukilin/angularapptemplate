import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PanelBarItemModel } from '@progress/kendo-angular-layout';
import { MenuService } from '../menu.service';
import { MenuItem } from '../../shared/models/models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


    items: Array<MenuItem>;

  constructor(
    public router: Router,
    private menuService: MenuService) {
    this.router = router;
  }

  ngOnInit() {
    this.items = this.menuService.getMenuItems();
    // Set title by router link when the first time the page is rendered
    setTimeout(() => {
      const routerLinks: String[] = this.router.url.split(/[\s/]+/);
      this.menuService.publishData(routerLinks[routerLinks.length - 1].replace(/_|\//g, ' '));
    }, 2000);
  }


  public stateChange(data: Array<PanelBarItemModel>): boolean {
    const focusedEvent: PanelBarItemModel = data.filter(item => item.focused === true)[0];
    if (focusedEvent.id !== undefined) {
      this.menuService.publishData(focusedEvent.title);
      this.router.navigate([focusedEvent.id]);
      this.menuService.setRouterLink(focusedEvent.id);
    }
    return false;
  }

}
