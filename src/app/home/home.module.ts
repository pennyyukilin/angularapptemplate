import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { ChartsModule } from '@progress/kendo-angular-charts';


@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    HomeRoutingModule,
    ChartsModule
  ],
  exports: [
  ],
  declarations: [
    DashboardComponent
  ],
  providers: []
})
export class HomeModule { }
