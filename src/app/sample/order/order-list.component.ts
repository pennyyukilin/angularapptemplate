import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { OrderService } from '../shared/order.service';
import { TrackableComponent } from '../../core/logging/trackable.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent extends TrackableComponent implements OnInit {

  public allOrders: Observable<GridDataResult>;
  constructor(private orderService: OrderService) {
    super();
  }

  ngOnInit() {
    this.allOrders = this.orderService.getOrder();
  }

}
