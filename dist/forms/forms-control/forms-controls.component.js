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
        //The dummy data
        this.genders = [
            { value: 'F', display: 'Female' },
            { value: 'M', display: 'Male' }
        ];
        this.roles = [
            { value: 'admin', display: 'Administrator' },
            { value: 'guest', display: 'Guest' },
            { value: 'custom', display: 'Custom' }
        ];
        this.themes = [
            { backgroundColor: 'black', fontColor: 'white', display: 'dark' },
            { backgroundColor: 'white', fontColor: 'dark', display: 'Light' },
            { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
        ];
        this.topics = [
            { value: 'game', display: 'Gaming' },
            { value: 'tech', display: 'technology' },
            { value: 'life', display: 'LifeStyle' }
        ];
        this.toggles = [
            { value: 'toggled', display: 'Toggled' },
            { value: 'untoggled', display: 'UnToggled' },
        ];
    }
    //End of the dummy data
    FormsControlComponent.prototype.ngOnInit = function () {
        //initialize our model here
        this.user = {
            name: '',
            gender: this.genders[0].value,
            role: this.roles[0].value,
            theme: this.themes[0],
            isActive: false,
            toggle: this.toggles[1].value,
            topics: this.topics[1].value
        };
    };
    FormsControlComponent = __decorate([
        core_1.Component({
            moduleId: module.id.replace("/dist/", "/app/"),
            selector: 'forms-controls',
            templateUrl: 'forms-controls.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], FormsControlComponent);
    return FormsControlComponent;
}());
exports.FormsControlComponent = FormsControlComponent;
//# sourceMappingURL=forms-controls.component.js.map