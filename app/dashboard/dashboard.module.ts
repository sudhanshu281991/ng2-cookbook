import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {dashboardRoutingProviders, dashboardRouting} from './dashboard.routing';
import {DashboardComponent} from './dashboard.component';

@NgModule({
    imports: [
        dashboardRouting,
        CommonModule,
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
        dashboardRoutingProviders
    ]
})

export class DashboardModule {

}
