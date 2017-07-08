import { Metric } from "./metric.model";
import { Build } from "./build.model";
import { FunctionalTest } from "./functional-test.model";
import { UnitTest } from "./unit-test.model";
import { Result } from "./result.model";

export class ProcessDetail {
    Metric: Metric;
    Build: Build;
    FunctionalTest: FunctionalTest;
    UnitTest: UnitTest;
    Result: Result;
    constructor() {
        this.Metric = new Metric();
        this.Build = new Build();
        this.FunctionalTest = new FunctionalTest();
        this.UnitTest = new UnitTest();
        this.Result = new Result();
    }
}