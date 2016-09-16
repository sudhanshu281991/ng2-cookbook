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
                background-color:red;
                color:white;
                padding:20px;
                height:200px;
                margin-left:22px;
                line-height:7;
                font-size:20px;
                cursor:pointer;
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
    loadMoreOccassion() {
        this._occassionLength = this.occassion.length;
    }
    loadLessOccassion(){
         this._occassionLength=10;
    }

}