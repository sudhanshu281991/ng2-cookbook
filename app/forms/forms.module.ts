import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {formsRouting, formsRoutingProviders} from './forms.routing';
import {FormsComponent} from './forms.component';
import {FormsModule} from'@angular/forms';
import {FormsControlComponent} from './forms-control/forms-controls.component';

@NgModule({
    imports: [
        CommonModule,
        formsRouting,
        FormsModule
    ],
    declarations: [
        FormsComponent,
        FormsControlComponent
    ],
    providers: [
        formsRoutingProviders
    ]
})

export class FormModule {

}