import {Component} from '@angular/core';

@Component({
    selector: 'chain-pipe',
    template: `
       <h3 class="row">Chaining Pipes</h3>
<p class="row">We can chain pipes i.e we can apply multiple pipes separated by '|'</p>
<h6 class="row">
    <br/><br/> The birthday is : {{birthday | date:'fullDate' | uppercase}}
</h6>
<h6 class="row note">
   When in above example we pass uppercase filter before the date it will through error.So it is necessary to chain the pipes in correct order
</h6>
    `,
    styles: [`
      .note{
          color:red;
      }
    `]
})

export class ChainingPipeComponent {
    birthday: Date = new Date(1991, 3, 28);
}