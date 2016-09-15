import {NgModule} from '@angular/core';
import {BrowserModule,Title} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';

import {UserProfileComponent} from './users/user-profile.component';
import {UserFormComponent} from './users/user-form.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import {AppComponent} from './app.component';
import {HttpTestComponent} from './http-request/http-request.component';
import {UserDataComponent} from './user-data/user-data.component';
import {UserInformationComponent} from './user-profile/user-profile.component';
import {HomeComponent} from './home/home.component';
import {HomeCollectionComponent} from './home/collection/collection.component';



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
        UserProfileComponent,
        UserFormComponent,
        HttpTestComponent,
        UserDataComponent,
        UserInformationComponent,
        HomeComponent,
        HomeCollectionComponent
    ],
    providers: [
        appRoutingProviders,
        Title
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }