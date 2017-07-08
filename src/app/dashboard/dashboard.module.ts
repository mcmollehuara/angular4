import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routes';
import { DashboardService } from './services/dashboard.service';
import { DashboardComponent } from './dashboard.component';
import { BuildComponent } from './components/build/build.component';
import { FunctionalTestComponent } from './components/functional-test/functional-test.component';
import { MetricComponent } from './components/metric/metric.component';
import { UnitTestComponent } from './components/unit-test/unit-test.component';
import { ResultComponent } from './components/result/result.component';


import { ChartsModule } from './../shared/components/charts/charts.module';
import { HttpService } from './../shared/services/http.service';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import {ToastyModule, ToastyService} from 'ng2-toasty';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule, DashboardRoutes, ChartsModule],
    exports: [],
    declarations: [
        DashboardComponent,
        BuildComponent,
        FunctionalTestComponent,
        MetricComponent,
        UnitTestComponent,        
        ResultComponent
    ],
    providers: [DashboardService, ToastyService,
        {
            provide: HttpService,
            useFactory: (backend: XHRBackend, options: RequestOptions, loadingBarService: SlimLoadingBarService, toastyService: ToastyService) => {
                return new HttpService(backend, options, loadingBarService, toastyService);
            },
            deps: [XHRBackend, RequestOptions, SlimLoadingBarService, ToastyService]
        },]
})
export class DashboardModule { }
