import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { LayoutService } from './services/layout.service';
import { LayoutComponent } from './layout.component';
import { FooterComponent} from './footer/footer.component';
import { NavbarComponent} from './navbar/navbar.component';

import { RouterModule }  from '@angular/router';

import { UserInfoService } from './services/_index';

@NgModule({
    imports: [ BrowserModule, RouterModule ],
    exports: [],
    declarations: [ LayoutComponent, NavbarComponent, FooterComponent],
    providers: [ LayoutService, UserInfoService ],
})
export class LayoutModule {
    /**
     *
     */
    constructor(@Optional() @SkipSelf() parentModule: LayoutModule) {
        if (parentModule) {
            throw new Error(
            'LayoutModule is already loaded. Import it in the AppModule only');
        }
    }

}
