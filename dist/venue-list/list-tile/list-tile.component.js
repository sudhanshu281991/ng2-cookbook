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
var _ = require('underscore');
var ListTileDataComponent = (function () {
    function ListTileDataComponent() {
    }
    Object.defineProperty(ListTileDataComponent.prototype, "listTile", {
        get: function () {
            return this.displayListTileData;
        },
        set: function (listTile) {
            this.displayListTileData = _.filter(listTile, function (item) {
                return item.Rating === 4;
            });
            console.log(this.displayListTileData);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('listTile'), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], ListTileDataComponent.prototype, "listTile", null);
    ListTileDataComponent = __decorate([
        core_1.Component({
            selector: 'list-tile',
            template: "\n      <div class=\"col-md-6\" *ngFor=\"let listTiles of displayListTileData\">\n          <img class=\"col-md-12\" src={{listTiles.Image}}>\n          <h5 class=\"col-md-12 text-center\">{{listTiles.Rating}}</h5>\n          <h6 class=\"col-md-12 text-center\">{{listTiles.Name}}</h6>\n      </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ListTileDataComponent);
    return ListTileDataComponent;
}());
exports.ListTileDataComponent = ListTileDataComponent;
//# sourceMappingURL=list-tile.component.js.map