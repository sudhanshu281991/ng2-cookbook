import {Component, OnInit} from '@angular/core';
import {Hero} from '../shared/models/hero';
import {HeroService} from './http-test.service';
import { Router, RouterModule }   from '@angular/router';
import httpRequestConstants=require('./http-request.constants')


@Component({
    providers: [HeroService],
    styles: [`button{margin-top:30px;}` ],
    templateUrl: "./app/http-request/http-request.component.html"
})

export class HttpTestComponent implements OnInit {
    //Definig the constants to be used in the HTML
    TOUR_OF_HEROES:string=httpRequestConstants.TOUR_OF_HEROES;
    HEROES:string=httpRequestConstants.HEROES;
    NEW_HERO_NAME:string=httpRequestConstants.NEW_HERO_NAME;
    //end of the constants declaration
    erroMessage: string;
    heroes: Array<Hero>;
    mode = 'Observable';
    constructor(private heroService: HeroService, private router: Router) { }
    ngOnInit() { this.getHeroes(); }
    getHeroes() {
        this.heroService.getHeroes().subscribe(
            heroes => this.heroes = heroes,
            error => this.erroMessage = <any>error
       )
    }
    navigateToUserData() {
        this.router.navigate(['/userProfile']);
        return false;
    }
}