import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    template: `Hello`
})

export class VenueListComponent implements OnInit {
    optionSelected:any;
    constructor(private route: ActivatedRoute, private router: Router) { }
    ngOnInit() {
    this.route.params.forEach((params: Params) => {
        console.log(params);
     //let id = +params['id']; // (+) converts string 'id' to a number
     //this.service.getHero(id).then(hero => this.hero = hero);
   });
    }
}