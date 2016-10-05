import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {animationRouting, animationRoutingProviders} from './animation.routing';
import {AnimationComponent} from './animation.component';


@NgModule({
    imports: [
        CommonModule,
        animationRouting
    ],
    declarations: [
        AnimationComponent
    ],
    providers: [
        animationRoutingProviders
    ]
})

export class AnimationModule {

}