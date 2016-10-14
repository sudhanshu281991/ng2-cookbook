import {Component} from '@angular/core';

@Component({
    selector:'power-booster',
    template:`
      <h4 class="row">Power Booster Calculator</h4>
      <div>Normal power :<input [(ngModel)]="power"></div>
      <div>Boost Power :<input [(ngModel)]="factor"></div>
      <p>Super Power {{power | exponentialStrength :factor }}</p>
    `
})
export class PowerBoosterComponent{
  power =5;
  factor=1;
}