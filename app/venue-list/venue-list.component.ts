import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {VenueListService} from './venue-list.service';
import {RatingFilterOption} from './model/rating-filter';
import {VenueListFilterService} from './filter.service';
import {VenueListTiles} from './model/list-tiles';

@Component({
    providers: [VenueListService, VenueListFilterService],
    templateUrl:'./app/venue-list//venue-list.component.html'
})

export class VenueListComponent implements OnInit {
    optionSelected: any;
    venueList: Observable<any>;
    ratingFilterOption: Array<RatingFilterOption>;
    venueListTilesData:Array<VenueListTiles>;
    constructor(private route: ActivatedRoute, private router: Router,
        private venueListService: VenueListService,
        private venueListFilerService: VenueListFilterService) { }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            console.log(params);
            this.getVenueList();
        });
    }
    getVenueList() {
        this.venueList = this.venueListService.getVenueListData();
        this.venueList.subscribe(listData => {
            console.log(listData);
            this.venueList.subscribe(listData => {
                this.venueListTilesData=listData.SearchedItemDetails;
                this.ratingFilterOption = this.venueListFilerService.getRatingFilterData(listData.Filters.Rating)
            });
        })
    }
    ratingSelected(event){
         console.log(event);
     }
}