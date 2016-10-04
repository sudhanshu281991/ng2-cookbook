import {Component, Input} from '@angular/core';
import {Collection} from '../model/collection';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id.replace("/dist/", "/app/"),
    selector: 'home-collection',
    templateUrl: 'collection.component.html',
    styleUrls: ['collection.component.css']
})

export class HomeCollectionComponent {
    @Input() collection: Array<Collection>;
    constructor(private router: Router) { }
    navigatetoVenueList(collectionType: string) {
        this.router.navigate(['/venue-list', { option: 'collection', optionSelected: collectionType }]);
    }
}