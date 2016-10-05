"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var dashboardRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard/animation',
            },
            {
                path: 'animation',
                loadChildren: 'app/animation/animation.module#AnimationModule'
            },
            {
                path: 'forms',
                loadChildren: 'app/forms/forms.module#FormsModule'
            }
        ]
    }
];
exports.dashboardRoutingProviders = [];
exports.dashboardRouting = router_1.RouterModule.forChild(dashboardRoutes);
//# sourceMappingURL=dashboard.routing.js.map