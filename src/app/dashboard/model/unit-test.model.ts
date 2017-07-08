export class UnitTest {
    Id: number;
    ProcessId: number;
    Name: string;
    Status: string;
    Passed: number;
    Failed: number;
    PassedPercentage: string;
    CoveragePercentage: string;

    constructor() {
        this.Passed = 0;
        this.Failed = 0;
    }
}