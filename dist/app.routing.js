"use strict";
var router_1 = require('@angular/router');
var user_data_component_1 = require('./user-data/user-data.component');
var http_request_component_1 = require('./http-request/http-request.component');
var user_profile_component_1 = require('./user-profile/user-profile.component');
var home_component_1 = require('./home/home.component');
var appRoutes = [
    {
        path: 'user_list',
        component: user_data_component_1.UserDataComponent
    },
    {
        path: 'windstorn',
        component: http_request_component_1.HttpTestComponent,
        data: {
            title: 'Windstorn'
        }
    },
    {
        path: 'userProfile',
        component: user_profile_component_1.UserInformationComponent,
        data: {
            title: 'Windstorn'
        }
    },
    {
        path: '',
        component: home_component_1.HomeComponent,
        data: {
            title: 'UserData'
        }
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map