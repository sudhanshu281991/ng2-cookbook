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
var router_1 = require('@angular/router');
var user_data_service_1 = require('./user-data.service');
require('../rxjs-operators');
var userData = require('./user-data.constants');
var UserDataComponent = (function () {
    function UserDataComponent(router, userDataService) {
        this.router = router;
        this.userDataService = userDataService;
        //implementing the hardcoded value in HTML to be fetched from constants
        this.USER_DATA_HEADING = userData.USER_DATA_HEADING;
        this.CHOOSE_ACTIVE_USER = userData.CHOOSE_ACTIVE_USER;
        this.COPYRIGHT = userData.COPYRIGHT;
        this.message = "Hello!";
    }
    UserDataComponent.prototype.ngOnInit = function () { this.getUserData(); };
    UserDataComponent.prototype.getUserData = function () {
        var _this = this;
        this.userDataService.getUserData().subscribe(function (users) { return _this.users = users; }, function (error) { return _this.erroMessage = error; });
    };
    UserDataComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
    };
    UserDataComponent.prototype.onUserCreated = function (event) {
        console.log(event);
        this.users.push(event.user);
        this.activeUser = event.user;
    };
    UserDataComponent.prototype.onSelect = function () {
        this.router.navigate(['/windstorn']);
        return false;
    };
    UserDataComponent = __decorate([
        core_1.Component({
            providers: [user_data_service_1.UserDataService],
            templateUrl: './app/user-data/user-data.component.html',
            styleUrls: ['./app/app.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_data_service_1.UserDataService])
    ], UserDataComponent);
    return UserDataComponent;
}());
exports.UserDataComponent = UserDataComponent;
//# sourceMappingURL=user-data.component.js.map