import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {UserDataComponent} from './user-data/user-data.component';
import {HttpTestComponent} from './http-request/http-request.component';
import {UserInformationComponent} from './user-profile/user-profile.component';
import {HomeComponent} from './home/home.component';

const appRoutes:Routes=[
    {
        path:'user_list',
        component:UserDataComponent     
    },
     {
        path:'windstorn',
        component:HttpTestComponent,
        data:{
            title:'Windstorn'
        }
    },
    {
        path:'userProfile',
        component:UserInformationComponent,
        data:{
            title:'Windstorn'
        }
    },
     {
        path:'',
        component:HomeComponent,
        data:{
            title:'UserData'
        }
    }
];
export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);