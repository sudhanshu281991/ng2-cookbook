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
var ChainingPipeComponent = (function () {
    function ChainingPipeComponent() {
        this.birthday = new Date(1991, 3, 28);
    }
    ChainingPipeComponent = __decorate([
        core_1.Component({
            selector: 'chain-pipe',
            template: "\n       <h3 class=\"row\">Chaining Pipes</h3>\n<p class=\"row\">We can chain pipes i.e we can apply multiple pipes separated by '|'</p>\n<h6 class=\"row\">\n    <br/><br/> The birthday is : {{birthday | date:'fullDate' | uppercase}}\n</h6>\n<h6 class=\"row note\">\n   When in above example we pass uppercase filter before the date it will through error.So it is necessary to chain the pipes in correct order\n</h6>\n    ",
            styles: ["\n      .note{\n          color:red;\n      }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ChainingPipeComponent);
    return ChainingPipeComponent;
}());
exports.ChainingPipeComponent = ChainingPipeComponent;
//# sourceMappingURL=chaining-pipe.component.js.map