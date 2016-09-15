import {NgModule} from '@angular/core';
import {BrowserModule,Title} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HomeCollectionComponent} from './home/collection/collection.component';
import {HomeOccassionComponent} from './home/occassion/occassion.component'



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule ,
        HttpModule,
        JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HomeCollectionComponent,
        HomeOccassionComponent
    ],
    providers: [
        appRoutingProviders,
        Title
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }