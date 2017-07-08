import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Process } from './../model/process.model';
import { ProcessDetail } from './../model/process-detail.model';

import { HttpService } from './../../shared/services/http.service';

@Injectable()
export class DashboardService {

    public value = 'Angular 2';

    constructor(
        private httpService: HttpService
    ) { }

    public getData() {
        console.log('Dashboard#getData(): Get Data');
        // return this.http.get('/assets/data.json')
        // .map(res => res.json());
        return {
            value: 'AngularClass'
        };
    }

    public getProcesses(): Promise<Array<Process>>  {
        return this.httpService.get('../../../assets/mock-data/mock-process-data.json')
        .map(res => res.json()).toPromise();
        // console.log('Dashboard#getProcesses(): Get Pipeline');
        // let list: Array<Process>;
        // list = require('../../../assets/mock-data/mock-process-data.json');
        // return list;       
    }

    public getProcessDetail(processId: number): Promise<ProcessDetail> {
        return this.httpService.get(`../../../assets/mock-data/mock-process-data${processId}.json`)
        .map(res => res.json()).toPromise();
        // console.log('Dashboard#getProcessDetail(): Get process detail');
        // let detail: ProcessDetail;
        // detail = require(`../../../assets/mock-data/mock-process-data${processId}.json`);
        // return detail;        
    }
}