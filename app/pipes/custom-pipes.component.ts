import {Component} from '@angular/core';

@Component({
    selector:'custom-pipe',
    template:`
       <h3 class="row">CUSTOM PIPE</h3>
       <p class="row">Super power boost: {{2 | exponentialStrength: 10}}</p>
       <power-booster class="row"></power-booster>
    `
})

export class CustomPipesComponent{

}