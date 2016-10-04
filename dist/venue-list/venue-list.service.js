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
var http_1 = require('@angular/http');
var observable_1 = require('rxjs/observable');
var venueListConstants = require('./venue-list.constants');
var VenueListService = (function () {
    function VenueListService(http) {
        this.http = http;
        this.venueListUrl = venueListConstants.VENUE_LIST_INITIAL_URL;
    }
    VenueListService.prototype.getVenueListData = function () {
        var venueListParams = new http_1.URLSearchParams();
        venueListParams.set('City', 'Mumbai');
        venueListParams.set('Location', '');
        venueListParams.set('PageNumber', 1);
        venueListParams.set('PageLength', 35);
        var headers = new http_1.Headers({ 'Content-type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.http.post(this.venueListUrl, venueListParams, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    VenueListService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    VenueListService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        return observable_1.Observable.throw(errMsg);
    };
    VenueListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VenueListService);
    return VenueListService;
}());
exports.VenueListService = VenueListService;
//# sourceMappingURL=venue-list.service.js.map