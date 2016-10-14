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
var DatePipeComponent = (function () {
    function DatePipeComponent() {
        this.birthday = new Date(1991, 3, 28);
    }
    DatePipeComponent = __decorate([
        core_1.Component({
            selector: 'date-pipe',
            template: "\n    <h5 class=\"row\"><b> Example 1:Date Pipe</b></h5>\n       <h6 class=\"row\"><b>1)</b> The birthday is : {{birthday | date}}</h6>\n       <h6 class=\"row\">\n        <b>2) When date :'medium' pipe format </b>\n    <br/> <br/> The birthday is : {{birthday | date:'medium'}}\n</h6>\n<h6 class=\"row\">\n    <b>3) When the date is 'sort' pipe format</b>\n    <br/><br/> The birthday is : {{birthday | date:'short'}}\n</h6>\n<h6 class=\"row\">\n    <b>4) When the date is 'fullDate' pipe format</b>\n    <br/><br/> The birthday is : {{birthday | date:'fullDate'}}\n</h6>\n<h6 class=\"row\">\n    <b>5) When the date is 'longDate' pipe format</b>\n    <br/><br/> The birthday is : {{birthday | date:'longDate'}}\n</h6>\n<h6 class=\"row\">\n    <b>6) When the date is 'mmss' pipe format</b>\n    <br/><br/> The birthday is : {{birthday | date:'mmss'}}\n</h6>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DatePipeComponent);
    return DatePipeComponent;
}());
exports.DatePipeComponent = DatePipeComponent;
//# sourceMappingURL=date-pipes.component.js.map