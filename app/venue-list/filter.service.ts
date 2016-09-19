import {Injectable} from '@angular/core';
import {RatingFilterOption} from './model/rating-filter';



@Injectable()
export class VenueListFilterService {
    ratingFilterOption: Array<RatingFilterOption> = [];
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
}
