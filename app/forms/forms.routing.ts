import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {FormsComponent} from './forms.component'

const formsRoutes:Routes=[
    {
        path:'',
        component:FormsComponent
    }
]

export const formsRoutingProviders:any[]=[

]

export const formsRouting :ModuleWithProviders=RouterModule.forChild(formsRoutes);
