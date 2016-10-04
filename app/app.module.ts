import {NgModule} from '@angular/core';
import {BrowserModule,Title} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import {AppComponent} from './app.component';
import {DashboardModule} from './dashboard/dashboard.module'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule ,
        HttpModule,
        JsonpModule,
        routing,
        DashboardModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        appRoutingProviders,
        Title
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }