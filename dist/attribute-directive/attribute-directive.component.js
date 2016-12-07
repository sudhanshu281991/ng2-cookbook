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
var AttributeDirectiveComponent = (function () {
    function AttributeDirectiveComponent() {
    }
    AttributeDirectiveComponent = __decorate([
        core_1.Component({
            selector: 'attirbute-directive',
            moduleId: module.id.replace("/dist/", "/app/"),
            templateUrl: 'attribute-directive.component.html',
            styles: ["\n      .row{\n          margin:0px!important;\n          padding-top:30px;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], AttributeDirectiveComponent);
    return AttributeDirectiveComponent;
}());
exports.AttributeDirectiveComponent = AttributeDirectiveComponent;
//# sourceMappingURL=attribute-directive.component.js.map