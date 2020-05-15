import { Component, OnInit } from '@angular/core';
import { Adal8Service } from 'adal-angular8';
import { Constants } from './shared/models/constants';
import { AppInsightsMonitoringService } from './core/logging/app-insights-monitoring.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = Constants.APP_NAME;
  isLogin = false;

  constructor(private adalService: Adal8Service, private appInsightsMonitoringService: AppInsightsMonitoringService) {
    this.adalService.init(environment.adalConfig);
  }

  ngOnInit() {
      // Handle callback if this is a redirect from Azure
      this.adalService.handleWindowCallback();

      // Check if the user is authenticated. If not, call the login() method
      if (!this.adalService.userInfo.authenticated) {
        this.adalService.login();
      } else {
        if (window.location.href.indexOf('id_token=') < 0 ) {
          this.isLogin = true;
        }
      }
  }
}
