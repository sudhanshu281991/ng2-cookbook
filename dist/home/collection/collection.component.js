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
var HomeCollectionComponent = (function () {
    function HomeCollectionComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HomeCollectionComponent.prototype, "collection", void 0);
    HomeCollectionComponent = __decorate([
        core_1.Component({
            selector: 'home-collection',
            template: "\n    <h3 class=\"row\">\n       Collection\n    </h3> \n   <div  class=\"col-md-4\" *ngFor=\"let collections of collection\">\n       <img class=\"col-md-12\" src={{collections.ImageGuid}}/>\n       <span class=\"col-md-12 text-center\">{{collections.TotalCount}}</span>\n       <h4 class=\"col-md-12 text-center\">{{collections.CollectionType}}</h4>\n   </div>   ",
            styles: ["\n      img{\n          width:100%;\n          height:200px;\n      }\n   "]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeCollectionComponent);
    return HomeCollectionComponent;
}());
exports.HomeCollectionComponent = HomeCollectionComponent;
//# sourceMappingURL=collection.component.js.map