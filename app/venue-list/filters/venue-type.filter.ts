import {Component,EventEmitter, Input,Output} from '@angular/core';
import {VenueTypeFilterOption} from '../model/venue-type.filter';
import * as _ from 'underscore';

@Component({
    selector: 'venue-type-filter',
    template: `
      <h4 class="row">Venue Type:</h4>
      <div *ngFor="let venueTypeFilterOptions of venueTypeFilterOption;let i =index">
       <input type="checkbox" name="venueTypeFilterOption"
                           value="{{venueTypeFilterOptions}}"
                           [checked]="venueTypeFilterOptions.isSelected"
                           (change)="updateVenueTypeFilter(venueTypeFilterOptions,i,$event)"/>{{venueTypeFilterOptions.venueType}}</div>
    `
})

export class VenueTypeFilterComponent {
    @Input() venueTypeFilterOption: Array<VenueTypeFilterOption>;
    @Output() onVenueTypeSelection=new EventEmitter<any>();
    updateVenueTypeFilter(ratingFilterOptions: VenueTypeFilterOption, index: number, event) {
        this.venueTypeFilterOption[index].isSelected = event.target.checked;
        let selectedVenueType = _.filter(this.venueTypeFilterOption, function (item:VenueTypeFilterOption) {
            return item.isSelected;
        });
        this.onVenueTypeSelection.emit(selectedVenueType);
  }
}