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
var PowerBoosterComponent = (function () {
    function PowerBoosterComponent() {
        this.power = 5;
        this.factor = 1;
    }
    PowerBoosterComponent = __decorate([
        core_1.Component({
            selector: 'power-booster',
            template: "\n      <h4 class=\"row\">Power Booster Calculator</h4>\n      <div>Normal power :<input [(ngModel)]=\"power\"></div>\n      <div>Boost Power :<input [(ngModel)]=\"factor\"></div>\n      <p>Super Power {{power | exponentialStrength :factor }}</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PowerBoosterComponent);
    return PowerBoosterComponent;
}());
exports.PowerBoosterComponent = PowerBoosterComponent;
//# sourceMappingURL=power-booster.component.js.map