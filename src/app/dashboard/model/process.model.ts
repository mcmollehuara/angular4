export class Process {
    Id: number;
    Type: number;
    Name: string;
    OwnerId: number;
    OwnerName: string;
    DataTime?: Date;
    StatusId: number;
    Status: string;
    StatusName: string;
    MetricStatus: string;
    MetricValue: string;
    BuildStatus: string;
    BuildValue: string;
    UnitTestStatus: string;
    UnitTestValue: string;
    FunctionalTestStatus: string;
    FunctionalTestValue: string;
    Result: string;
    Expanded: boolean;
    constructor() {

    }
}