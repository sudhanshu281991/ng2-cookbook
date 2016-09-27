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
var SortingTileComponent = (function () {
    function SortingTileComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SortingTileComponent.prototype, "tilesLength", void 0);
    SortingTileComponent = __decorate([
        core_1.Component({
            selector: 'soting-option',
            template: "\n      <div class=\"col-md-12\">\n         <div class=\"col-md-4\">\n             <h5 class=\"row\">Your Venues Count</h5>\n             <h6 class=\"row text-center\">{{tilesLength}}</h6>\n         </div>\n      </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SortingTileComponent);
    return SortingTileComponent;
}());
exports.SortingTileComponent = SortingTileComponent;
//# sourceMappingURL=sorting.component.js.map