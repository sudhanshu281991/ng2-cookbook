import {Component, Input} from '@angular/core';
import {Occassion} from '../model/occassion';

@Component({
    selector: 'home-occassion',
    templateUrl: './app/home/occassion/occassion.component.html',
    styles: [`
      img{
            width: 100 %;
            height: 200px;
        }
            .more_occassion{
                height: 100px;
                width: 200px;
                background-color:red;
            }
            `],
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
   
}