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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var user_profile_component_1 = require('./users/user-profile.component');
var user_form_component_1 = require('./users/user-form.component');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var http_request_component_1 = require('./http-request/http-request.component');
var user_data_component_1 = require('./user-data/user-data.component');
var user_profile_component_2 = require('./user-profile/user-profile.component');
var home_component_1 = require('./home/home.component');
var collection_component_1 = require('./home/collection/collection.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                user_profile_component_1.UserProfileComponent,
                user_form_component_1.UserFormComponent,
                http_request_component_1.HttpTestComponent,
                user_data_component_1.UserDataComponent,
                user_profile_component_2.UserInformationComponent,
                home_component_1.HomeComponent,
                collection_component_1.HomeCollectionComponent
            ],
            providers: [
                app_routing_1.appRoutingProviders,
                platform_browser_1.Title
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map