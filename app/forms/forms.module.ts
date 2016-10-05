import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {formsRouting, formsRoutingProviders} from './forms.routing';
import {FormsComponent} from './forms.component';

@NgModule({
    imports: [
        CommonModule,
        formsRouting
    ],
    declarations: [
        FormsComponent
    ],
    providers: [
        formsRoutingProviders
    ]
})

export class FormsModule {

}