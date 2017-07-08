import { Component, OnInit, Input } from '@angular/core';
import { Result } from './../../model/result.model';

@Component({
    moduleId: module.id.toString(),
    selector: 'result',
    templateUrl: 'result.component.html'
})
export class ResultComponent implements OnInit {
    constructor() { }
    @Input() item: Result = new Result();
    // @Input() ProcessId: number;
    ngOnInit() {
        // this.asyncDataWithWebpack();
    }

    // private asyncDataWithWebpack() {
    //     setTimeout(() => {
    //         System.import('../../../../assets/mock-data/mock-result-data.json')
    //             .then((json) => {
    //                 console.log('async result', json);
    //                 this.item = json;
    //             });

    //     });
    // }
}