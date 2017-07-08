import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {WidgetDirective}  from './widget/widget.directive';

@NgModule({
    imports: [BrowserModule],
    declarations: [WidgetDirective],
    exports:  [WidgetDirective]
})

export class CommonModule {

}