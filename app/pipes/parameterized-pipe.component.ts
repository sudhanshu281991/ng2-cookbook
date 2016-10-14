import {Component} from '@angular/core';

@Component({
    selector: 'parameterized-pipe',
    template: `
      <h3 class="row">Parameterizing a Pipe</h3>
<p class="row">A pipe can accept any number of optional parameter to give the desired output </p>
<h6 class="row">
    <b>1) When we modify the birthday of given date format</b>
    <br/><br/> The birthday is : {{birthday | date:'yyyy/MM/dd'}}
</h6>

<h6 class="row">
    <b>2) Dynamic pipe from the component</b>
    <br/><br/> The birthday is : {{birthday | date:format}}
    <button (click)="toggleFormat()">Toggle Format</button>
</h6>
    `
})

export class ParameterizedPipeComponent {
    birthday: Date = new Date(1991, 3, 28);
    toggle: boolean = true;
    get format() {
        return this.toggle ? 'shortDate' : 'fullDate';
    }
    toggleFormat() {
        this.toggle = !this.toggle;
    }
}