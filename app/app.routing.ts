import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component'


const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/home/home.module#HomeModule'
  },
  {
    path: 'venue-list',
    loadChildren: 'app/venue-list/venue-list.module#VenueListModule'
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '**',
    loadChildren: 'app/home/home.module#HomeModule'
  }
];
export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);