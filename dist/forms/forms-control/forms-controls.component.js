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
var FormsControlComponent = (function () {
    function FormsControlComponent() {
        this.firstname = "Sudhanshu";
    }
    FormsControlComponent.prototype.onSubmit = function (form) {
        console.log("the form value is:", form);
    };
    FormsControlComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            selector: 'forms-controls',
            templateUrl: 'forms-controls.component.html',
            styles: [
                "\n          .btn-success{\n              margin-top:10px;\n          }\n          .form-control{\n              margin-bottom:20px;\n          }\n         "
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FormsControlComponent);
    return FormsControlComponent;
}());
exports.FormsControlComponent = FormsControlComponent;
//# sourceMappingURL=forms-controls.component.js.map