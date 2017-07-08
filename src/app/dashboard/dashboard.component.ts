import { Component, OnInit, Input, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Process } from './model/process.model';
import { ProcessDetail } from './model/process-detail.model';

import { DashboardService } from './services/dashboard.service';
import { ToastyService } from 'ng2-toasty';
@Component({
    moduleId: module.id.toString(),
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    providers: [DashboardService]

})
export class DashboardComponent implements OnInit {

    public list: Array<Process>;
    public detail: ProcessDetail = new ProcessDetail();
    public localState: any;
    @Input() pipelineName: string = "main";
    @Input() pipelineId: number = 1;
    constructor(public dashboardService: DashboardService, public toastyService: ToastyService) {
    }

    ngOnInit(): void {
        console.log('hello `Dashboard` component');
        // this.setLocalStorage();
        this.toastyService.success({ title: "Success", msg: "Welcome to Demo pipeline!" });
        this.asyncDataWithWebpack();

    }
    //////////////////////////////////////////
    private setLocalStorage() {
        let tokenInfo=
        { "bearer":"Bearer da759c62d38db73bb29de20c3b97818943ba3be0", "token":{ "token":"da759c62d38db73bb29de20c3b97818943ba3be0", "refresh_token":"e487dabec0361d22b6db1164c00c81f3a14e4244", "expire_in_min":30, "user":{ "user_sid":"S-1-5-21-4131678173-2989437408-1988978235-125252", "user_name":"V504274", "display_name":"Condori Mollehuara, Miguel", "email":"mcondori@one.verizon.com" } },"startDate":"2017-01-30T14:12:35.252Z" };
        
        localStorage.setItem('tokenInfo', JSON.stringify(tokenInfo));

    }
    private onExpandPanel(process: Process) {
        this.list.forEach(element => {
            if (element.Id == process.Id) {
                element.Expanded = true;
                this.asyncDataDetailWithWebpack(process.Id);
            }
            else {
                element.Expanded = false;
            }
        });
    }

    private onCollapsePanel(process: Process) {
        this.list.forEach(element => {
            element.Expanded = false;
        });
    }

    //////////////////////////////////
    private asyncDataWithWebpack() {
        this.dashboardService.getProcesses().then(data => {
            this.list = data;
        });
    }

    private asyncDataDetailWithWebpack(processId: number) {
        // this.detail = this.dashboardService.getProcessDetail(processId);
        this.dashboardService.getProcessDetail(processId).then(data => {
            this.detail = data;
        }
        );
    }
}
