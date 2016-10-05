import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AnimationComponent} from './animation.component';

const animationRoutes:Routes=[
    {
        path:'',
        component:AnimationComponent
    }
]

export const animationRoutingProviders:any[]=[

]
export const animationRouting :ModuleWithProviders=RouterModule.forChild(animationRoutes);
