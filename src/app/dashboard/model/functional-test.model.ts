export class FunctionalTest {
    Id: number;
    ProcessId:number;
    Name: string;
    Status:string;
    Passed: number;
    Failed:number;
    CoveragePercentage: string;
    Total: number;
    PassedPercentage:string;
    constructor() {
        this.Passed = 0;
        this.Failed = 0;
    }
}