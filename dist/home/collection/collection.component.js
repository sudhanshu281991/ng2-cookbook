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
var HomeCollectionComponent = (function () {
    function HomeCollectionComponent(router) {
        this.router = router;
    }
    HomeCollectionComponent.prototype.navigatetoVenueList = function (collectionType) {
        this.router.navigate(['/venue-list', { option: 'collection', optionSelected: collectionType }]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HomeCollectionComponent.prototype, "collection", void 0);
    HomeCollectionComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            selector: 'home-collection',
            templateUrl: 'collection.component.html',
            styleUrls: ['collection.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeCollectionComponent);
    return HomeCollectionComponent;
}());
exports.HomeCollectionComponent = HomeCollectionComponent;
//# sourceMappingURL=collection.component.js.map