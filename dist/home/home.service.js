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
var homeConstants = require('./home.constant');
var HomeService = (function () {
    function HomeService(http) {
        this.http = http;
        this.homeCityUrl = homeConstants.HOME_CITY_URL;
        this.homeLocationUrl = homeConstants.HOME_LOCATION_URL;
        this.homeInitialUrl = homeConstants.HOME_INITIAL_URL;
    }
    HomeService.prototype.getCityData = function () {
        return this.http.get(this.homeCityUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HomeService.prototype.getLocation = function (cityName) {
        return this.http.get(this.homeLocationUrl + cityName)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HomeService.prototype.getInitialHomeData = function (selectedCity, locationSelected) {
        var homeViewParams = new http_1.URLSearchParams();
        homeViewParams.set('City', selectedCity.CityName);
        homeViewParams.set('MinPrice', selectedCity.MinPrice);
        homeViewParams.set('MaxPrice', selectedCity.MaxPrice);
        homeViewParams.set('MinCapacity', selectedCity.MinCapacity);
        homeViewParams.set('MaxCapacity', selectedCity.MaxCapacity);
        homeViewParams.set('Location', locationSelected = locationSelected === "All" || locationSelected === "" ? "" : locationSelected);
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.http.post(this.homeInitialUrl, homeViewParams, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HomeService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HomeService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        return observable_1.Observable.throw(errMsg);
    };
    HomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HomeService);
    return HomeService;
}());
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map