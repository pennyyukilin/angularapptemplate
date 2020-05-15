import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { CurrencyConverterComponent } from './component-interaction/currency-converter.component';
import { OrderListComponent } from './order/order-list.component';
import { ProductComponent } from './product/product.component';
import { OrderService } from './shared/order.service';
import { SampleRoutingModule } from './sample-routing.module';
import { ConversionDetailComponent } from './component-interaction/conversion-detail.component';
import { ConversionEditComponent } from './component-interaction/conversion-edit.component';
import { DataService } from './shared/data.service';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    SampleRoutingModule
  ],
  exports: [
  ],
  declarations: [
    CurrencyConverterComponent,
    ConversionDetailComponent,
    ConversionEditComponent,
    OrderListComponent,
    ProductComponent
  ],
  providers: [OrderService, DataService]
})
export class SampleModule { }
