export interface Permission {
    _id: string;
    type: string;
    resource: string;
    action: string;
    name: string;
    role: string;
    isActive: boolean;
    attributes: Array<string> ;
}