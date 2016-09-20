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
var ListFilterService = (function () {
    function ListFilterService() {
        this.ratingFilterOption = [];
        this.venueFilterOption = [];
        this.ratingTilesData = [];
        this.venueTilesData = [];
        this.filterTiles = [];
    }
    ListFilterService.prototype.getRatingFilterTiles = function (selectedTilesData, event) {
        this.ratingTilesData = event.length > 0 ? [] : selectedTilesData;
        this.ratingFilterOption = event;
        this.getSelectedTiles(selectedTilesData);
        return this.filterTiles;
    };
    ListFilterService.prototype.getVenueFilterTiles = function (selectedTilesData, event) {
        this.venueTilesData = event.length > 0 ? [] : selectedTilesData;
        this.venueFilterOption = event;
        this.getSelectedTiles(selectedTilesData);
        return this.filterTiles;
    };
    ListFilterService.prototype.getSelectedTiles = function (selectedTilesData) {
        var _this = this;
        this.ratingFilterOption.forEach(function (ratingData) {
            var Ratingtiles = _.filter(selectedTilesData, function (item) {
                return item.Rating === ratingData.rating;
            });
            _this.ratingTilesData = _.union(_this.ratingTilesData, Ratingtiles);
        });
        this.ratingTilesData = this.ratingTilesData.length > 0 ? this.ratingTilesData : selectedTilesData;
        this.venueFilterOption.forEach(function (venueTypeData) {
            var VenueTypetiles = _.filter(selectedTilesData, function (item) {
                return item.VenueType === venueTypeData.venueType || item.SubVenueType.indexOf(venueTypeData.venueType) > 0;
            });
            _this.venueTilesData = _.union(_this.venueTilesData, VenueTypetiles);
        });
        this.venueTilesData = this.venueTilesData.length > 0 ? this.venueTilesData : selectedTilesData;
        this.filterTiles = _.intersection(this.ratingTilesData, this.venueTilesData);
    };
    ListFilterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ListFilterService);
    return ListFilterService;
}());
exports.ListFilterService = ListFilterService;
//# sourceMappingURL=list-filter.service.js.map