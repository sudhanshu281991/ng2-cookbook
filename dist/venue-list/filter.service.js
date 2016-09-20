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
var VenueListFilterService = (function () {
    function VenueListFilterService() {
        this.ratingFilterOption = [];
        this.venueFilterOption = [];
    }
    VenueListFilterService.prototype.getRatingFilterData = function (ratingFilter) {
        var _this = this;
        ratingFilter.forEach(function (rating) {
            var ratingfilter = {
                "rating": rating,
                "isSelected": false
            };
            _this.ratingFilterOption.push(ratingfilter);
        });
        return this.ratingFilterOption;
    };
    VenueListFilterService.prototype.getVenueFilterData = function (venueTypeFilter, selectedVenueType) {
        var _this = this;
        venueTypeFilter.forEach(function (venueType) {
            var venueTypeFilter = {
                "venueType": venueType,
                "isSelected": venueType === selectedVenueType,
            };
            _this.venueFilterOption.push(venueTypeFilter);
        });
        return this.venueFilterOption;
    };
    VenueListFilterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], VenueListFilterService);
    return VenueListFilterService;
}());
exports.VenueListFilterService = VenueListFilterService;
//# sourceMappingURL=filter.service.js.map