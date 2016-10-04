import {Component, Input} from '@angular/core';
import {Occassion} from '../model/occassion';
import { Router } from '@angular/router';

@Component({
     moduleId:module.id.replace("/dist/", "/app/"),
    selector: 'home-occassion',
    templateUrl: 'occassion.component.html',
    styleUrls: ['occassion.component.css'],
})

export class HomeOccassionComponent {
    constructor(private router:Router){}
    @Input() occassion: Array<Occassion>;
    _occassionLength: number;
    @Input('occassionlength')
    set occassionLength(occassionlength: number) {
        this._occassionLength = occassionlength > 5 ? 5 : occassionlength;
    }
    get occassionLength() {
        return this._occassionLength;
    }
    loadMoreOccassion() {
        this._occassionLength = this.occassion.length;
    }
    loadLessOccassion(){
         this._occassionLength=5;
    }
    navigateToVenueList(occassionSelected:string){
         this.router.navigate(['/venue-list', { option:'collection',optionSelected:occassionSelected }]);
    }

}