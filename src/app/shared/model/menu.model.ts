import {MenuItemModel}  from "./menu-item.model";
export class MenuModel {
    Id: number;
    Name: string;
    Resource: string;
    DisplayName: string;
    Items: Array<MenuItemModel>;
    Active:boolean=false;
    constructor() {

    }
}   