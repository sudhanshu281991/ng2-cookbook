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
var Hero = (function () {
    function Hero(name, state) {
        if (state === void 0) { state = 'inactive'; }
        this.name = name;
        this.state = state;
    }
    Hero.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    return Hero;
}());
var ALL_HEROES = [
    'Windstorm',
    'RubberMan',
    'Bombasto',
    'Magneta',
    'Dynama',
    'Narco',
    'Celeritas',
    'Dr IQ',
    'Magma',
    'Tornado',
    'Mr. Nice'
].map(function (name) { return new Hero(name); });
var Heroes = (function () {
    function Heroes() {
        this.currentHeroes = [];
    }
    Heroes.prototype[Symbol.iterator] = function () {
        return this.currentHeroes.values();
    };
    Heroes.prototype.canAdd = function () {
        return this.currentHeroes.length < ALL_HEROES.length;
    };
    Heroes.prototype.canRemove = function () {
        return this.currentHeroes.length > 0;
    };
    Heroes.prototype.addActive = function () {
        var hero = ALL_HEROES[this.currentHeroes.length];
        hero.state = 'active';
        this.currentHeroes.push(hero);
    };
    Heroes.prototype.addInactive = function () {
        var hero = ALL_HEROES[this.currentHeroes.length];
        hero.state = 'inactive';
        this.currentHeroes.push(hero);
    };
    Heroes.prototype.remove = function () {
        this.currentHeroes.splice(this.currentHeroes.length - 1, 1);
    };
    Heroes = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Heroes);
    return Heroes;
}());
exports.Heroes = Heroes;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=animation.service.js.map