import {Component,Input} from '@angular/core';
import {VenueListTiles} from '../model/list-tiles';
import * as _ from 'underscore';

@Component({
    selector:'list-tile',
    template:`
      <div class="col-md-6" *ngFor="let listTiles of displayListTileData">
          <img class="col-md-12" src={{listTiles.Image}}>
          <h5 class="col-md-12 text-center">{{listTiles.Rating}}</h5>
          <div class="row">
              <h6 class="col-md-4 ">{{listTiles.Name}}</h6>
              <h6 class="col-md-4 ">{{listTiles.VenueType}}</h6>
              <h6 class="col-md-4">{{listTiles.SubVenueType}}</h6> 
          </div>
      </div>
    `
})

export class ListTileDataComponent{
    displayListTileData:any;
     @Input('listTile')
     set listTile(listTile:Array<VenueListTiles>){
         this.displayListTileData=listTile;
     }
     get listTile(){
         return this.displayListTileData;
     }
     
}