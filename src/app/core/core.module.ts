import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExceptionLoggingService } from './logging/exception-logging.service';
import { NavComponent } from './nav/nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutComponent } from './layout/layout.component';
import { AppInsightsMonitoringService } from './logging/app-insights-monitoring.service';
import { TrackableComponent } from './logging/trackable.component';
import { MenuService } from './menu.service';
import { FooterComponent } from './footer/footer.component';
import { throwIfAlreadyLoaded } from './module-import-guard';


@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    ToolbarComponent,
    TrackableComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    NgbModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: ExceptionLoggingService },
    AppInsightsMonitoringService,
    MenuService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
