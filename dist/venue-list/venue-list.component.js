"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var venue_list_service_1 = require('./venue-list.service');
var filter_service_1 = require('./filter.service');
var list_filter_service_1 = require('./list-filter.service');
var VenueListComponent = (function () {
    function VenueListComponent(route, router, venueListService, venueListFilerService, listFilterService) {
        this.route = route;
        this.router = router;
        this.venueListService = venueListService;
        this.venueListFilerService = venueListFilerService;
        this.listFilterService = listFilterService;
        this.venueListTilesData = [];
    }
    VenueListComponent.prototype.ngOnInit = function () {
        this.venueListParams = this.route.snapshot.params;
        this.getVenueList();
    };
    VenueListComponent.prototype.getVenueList = function () {
        var _this = this;
        this.venueList = this.venueListService.getVenueListData();
        this.venueList.subscribe(function (listData) {
            _this.venueList.subscribe(function (listData) {
                _this.venueListTilesData = listData.SearchedItemDetails;
                _this.selectedTilesData = listData.SearchedItemDetails;
                _this.ratingFilterOption = _this.venueListFilerService.getRatingFilterData(listData.Filters.Rating);
                _this.venueTypeFilterOption = _this.venueListFilerService.getVenueFilterData(listData.Filters.VenueType, _this.venueListParams.option === 'collection' ? _this.venueListParams.optionSelected : '');
            });
        });
    };
    VenueListComponent.prototype.ratingSelected = function (event) {
        this.venueListTilesData = this.listFilterService.getRatingFilterTiles(this.selectedTilesData, event);
    };
    VenueListComponent.prototype.venueTypeSelected = function (event) {
        this.venueListTilesData = this.listFilterService.getVenueFilterTiles(this.selectedTilesData, event);
    };
    VenueListComponent = __decorate([
        core_1.Component({
            providers: [venue_list_service_1.VenueListService, filter_service_1.VenueListFilterService, list_filter_service_1.ListFilterService],
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'venue-list.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, venue_list_service_1.VenueListService, filter_service_1.VenueListFilterService, list_filter_service_1.ListFilterService])
    ], VenueListComponent);
    return VenueListComponent;
}());
exports.VenueListComponent = VenueListComponent;
//# sourceMappingURL=venue-list.component.js.map