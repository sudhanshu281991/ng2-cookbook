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
var VenueListComponent = (function () {
    function VenueListComponent(route, router, venueListService, venueListFilerService) {
        this.route = route;
        this.router = router;
        this.venueListService = venueListService;
        this.venueListFilerService = venueListFilerService;
    }
    VenueListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            console.log(params);
            _this.getVenueList();
        });
    };
    VenueListComponent.prototype.getVenueList = function () {
        var _this = this;
        this.venueList = this.venueListService.getVenueListData();
        this.venueList.subscribe(function (listData) {
            console.log(listData);
            _this.venueList.subscribe(function (listData) {
                _this.venueListTilesData = listData.SearchedItemDetails;
                _this.ratingFilterOption = _this.venueListFilerService.getRatingFilterData(listData.Filters.Rating);
            });
        });
    };
    VenueListComponent.prototype.ratingSelected = function (event) {
        console.log(event);
    };
    VenueListComponent = __decorate([
        core_1.Component({
            providers: [venue_list_service_1.VenueListService, filter_service_1.VenueListFilterService],
            templateUrl: './app/venue-list//venue-list.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, venue_list_service_1.VenueListService, filter_service_1.VenueListFilterService])
    ], VenueListComponent);
    return VenueListComponent;
}());
exports.VenueListComponent = VenueListComponent;
//# sourceMappingURL=venue-list.component.js.map