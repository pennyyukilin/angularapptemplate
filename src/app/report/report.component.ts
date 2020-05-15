
import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { ReportService } from './shared/report.service';
import * as pbi from 'powerbi-client';

@Component({
  selector: 'app-planning-report',
  template: '<div id="reportContainer" style="height:630px;"></div>'
})
export class ReportComponent implements AfterViewInit {

    constructor(private reportService: ReportService, private myElement: ElementRef) { }

    ngAfterViewInit() {
      const vm = this;

      const reportId = 'b4ff3f9a-e5f2-41d5-a9f0-c58f1eb6bc48';
      const groupId = 'd8e6b954-d29d-45ae-a27e-a31d7c939c0d';
      const embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=' + reportId + '&groupId=' + groupId;

      const embedContainer = this.myElement.nativeElement.querySelector('#reportContainer');


      this.reportService.findById(groupId, reportId).toPromise().then(function (response) {
          // Get models. models contains enums that can be used.
          const models = pbi.models;
          const powerBiFilterList = [];
          const filter = {
              $schema: embedUrl,
              target: {
                  table: 'ESRAPlanning',
                  column: '2017'
              },
              operator: 'In',
              values: [1]
          };
          powerBiFilterList.push(filter);

          // Embed configuration used to describe the what and how to embed.
          // This object is used when calling powerbi.embed.
          // This also includes settings and options such as filters.
          // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
          const config: any = {
              type: 'report',
              tokenType: models.TokenType.Embed,
              accessToken: response.token,
              embedUrl: embedUrl,
              id: reportId,
              permissions: models.Permissions.All,
              filters: powerBiFilterList,
              settings: {
                  filterPaneEnabled: false,
                  navContentPaneEnabled: true
              }
          };

              // Embed the report and display it within the div container.
          const powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
          const report = powerbi.embed(embedContainer, config);

          // Report.off removes a given event handler if it exists.
          report.off('loaded');

          // Report.on will add an event handler which prints to Log window.
          report.on('loaded', function() {
              console.log('Loaded');
          });
      });
  }

}
