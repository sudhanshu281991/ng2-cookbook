import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {formsRouting, formsRoutingProviders} from './forms.routing';
import {FormsComponent} from './forms.component';
import {FormsModule,ReactiveFormsModule } from'@angular/forms';
import {FormsControlComponent} from './forms-control/forms-controls.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive.forms.component';

@NgModule({
    imports: [
        CommonModule,
        formsRouting,
        FormsModule,
        ReactiveFormsModule 
    ],
    declarations: [
        FormsComponent,
        FormsControlComponent,
        ReactiveFormsComponent
    ],
    providers: [
        formsRoutingProviders
    ]
})

export class FormModule {

}