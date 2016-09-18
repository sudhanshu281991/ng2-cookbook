import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {VenueListService} from './venue-list.service';


@Component({
    providers:[VenueListService],
    template: `Hello`
})

export class VenueListComponent implements OnInit {
    optionSelected: any;
    venueList:Observable<any>;
    constructor(private route: ActivatedRoute, private router: Router
       ,private venueListService:VenueListService) { }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            console.log(params);
            this.getVenueList();
        });
    }
    getVenueList(){
        this.venueList=this.venueListService.getVenueListData();
        this.venueList.subscribe(listData =>{
            console.log(listData);
        })
    }
}