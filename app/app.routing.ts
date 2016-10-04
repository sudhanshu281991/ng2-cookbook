import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,pathMatch:'full' },
    { path: 'venue-list', 
      loadChildren:'app/venue-list/venue-list.module#VenueListModule'},
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent }
];
export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);