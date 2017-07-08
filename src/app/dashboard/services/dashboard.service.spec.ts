import {
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { DashboardService } from './dashboard.service';

import { Process } from './../model/process.model';
import { ProcessDetail } from './../model/process-detail.model';

describe('DashbaordService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      DashboardService
    ]
  }));

  it('should have http', inject([DashboardService], (dashboardService: DashboardService) => {
    expect(!!dashboardService.http).toEqual(true);
  }));

  it('should get data from the server', inject([DashboardService], (dashboardService: DashboardService) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    dashboardService.getData();
    expect(console.log).toHaveBeenCalled();
    expect(dashboardService.getData()).toEqual({ value: 'AngularClass' });
  }));

  it('should get processes from fake data', inject([DashboardService], (dashboardService: DashboardService) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    dashboardService.getProcesses();
    expect(console.log).toHaveBeenCalled();
    let list: Array<Process> = new Array<Process>();
    list = require('../../../assets/mock-data/mock-process-data.json');
    expect(dashboardService.getProcesses()).toEqual(list);
  }));

  it('should get process detail from fake data', inject([DashboardService], (dashboardService: DashboardService) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    dashboardService.getProcessDetail(1);
    expect(console.log).toHaveBeenCalled();
    let detail: ProcessDetail = new ProcessDetail();
    detail = require('../../../assets/mock-data/mock-process-data1.json');
    expect(dashboardService.getProcessDetail(1)).toEqual(detail);
  }));

});
