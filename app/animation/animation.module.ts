import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {animationRouting, animationRoutingProviders} from './animation.routing';
import {AnimationComponent} from './animation.component';
import {AttributeDirectiveComponent} from '../attribute-directive/attribute-directive.component';
import {HighlightDirective} from '../attribute-directive/highlight.directive';
import {StructuralDirectiveComponent} from '../structural-directive/structural-directive.component';


@NgModule({
    imports: [
        CommonModule,
        animationRouting
    ],
    declarations: [
        AnimationComponent,
        AttributeDirectiveComponent,
        HighlightDirective,
        StructuralDirectiveComponent
    ],
    providers: [
        animationRoutingProviders
    ]
})

export class AnimationModule {

}