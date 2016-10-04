import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VenueListComponent} from './venue-list.component';
import {RatingFilterComponent} from './filters/rating-filter.component';
import {ListTileDataComponent} from './list-tile/list-tile.component';
import {VenueTypeFilterComponent} from './filters/venue-type.filter';
import {SortingTileComponent} from './list-tile/sorting.component';
import {venueListRouting, venueListRoutingProviders} from './venue-list.routing'

@NgModule({
    imports: [
        venueListRouting,
        CommonModule
    ],
    declarations: [
        VenueListComponent,
        RatingFilterComponent,
        ListTileDataComponent,
        VenueTypeFilterComponent,
        SortingTileComponent
    ],
    providers: [
        venueListRoutingProviders
    ]
})
export class VenueListModule {

}
