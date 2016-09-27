import {Component,Input} from '@angular/core';

@Component({
    selector:'soting-option',
    template:`
      <div class="col-md-12">
         <div class="col-md-4">
             <h5 class="row">Your Venues Count</h5>
             <h6 class="row text-center">{{tilesLength}}</h6>
         </div>
      </div>
    `
})

export class SortingTileComponent{
    @Input() tilesLength:number;
}