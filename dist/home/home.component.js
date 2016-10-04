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
var home_service_1 = require('./home.service');
var HomeComponent = (function () {
    function HomeComponent(homeService) {
        this.homeService = homeService;
        this.homeViewCollection = [];
        this.homeViewOccassion = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getCityData();
    };
    HomeComponent.prototype.getCityData = function () {
        var _this = this;
        this.city = this.homeService.getCityData();
        this.city.subscribe(function (comments) {
            _this.cityChanged(comments[0]);
            _this.getLocation(comments[0].CityName);
        });
    };
    HomeComponent.prototype.cityChanged = function (city) {
        this.selectedCity = city;
    };
    HomeComponent.prototype.getLocation = function (citySelected) {
        var _this = this;
        this.location = this.homeService.getLocation(citySelected);
        this.location.subscribe(function (comments) {
            _this.getInitialHomeData("");
        });
    };
    HomeComponent.prototype.getInitialHomeData = function (locationSelected) {
        var _this = this;
        setTimeout(function () {
            _this.initialHomeViewData = _this.homeService.getInitialHomeData(_this.selectedCity, locationSelected);
            _this.initialHomeViewData.subscribe(function (comments) {
                _this.homeViewCollection = comments.Collection;
                _this.homeViewOccassion = comments.Occasions;
                _this.homeViewBlog = comments.Blogs;
            });
        }, 100);
    };
    HomeComponent.prototype.getSelectedLocation = function (citySelected, index) {
        var _this = this;
        this.city.subscribe(function (comments) {
            _this.selectedCity = comments[index];
        });
        this.getLocation(citySelected);
    };
    HomeComponent.prototype.getSelectedLocationHomeView = function (location) {
        this.getInitialHomeData(location);
    };
    HomeComponent = __decorate([
        core_1.Component({
            providers: [home_service_1.HomeService],
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [home_service_1.HomeService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map