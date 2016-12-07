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
var common_1 = require('@angular/common');
var venue_list_component_1 = require('./venue-list.component');
var rating_filter_component_1 = require('./filters/rating-filter.component');
var list_tile_component_1 = require('./list-tile/list-tile.component');
var venue_type_filter_1 = require('./filters/venue-type.filter');
var sorting_component_1 = require('./list-tile/sorting.component');
var venue_list_routing_1 = require('./venue-list.routing');
/**
 *
 *
 * @export
 * @class VenueListModule
 */
var VenueListModule = (function () {
    function VenueListModule() {
    }
    VenueListModule = __decorate([
        core_1.NgModule({
            imports: [
                venue_list_routing_1.venueListRouting,
                common_1.CommonModule
            ],
            declarations: [
                venue_list_component_1.VenueListComponent,
                rating_filter_component_1.RatingFilterComponent,
                list_tile_component_1.ListTileDataComponent,
                venue_type_filter_1.VenueTypeFilterComponent,
                sorting_component_1.SortingTileComponent
            ],
            providers: [
                venue_list_routing_1.venueListRoutingProviders
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VenueListModule);
    return VenueListModule;
}());
exports.VenueListModule = VenueListModule;
//# sourceMappingURL=venue-list.module.js.map