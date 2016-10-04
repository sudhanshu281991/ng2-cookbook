"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var appRoutes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'venue-list',
        loadChildren: 'app/venue-list/venue-list.module#VenueListModule'
    },
    {
        path: '',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '**',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map