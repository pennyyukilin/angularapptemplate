import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { OrderListComponent } from './order/order-list.component';
import { CurrencyConverterComponent } from './component-interaction/currency-converter.component';


const routes: Routes = [
  { path: 'order_list', component: OrderListComponent },
  { path: 'product_form', component: ProductComponent },
  { path: 'component_interaction', component: CurrencyConverterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SampleRoutingModule { }
