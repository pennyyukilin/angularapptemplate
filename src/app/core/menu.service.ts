import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuItem, ChildrenMenuItem} from '../shared/models/models';

@Injectable()
export class MenuService {

  private pageTitle = new Subject<string>();
  private routerLink: string;


  private items: Array<MenuItem> =  [
    { title: 'Home', routerLink: '/home', key: '/home' },
    {
      title: 'Sample', key: '/sample',
       children: [
        { title: 'Order List', routerLink: '/sample/order_list' },
        { title: 'Product Form', routerLink: '/sample/product_form' }
      ]
    },
    {
      title: 'Report', key: '/report',
      children: [
        { title: 'Report Sample', routerLink: '/report/report_sample' }
      ]
    },
    {
      title: 'Admin', key: '/admin',
      children: [
        { title: 'User List', routerLink: '/admin/user_list' }
      ]
    },
    { title: 'Help', routerLink: '/help', key: '/help' }
  ];

  // Observable string streams
  pageTitle$ = this.pageTitle.asObservable();

    // Service message commands
  publishData(data: string) {
    this.pageTitle.next(data);
  }

  setRouterLink(url: string) {
    this.routerLink = url;
  }

  getRouterLink(): string {
    return this.routerLink;
  }

  getMenuItems(): Array<MenuItem> {
    return this.items;
  }

}
