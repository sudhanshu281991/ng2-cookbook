import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {PipesComponent} from './pipes.component';
import {pipesRouting, pipesRoutingProviders} from './pipes.routing';
import {DatePipeComponent} from './date-pipes.component';
import {ParameterizedPipeComponent} from './parameterized-pipe.component';
import {ChainingPipeComponent} from './chaining-pipe.component';
import {CustomPipesComponent} from  './custom-pipes.component';
import {ExponentialStrengthPipe}  from './exponential-strength.pipe';
import {PowerBoosterComponent}   from './power-booster.component';
import {PipesChangeDetection} from './pipes-change-detection.component';
 
@NgModule({
    imports: [
        CommonModule,
        pipesRouting,
        FormsModule
    ],
    declarations: [
        PipesComponent,
        DatePipeComponent,
        ParameterizedPipeComponent,
        ChainingPipeComponent,
        CustomPipesComponent,
        ExponentialStrengthPipe,
        PowerBoosterComponent,
        PipesChangeDetection
    ],
    providers: [
        pipesRoutingProviders
    ]
})

export class PipesModule {

}