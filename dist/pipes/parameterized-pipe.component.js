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
var ParameterizedPipeComponent = (function () {
    function ParameterizedPipeComponent() {
        this.birthday = new Date(1991, 3, 28);
        this.toggle = true;
    }
    Object.defineProperty(ParameterizedPipeComponent.prototype, "format", {
        get: function () {
            return this.toggle ? 'shortDate' : 'fullDate';
        },
        enumerable: true,
        configurable: true
    });
    ParameterizedPipeComponent.prototype.toggleFormat = function () {
        this.toggle = !this.toggle;
    };
    ParameterizedPipeComponent = __decorate([
        core_1.Component({
            selector: 'parameterized-pipe',
            template: "\n      <h3 class=\"row\">Parameterizing a Pipe</h3>\n<p class=\"row\">A pipe can accept any number of optional parameter to give the desired output </p>\n<h6 class=\"row\">\n    <b>1) When we modify the birthday of given date format</b>\n    <br/><br/> The birthday is : {{birthday | date:'yyyy/MM/dd'}}\n</h6>\n\n<h6 class=\"row\">\n    <b>2) Dynamic pipe from the component</b>\n    <br/><br/> The birthday is : {{birthday | date:format}}\n    <button (click)=\"toggleFormat()\">Toggle Format</button>\n</h6>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ParameterizedPipeComponent);
    return ParameterizedPipeComponent;
}());
exports.ParameterizedPipeComponent = ParameterizedPipeComponent;
//# sourceMappingURL=parameterized-pipe.component.js.map