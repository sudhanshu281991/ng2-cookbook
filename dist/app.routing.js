"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'venue-list',
        loadChildren: 'app/venue-list/venue-list.module#VenueListModule' },
    { path: '', component: home_component_1.HomeComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map