import {Component, Input} from '@angular/core';
import {Occassion} from '../model/occassion';

@Component({
    selector: 'home-occassion',
    templateUrl: './app/home/occassion/occassion.component.html',
    styleUrls: ['./app/home/occassion/occassion.component.css'],
})

export class HomeOccassionComponent {
    @Input() occassion: Array<Occassion>;
    _occassionLength: number;
    @Input('occassionlength')
    set occassionLength(occassionlength: number) {
        this._occassionLength = occassionlength > 10 ? 10 : occassionlength;
    }
    get occassionLength() {
        return this._occassionLength;
    }
    loadMoreOccassion() {
        this._occassionLength = this.occassion.length;
    }
    loadLessOccassion(){
         this._occassionLength=10;
    }

}