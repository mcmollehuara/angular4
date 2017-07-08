import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { inject, async, TestBed, ComponentFixture } from '@angular/core/testing';

import { BaseRequestOptions, ConnectionBackend, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { DashboardService } from './services/dashboard.service';
import { DashboardComponent } from './dashboard.component';
import { ToastyService } from 'ng2-toasty';
import { ToastyModule, ToastyConfig } from 'ng2-toasty';
describe("Dashboard", () => {
    let comp: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;


    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent],
            imports: [ToastyModule.forRoot()],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                BaseRequestOptions,
                MockBackend,
                {
                    provide: Http,
                    useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                },
                DashboardService, ToastyService]
        }).compileComponents(); // compile template and css
    }));

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        comp = fixture.componentInstance;

        fixture.detectChanges(); // trigger initial data binding
    });

    it(`should be readly initialized`, () => {
        expect(fixture).toBeDefined();
        expect(comp).toBeDefined();
    });


    it(`should be prop initialized`, () => {
        expect(comp.pipelineName).toEqual("main");
        expect(comp.pipelineId).toEqual(1);
    });

    it('should log ngOnInit', () => {
        spyOn(console, 'log');
        expect(console.log).not.toHaveBeenCalled();

        comp.ngOnInit();
        expect(console.log).toHaveBeenCalled();
    });
});

