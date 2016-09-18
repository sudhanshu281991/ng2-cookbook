"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var venue_list_component_1 = require('./venue-list/venue-list.component');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'venue-list', component: venue_list_component_1.VenueListComponent, pathMatch: 'full' },
    { path: '', component: home_component_1.HomeComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map