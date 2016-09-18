import {Component, Input} from '@angular/core';
import {Collection} from '../model/collection';
import { Router } from '@angular/router';

@Component({
    selector: 'home-collection',
    templateUrl: './app/home/collection/collection.component.html',
    styleUrls: ['./app/home/collection/collection.component.css']
})

export class HomeCollectionComponent {
    @Input() collection: Array<Collection>;
    constructor(private router: Router) { }
    navigatetoVenueList(collectionType:string){
          this.router.navigate(['/venue-list', { option:'collection',optionSelected:collectionType }]);
    }
}