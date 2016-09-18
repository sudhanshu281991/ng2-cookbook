import {Component, Input} from '@angular/core';
import {Collection} from '../model/collection';

@Component({
    selector: 'home-collection',
    templateUrl:'./app/home/collection/collection.component.html',
    styleUrls: ['./app/home/collection/collection.component.css']
})

export class HomeCollectionComponent {
    @Input() collection: Array<Collection>;
}