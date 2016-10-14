import {Component} from  '@angular/core';

@Component({
    selector: 'date-pipe',
    template: `
    <h5 class="row"><b> Example 1:Date Pipe</b></h5>
       <h6 class="row"><b>1)</b> The birthday is : {{birthday | date}}</h6>
       <h6 class="row">
        <b>2) When date :'medium' pipe format </b>
    <br/> <br/> The birthday is : {{birthday | date:'medium'}}
</h6>
<h6 class="row">
    <b>3) When the date is 'sort' pipe format</b>
    <br/><br/> The birthday is : {{birthday | date:'short'}}
</h6>
<h6 class="row">
    <b>4) When the date is 'fullDate' pipe format</b>
    <br/><br/> The birthday is : {{birthday | date:'fullDate'}}
</h6>
<h6 class="row">
    <b>5) When the date is 'longDate' pipe format</b>
    <br/><br/> The birthday is : {{birthday | date:'longDate'}}
</h6>
<h6 class="row">
    <b>6) When the date is 'mmss' pipe format</b>
    <br/><br/> The birthday is : {{birthday | date:'mmss'}}
</h6>
    `
})

export class DatePipeComponent{
    birthday:Date=new Date(1991,3,28);
  }