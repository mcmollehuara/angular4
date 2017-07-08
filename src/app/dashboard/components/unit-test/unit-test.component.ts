import { Component, OnInit, Input } from '@angular/core';
import { UnitTest } from './../../model/unit-test.model';

@Component({
    moduleId: module.id.toString(),
    selector: 'unit-test',
    templateUrl: 'unit-test.component.html'
})
export class UnitTestComponent implements OnInit {
    constructor() { }
    @Input() item: UnitTest = new UnitTest();
    options: any;
    data: any;
    // @Input() ProcessId: number;
    ngOnInit() {
        // this.asyncDataWithWebpack();


    }

    ngOnChanges(){
        this.options = {
            chart: {
                type: 'pieChart',
                height: 100,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                showLabels: true,
                showLegend: false,
                showControls: false,
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                color: ['#82CEAC', '#F9B295']
            }
        };
        this.data = [
            {
                key: "Passed",
                y: this.item.Passed
            },
            {
                key: "Failed",
                y: this.item.Failed
            }
        ];
    }
    // private asyncDataWithWebpack() {
    //     setTimeout(() => {
    //         System.import('../../../../assets/mock-data/mock-unit-test-data.json')
    //             .then((json) => {
    //                 console.log('async mockData', json);
    //                 this.item = json;
    //                
    //             });

    //     });
    // }
}