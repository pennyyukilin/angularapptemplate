import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';

export interface IOrderService {
  getOrder();
  getOrderById(id: number);
  updateOrder(data: any);
}
@Injectable()
export class OrderService implements IOrderService {

  constructor(private restangular: Restangular) {
  }

  getOrder() {
    const orders = this.restangular.all('order');
    return orders.getList();
  }

  getOrderById(id: number) {
    const orders = this.restangular.all('order');
    return orders.get(1);
  }

  updateOrder(data: any) {
    this.restangular.all('order').post(data);
  }
}
