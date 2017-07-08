import { Input, Component, OnInit } from '@angular/core';
import { Metric } from './../../model/metric.model';

@Component({
    moduleId: module.id.toString(),
    selector: 'metric',
    templateUrl: 'metric.component.html'
})
export class MetricComponent implements OnInit {
    constructor() { }
    @Input() item: Metric = new Metric();
    ngOnInit() {
    }
}