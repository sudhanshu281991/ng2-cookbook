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
var _ = require('underscore');
var VenueTypeFilterComponent = (function () {
    function VenueTypeFilterComponent() {
        this.onVenueTypeSelection = new core_1.EventEmitter();
    }
    VenueTypeFilterComponent.prototype.updateVenueTypeFilter = function (ratingFilterOptions, index, event) {
        this.venueTypeFilterOption[index].isSelected = event.target.checked;
        var selectedVenueType = _.filter(this.venueTypeFilterOption, function (item) {
            return item.isSelected;
        });
        this.onVenueTypeSelection.emit(selectedVenueType);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], VenueTypeFilterComponent.prototype, "venueTypeFilterOption", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], VenueTypeFilterComponent.prototype, "onVenueTypeSelection", void 0);
    VenueTypeFilterComponent = __decorate([
        core_1.Component({
            selector: 'venue-type-filter',
            template: "\n      <h4 class=\"row\">Venue Type:</h4>\n      <div *ngFor=\"let venueTypeFilterOptions of venueTypeFilterOption;let i =index\">\n       <input type=\"checkbox\" name=\"venueTypeFilterOption\"\n                           value=\"{{venueTypeFilterOptions}}\"\n                           [checked]=\"venueTypeFilterOptions.isSelected\"\n                           (change)=\"updateVenueTypeFilter(venueTypeFilterOptions,i,$event)\"/>{{venueTypeFilterOptions.venueType}}</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], VenueTypeFilterComponent);
    return VenueTypeFilterComponent;
}());
exports.VenueTypeFilterComponent = VenueTypeFilterComponent;
//# sourceMappingURL=venue-type.filter.js.map