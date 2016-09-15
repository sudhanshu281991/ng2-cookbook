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
var http_test_service_1 = require('./http-test.service');
var router_1 = require('@angular/router');
var httpRequestConstants = require('./http-request.constants');
var HttpTestComponent = (function () {
    function HttpTestComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        //Definig the constants to be used in the HTML
        this.TOUR_OF_HEROES = httpRequestConstants.TOUR_OF_HEROES;
        this.HEROES = httpRequestConstants.HEROES;
        this.NEW_HERO_NAME = httpRequestConstants.NEW_HERO_NAME;
        this.mode = 'Observable';
    }
    HttpTestComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    HttpTestComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.erroMessage = error; });
    };
    HttpTestComponent.prototype.navigateToUserData = function () {
        this.router.navigate(['/userProfile']);
        return false;
    };
    HttpTestComponent = __decorate([
        core_1.Component({
            providers: [http_test_service_1.HeroService],
            styles: ["button{margin-top:30px;}"],
            templateUrl: "./app/http-request/http-request.component.html"
        }), 
        __metadata('design:paramtypes', [http_test_service_1.HeroService, router_1.Router])
    ], HttpTestComponent);
    return HttpTestComponent;
}());
exports.HttpTestComponent = HttpTestComponent;
//# sourceMappingURL=http-request.component.js.map