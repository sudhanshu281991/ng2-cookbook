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
var HomeBlogComponent = (function () {
    function HomeBlogComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HomeBlogComponent.prototype, "blog", void 0);
    HomeBlogComponent = __decorate([
        core_1.Component({
            selector: 'home-blogs',
            template: "\n    <h3 class=\"row\">\n       BLOGS\n    </h3> \n   <a  class=\"col-md-3\" *ngFor=\"let blogs of blog\">\n       <h4 class=\"col-md-12 text-center\" [innerHTML]=\"blogs.PostedBy\"></h4>\n       <span class=\"col-md-12 text-center\">{{blogs.Text}}</span>\n       <h4 class=\"col-md-12 text-center\">{{blogs.PostedOn}}</h4>\n   </a>   ",
            styles: ["\n       a{\n           border:1px solid #efefef;\n           margin-right:10px;\n           height:250px;\n           cursor:pointer;\n       }\n   "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeBlogComponent);
    return HomeBlogComponent;
}());
exports.HomeBlogComponent = HomeBlogComponent;
//# sourceMappingURL=blogs.component.js.map