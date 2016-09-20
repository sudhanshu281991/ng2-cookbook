import {Injectable} from '@angular/core';
import {RatingFilterOption} from './model/rating-filter';
import {VenueTypeFilterOption} from './model/venue-type.filter';



@Injectable()
export class VenueListFilterService {
    ratingFilterOption: Array<RatingFilterOption> = [];
    venueFilterOption:Array<VenueTypeFilterOption>=[];
    getRatingFilterData(ratingFilter: Array<number>) {
        ratingFilter.forEach(rating => {
            let ratingfilter = {
                "rating": rating,
                "isSelected": false
            }
            this.ratingFilterOption.push(ratingfilter);
        });
        return this.ratingFilterOption;
    }
    getVenueFilterData(venueTypeFilter:Array<string>,selectedVenueType:string){
        venueTypeFilter.forEach(venueType=>{
            let venueTypeFilter={
                "venueType":venueType,
                "isSelected":venueType===selectedVenueType,
            }
            this.venueFilterOption.push(venueTypeFilter);
        });
        return this.venueFilterOption;
    }
}
