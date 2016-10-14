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
var forms_1 = require('@angular/forms');
var pipes_component_1 = require('./pipes.component');
var pipes_routing_1 = require('./pipes.routing');
var date_pipes_component_1 = require('./date-pipes.component');
var parameterized_pipe_component_1 = require('./parameterized-pipe.component');
var chaining_pipe_component_1 = require('./chaining-pipe.component');
var custom_pipes_component_1 = require('./custom-pipes.component');
var exponential_strength_pipe_1 = require('./exponential-strength.pipe');
var power_booster_component_1 = require('./power-booster.component');
var pipes_change_detection_component_1 = require('./pipes-change-detection.component');
var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                pipes_routing_1.pipesRouting,
                forms_1.FormsModule
            ],
            declarations: [
                pipes_component_1.PipesComponent,
                date_pipes_component_1.DatePipeComponent,
                parameterized_pipe_component_1.ParameterizedPipeComponent,
                chaining_pipe_component_1.ChainingPipeComponent,
                custom_pipes_component_1.CustomPipesComponent,
                exponential_strength_pipe_1.ExponentialStrengthPipe,
                power_booster_component_1.PowerBoosterComponent,
                pipes_change_detection_component_1.PipesChangeDetection
            ],
            providers: [
                pipes_routing_1.pipesRoutingProviders
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PipesModule);
    return PipesModule;
}());
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipes.module.js.map