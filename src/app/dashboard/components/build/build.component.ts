import { Component, OnInit, Input } from '@angular/core';
import { Build } from './../../model/build.model';

@Component({
    moduleId: module.id.toString(),
    selector: 'build',
    templateUrl: 'build.component.html'
})
export class BuildComponent implements OnInit {
    constructor() { }
    // @Input() ProcessId: number;
    @Input() item: Build = new Build();
    ngOnInit() {
    //    this.asyncDataWithWebpack();
    }

    // private asyncDataWithWebpack() {
    //     setTimeout(() => {
    //         System.import('../../../../assets/mock-data/mock-build-data.json')
    //             .then((json) => {
    //                 console.log('async mockData', json);
    //                 this.item = json;
    //             });

    //     });
    // }
}