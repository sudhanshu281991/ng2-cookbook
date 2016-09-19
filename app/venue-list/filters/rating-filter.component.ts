import {Component,EventEmitter, Input,Output} from '@angular/core';
import {RatingFilterOption} from '../model/rating-filter';
import * as _ from 'underscore';

@Component({
    selector: 'rating-filter',
    template: `
      <h4 class="row">RATING:</h4>
      <div *ngFor="let ratingFilterOptions of ratingFilterOption;let i =index">
       <input type="checkbox" name="ratingFilterOption"
                           value="{{ratingFilterOptions}}"
                           [checked]="ratingFilterOptions.isSelected"
                           (change)="updateRatingFilter(ratingFilterOptions,i,$event)"/>{{ratingFilterOptions.rating}}</div>
    `
})

export class RatingFilterComponent {
    @Input() ratingFilterOption: Array<RatingFilterOption>;
    @Output() onRatingSelection=new EventEmitter<any>();
    updateRatingFilter(ratingFilterOptions: RatingFilterOption, index: number, event) {
        this.ratingFilterOption[index].isSelected = event.target.checked;
        let selectedRating = _.filter(this.ratingFilterOption, function (item:RatingFilterOption) {
            return item.isSelected;
        });
        this.onRatingSelection.emit(selectedRating);
  }
}