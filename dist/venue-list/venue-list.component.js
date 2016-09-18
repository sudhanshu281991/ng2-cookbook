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
var VenueListComponent = (function () {
    function VenueListComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    VenueListComponent.prototype.ngOnInit = function () {
        this.route.params.forEach(function (params) {
            console.log(params);
            //let id = +params['id']; // (+) converts string 'id' to a number
            //this.service.getHero(id).then(hero => this.hero = hero);
        });
    };
    VenueListComponent = __decorate([
        core_1.Component({
            template: "Hello"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], VenueListComponent);
    return VenueListComponent;
}());
exports.VenueListComponent = VenueListComponent;
//# sourceMappingURL=venue-list.component.js.map