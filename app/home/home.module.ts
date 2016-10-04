import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {homeRoutingProviders, homeRouting} from './home.routing';
import {HomeComponent} from './home.component';
import {HomeCollectionComponent} from './collection/collection.component';
import {HomeOccassionComponent} from './occassion/occassion.component';
import {HomeBlogComponent} from './blogs/blogs.component';

@NgModule({
    imports: [
        homeRouting,
        CommonModule
    ],
    declarations: [
        HomeComponent,
        HomeCollectionComponent,
        HomeOccassionComponent,
        HomeBlogComponent
    ],
    providers: [
        homeRoutingProviders
    ]
})

export class HomeModule {

}
