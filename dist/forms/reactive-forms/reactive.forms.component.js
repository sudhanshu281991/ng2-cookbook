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
var forms_1 = require('@angular/forms');
var ReactiveFormsComponent = (function () {
    function ReactiveFormsComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ReactiveFormsComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            emailId: ['', forms_1.Validators.required],
            mblNo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(9), forms_1.Validators.maxLength(10)])],
            addressDetails: this.formBuilder.group({
                address: ['', forms_1.Validators.required],
                state: ['', forms_1.Validators.required]
            })
        });
    };
    ReactiveFormsComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    ReactiveFormsComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            selector: 'forms-reactive-control',
            templateUrl: 'reactive.forms.component.html',
            styles: [
                "\n          .auto-margin{\n              margin:0px!important;\n              paddding:20px 0 20px 0;\n          }\n          .no-paddding{\n              padding:0px!important;\n          }\n          .btn-success{\n              margin:10px;\n          }\n          .sub-heading{\n              padding:10px;\n          }\n         "
            ]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ReactiveFormsComponent);
    return ReactiveFormsComponent;
}());
exports.ReactiveFormsComponent = ReactiveFormsComponent;
//# sourceMappingURL=reactive.forms.component.js.map