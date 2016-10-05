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
var common_1 = require('@angular/common');
var animation_routing_1 = require('./animation.routing');
var animation_component_1 = require('./animation.component');
var AnimationModule = (function () {
    function AnimationModule() {
    }
    AnimationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                animation_routing_1.animationRouting
            ],
            declarations: [
                animation_component_1.AnimationComponent
            ],
            providers: [
                animation_routing_1.animationRoutingProviders
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AnimationModule);
    return AnimationModule;
}());
exports.AnimationModule = AnimationModule;
//# sourceMappingURL=animation.module.js.map