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
var HomeOccassionComponent = (function () {
    function HomeOccassionComponent() {
    }
    Object.defineProperty(HomeOccassionComponent.prototype, "occassionLength", {
        get: function () {
            return this._occassionLength;
        },
        set: function (occassionlength) {
            this._occassionLength = occassionlength > 10 ? 10 : occassionlength;
        },
        enumerable: true,
        configurable: true
    });
    HomeOccassionComponent.prototype.loadMoreOccassion = function () {
        this._occassionLength = this.occassion.length;
    };
    HomeOccassionComponent.prototype.loadLessOccassion = function () {
        this._occassionLength = 10;
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
            selector: 'home-occassion',
            templateUrl: './app/home/occassion/occassion.component.html',
            styles: ["\n      img{\n            width: 100 %;\n            height: 200px;\n        }\n            .more_occassion{\n                height: 100px;\n                width: 200px;\n                background-color:red;\n                color:white;\n            }\n            "],
        }), 
        __metadata('design:paramtypes', [])
    ], HomeOccassionComponent);
    return HomeOccassionComponent;
}());
exports.HomeOccassionComponent = HomeOccassionComponent;
//# sourceMappingURL=occassion.component.js.map