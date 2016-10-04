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
var HomeOccassionComponent = (function () {
    function HomeOccassionComponent(router) {
        this.router = router;
    }
    Object.defineProperty(HomeOccassionComponent.prototype, "occassionLength", {
        get: function () {
            return this._occassionLength;
        },
        set: function (occassionlength) {
            this._occassionLength = occassionlength > 5 ? 5 : occassionlength;
        },
        enumerable: true,
        configurable: true
    });
    HomeOccassionComponent.prototype.loadMoreOccassion = function () {
        this._occassionLength = this.occassion.length;
    };
    HomeOccassionComponent.prototype.loadLessOccassion = function () {
        this._occassionLength = 5;
    };
    HomeOccassionComponent.prototype.navigateToVenueList = function (occassionSelected) {
        this.router.navigate(['/venue-list', { option: 'collection', optionSelected: occassionSelected }]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HomeOccassionComponent.prototype, "occassion", void 0);
    __decorate([
        core_1.Input('occassionlength'), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], HomeOccassionComponent.prototype, "occassionLength", null);
    HomeOccassionComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            selector: 'home-occassion',
            templateUrl: 'occassion.component.html',
            styleUrls: ['occassion.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], HomeOccassionComponent);
    return HomeOccassionComponent;
}());
exports.HomeOccassionComponent = HomeOccassionComponent;
//# sourceMappingURL=occassion.component.js.map