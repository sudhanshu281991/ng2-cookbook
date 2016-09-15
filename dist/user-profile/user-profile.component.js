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
var reactiveForm = require('./user-profile.constant');
var UserInformationComponent = (function () {
    function UserInformationComponent(formBuilder) {
        this.formBuilder = formBuilder;
        //implementing the hardedcoded value into html
        this.TEXT_REACTIVE_FORM = reactiveForm.TEXT_REACTIVE_FORM;
        this.TEXT_FIRST_NAME = reactiveForm.TEXT_FIRST_NAME;
        this.TEXT_LAST_NAME = reactiveForm.TEXT_LAST_NAME;
        this.TEXT_STREET = reactiveForm.TEXT_STREET;
        this.TEXT_ZIP = reactiveForm.TEXT_ZIP;
        this.TEXT_CITY = reactiveForm.TEXT_CITY;
        this.BUTTON_SUBMIT = reactiveForm.BUTTON_SUBMIT;
    }
    UserInformationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstname: ['', forms_1.Validators.required],
            lastname: ['', forms_1.Validators.required],
            address: this.formBuilder.group({
                street: [],
                zip: [],
                city: []
            })
        });
    };
    UserInformationComponent = __decorate([
        core_1.Component({
            templateUrl: './app/user-profile/user-profile.component.html',
            styles: ["label{margin-right:40px;} button{margin-top:40px;}"]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], UserInformationComponent);
    return UserInformationComponent;
}());
exports.UserInformationComponent = UserInformationComponent;
//# sourceMappingURL=user-profile.component.js.map