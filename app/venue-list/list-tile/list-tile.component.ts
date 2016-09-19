import {Component,Input} from '@angular/core';
import {VenueListTiles} from '../model/list-tiles';
import * as _ from 'underscore';

@Component({
    selector:'list-tile',
    template:`
      <div class="col-md-6" *ngFor="let listTiles of displayListTileData">
          <img class="col-md-12" src={{listTiles.Image}}>
          <h5 class="col-md-12 text-center">{{listTiles.Rating}}</h5>
          <h6 class="col-md-12 text-center">{{listTiles.Name}}</h6>
      </div>
    `
})

export class ListTileDataComponent{
    displayListTileData:any;
     @Input('listTile')
     set listTile(listTile:Array<VenueListTiles>){
         this.displayListTileData=_.filter(listTile, function(item) {
                return item.Rating===4;
         });
         console.log(this.displayListTileData);
     }
     get listTile(){
         return this.displayListTileData;
     }
     
}