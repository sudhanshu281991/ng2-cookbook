import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {VenueListService} from './venue-list.service';
import {RatingFilterOption} from './model/rating-filter';
import {VenueTypeFilterOption} from './model/venue-type.filter';
import {VenueListFilterService} from './filter.service';
import {VenueListTiles} from './model/list-tiles';
import {ListFilterService} from './list-filter.service'
import * as _ from 'underscore';

@Component({
    providers: [VenueListService, VenueListFilterService,ListFilterService],
    templateUrl: './app/venue-list//venue-list.component.html'
})

export class VenueListComponent implements OnInit {
    optionSelected: any;
    venueList: Observable<any>;
    ratingFilterOption: Array<RatingFilterOption>;
    venueTypeFilterOption:Array<VenueTypeFilterOption>;
    venueListTilesData: Array<VenueListTiles> = [];
    selectedTilesData: Array<VenueListTiles>;
    venueListParams: any;
    tiles: any;
    constructor(private route: ActivatedRoute, private router: Router,
        private venueListService: VenueListService,
        private venueListFilerService: VenueListFilterService,
        private listFilterService:ListFilterService) { }
    ngOnInit() {
        this.venueListParams = this.route.snapshot.params;
        this.getVenueList();
    }
    getVenueList() {
        this.venueList = this.venueListService.getVenueListData();
        this.venueList.subscribe(listData => {
            this.venueList.subscribe(listData => {
                this.venueListTilesData = listData.SearchedItemDetails;
                this.selectedTilesData = listData.SearchedItemDetails;
                this.ratingFilterOption = this.venueListFilerService.getRatingFilterData(listData.Filters.Rating);
                this.venueTypeFilterOption=this.venueListFilerService.getVenueFilterData(listData.Filters.VenueType,this.venueListParams.option === 'collection'?this.venueListParams.optionSelected:'');
            });
        })
    }
    ratingSelected(event) {
        this.venueListTilesData=this.listFilterService.getRatingFilterTiles(this.selectedTilesData,event);
    }
    venueTypeSelected(event){
        this.venueListTilesData=this.listFilterService.getVenueFilterTiles(this.selectedTilesData,event);
    }
}