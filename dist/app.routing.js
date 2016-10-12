"use strict";
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule',
    },
    {
        path: 'venue-list',
        loadChildren: 'app/venue-list/venue-list.module#VenueListModule'
    },
    {
        path: '',
        redirectTo: 'dashboard/animation',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadChildren: 'app/home/home.module#HomeModule'
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map