import { Component, OnInit } from '@angular/core';

import { UserInfoModel, ApplicationModel } from './../model/_index';
import { UserInfoService } from './../services/_index';

@Component({
    selector: '[navbar]',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {

    userInfo: UserInfoModel = new UserInfoModel();
    applications: ApplicationModel[];

    fullName: string;
    userName: string;
    shortDateTime: string;
    longDateTime: string;
    isMgr: boolean;

    constructor(private userInfoService: UserInfoService) {
    }

    ngOnInit() {
        // TODO
        // this.getUserInfo();
    }

    getUserInfo(): void {

        this.userInfoService.userInfo$.subscribe(x => {
            this.fullName = x.contactName;
            this.shortDateTime = x.shortDateTime;
            this.longDateTime = x.longDateTime;
            this.userName = x.vzid;
            this.isMgr = x.isManager;
        });

        this.userInfoService.getApplications().then(x => {
            this.applications = x;
        });
    }

    public logout() {
        
    }
}
