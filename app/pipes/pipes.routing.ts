import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {PipesComponent} from './pipes.component';

const pipesRoutes:Routes=[
    {
        path:'',
        component:PipesComponent
    }
]

export const pipesRoutingProviders:any[]=[

]

export const pipesRouting :ModuleWithProviders=RouterModule.forChild(pipesRoutes);