import {NgModule} from '@angular/core';
import {BrowserModule,Title} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing';
import {AppComponent} from './app.component';

//COMPONENT FOR THE HOME VIEW
import {HomeComponent} from './home/home.component';
import {HomeCollectionComponent} from './home/collection/collection.component';
import {HomeOccassionComponent} from './home/occassion/occassion.component';
import {HomeBlogComponent} from './home/blogs/blogs.component';

//COMPONET FOR THE VENUE-LIST VIEW
import {VenueListComponent} from './venue-list/venue-list.component';
import {RatingFilterComponent} from './venue-list/filters/rating-filter.component';
import {ListTileDataComponent} from './venue-list/list-tile/list-tile.component';
import {VenueTypeFilterComponent} from './venue-list/filters/venue-type.filter';
import {SortingTileComponent} from './venue-list/list-tile/sorting.component';




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
        HomeOccassionComponent,
        HomeBlogComponent,
        VenueListComponent,
        RatingFilterComponent,
        ListTileDataComponent,
        VenueTypeFilterComponent,
        SortingTileComponent
    ],
    providers: [
        appRoutingProviders,
        Title
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }