import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';

export interface IReportService {
    findById(groupId: string, reportId: string): any;
}

@Injectable()
export class ReportService implements IReportService {

    static $inject = ['Restangular'];

    constructor(private restangular: Restangular) {
    }

    findById(groupId: string, reportId: string) {
        return this.restangular.all('powerbi').customGET('token/' + groupId + '/report/' + reportId );
    }

}
