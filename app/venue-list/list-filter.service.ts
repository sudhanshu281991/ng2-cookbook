import {Injectable} from '@angular/core';
import {RatingFilterOption} from './model/rating-filter';
import {VenueTypeFilterOption} from './model/venue-type.filter';
import {VenueListTiles} from './model/list-tiles';
@Injectable()
export class ListFilterService {
    ratingFilterOption: Array<RatingFilterOption> = [];
    venueFilterOption: Array<VenueTypeFilterOption> = [];
    ratingTilesData: Array<VenueListTiles> = [];
    venueTilesData: Array<VenueListTiles> = [];
    filterTiles: Array<VenueListTiles> = [];
    getRatingFilterTiles(selectedTilesData: Array<VenueListTiles>, event) {
        this.ratingTilesData = event.length > 0 ? [] : selectedTilesData;
        this.ratingFilterOption = event;
        this.getSelectedTiles(selectedTilesData);
        return this.filterTiles;
    }
    getVenueFilterTiles(selectedTilesData: Array<VenueListTiles>, event) {
        this.venueTilesData = event.length > 0 ? [] : selectedTilesData;
        this.venueFilterOption = event;
        this.getSelectedTiles(selectedTilesData);
        return this.filterTiles;
    }
    getSelectedTiles(selectedTilesData: Array<VenueListTiles>) {
        this.ratingFilterOption.forEach(ratingData => {
            let Ratingtiles = _.filter(selectedTilesData, function (item) {
                return item.Rating === ratingData.rating;
            });
            this.ratingTilesData = _.union(this.ratingTilesData, Ratingtiles);
        });
        this.ratingTilesData = this.ratingTilesData.length > 0 ? this.ratingTilesData : selectedTilesData;
        this.venueFilterOption.forEach(venueTypeData => {
            let VenueTypetiles = _.filter(selectedTilesData, function (item) {
                return item.VenueType === venueTypeData.venueType || item.SubVenueType.indexOf(venueTypeData.venueType) > 0;
            });
            this.venueTilesData = _.union(this.venueTilesData, VenueTypetiles);
        });
        this.venueTilesData = this.venueTilesData.length > 0 ? this.venueTilesData : selectedTilesData;
        this.filterTiles = _.intersection(this.ratingTilesData, this.venueTilesData);
    }

}
