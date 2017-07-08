import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/share';
import { Observable }     from 'rxjs/Observable';

import { UserInfoModel, ApplicationModel } from './../model/_index';


@Injectable()
export class UserInfoService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    public userInfo: UserInfoModel;
    public userInfoObservable: any;
    public userInfo$: Observable<UserInfoModel>;

    constructor(private http: Http) {
        this.userInfo$ = new Observable(observer => {
                this.userInfoObservable = observer;
            }).share();
     }

    getUserInfo(): Promise<UserInfoModel> {
        let url = process.env.API_URL + "Account/GetUserInfo";
        let ctx = this;
        return this.http.post(url, null).toPromise()
            .then(response => {
                this.userInfo = response.json() as UserInfoModel;
                this.userInfoObservable.next(this.userInfo);
                return this.userInfo;
            })
            .catch(this.handleError);
    }

    getApplications(): Promise<ApplicationModel[]> {
        let url = process.env.API_URL + "Account/Applications";
        return this.http.post(url, null)
            .toPromise()
            .then(response => response.json() as ApplicationModel[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    loadUserInfo() {
        if(this.userInfo){
            this.userInfoObservable.next(this.userInfo);
        }
    }
}