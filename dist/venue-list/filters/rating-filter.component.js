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
var RatingFilterComponent = (function () {
    function RatingFilterComponent() {
        this.onRatingSelection = new core_1.EventEmitter();
    }
    RatingFilterComponent.prototype.updateRatingFilter = function (ratingFilterOptions, index, event) {
        this.ratingFilterOption[index].isSelected = event.target.checked;
        var selectedRating = _.filter(this.ratingFilterOption, function (item) {
            return item.isSelected;
        });
        this.onRatingSelection.emit(selectedRating);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], RatingFilterComponent.prototype, "ratingFilterOption", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RatingFilterComponent.prototype, "onRatingSelection", void 0);
    RatingFilterComponent = __decorate([
        core_1.Component({
            selector: 'rating-filter',
            template: "\n      <h4 class=\"row\">RATING:</h4>\n      <div *ngFor=\"let ratingFilterOptions of ratingFilterOption;let i =index\">\n       <input type=\"checkbox\" name=\"ratingFilterOption\"\n                           value=\"{{ratingFilterOptions}}\"\n                           [checked]=\"ratingFilterOptions.isSelected\"\n                           (change)=\"updateRatingFilter(ratingFilterOptions,i,$event)\"/>{{ratingFilterOptions.rating}}</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RatingFilterComponent);
    return RatingFilterComponent;
}());
exports.RatingFilterComponent = RatingFilterComponent;
//# sourceMappingURL=rating-filter.component.js.map