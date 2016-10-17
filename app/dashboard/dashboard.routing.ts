import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
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
                loadChildren: 'app/forms/forms.module#FormModule'
            },
            {
                path: 'pipes',
                loadChildren: 'app/pipes/pipes.module#PipesModule'
            }
        ]
    }
]
export const dashboardRoutingProviders: any[] = [

];

export const dashboardRouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);

