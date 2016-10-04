import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {VenueListComponent} from './venue-list.component';

const venueListRoutes: Routes = [
    {
        path: '',
        component: VenueListComponent,
    }
]
export const venueListRoutingProviders: any[] = [

];
export const venueListRouting: ModuleWithProviders = RouterModule.forChild(venueListRoutes);