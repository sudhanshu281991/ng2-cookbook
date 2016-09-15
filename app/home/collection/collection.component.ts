import {Component, Input} from '@angular/core';
import {Collection} from '../model/collection';

@Component({
    selector: 'home-collection',
    template: `
    <h3 class="row">
       Collection
    </h3> 
   <div  class="col-md-4" *ngFor="let collections of collection">
       <img class="col-md-12" src={{collections.ImageGuid}}/>
       <span class="col-md-12 text-center">{{collections.TotalCount}}</span>
       <h4 class="col-md-12 text-center">{{collections.CollectionType}}</h4>
   </div>   `,
    styles: [`
      img{
          width:100%;
          height:200px;
      }
   `]
})

export class HomeCollectionComponent {
    @Input() collection: Array<Collection>;
}