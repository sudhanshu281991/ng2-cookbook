import {Component, OnInit} from '@angular/core';
import {City} from './model/city';
import {HomeService} from './home.service';
import { Observable } from 'rxjs/Observable';
import {Collection} from './model/collection';
import {Occassion} from './model/occassion';
import {HomeView} from './model/home';
import {Blog} from './model/blogs';

@Component({
    providers: [HomeService],
     moduleId:module.id.replace("/dist/", "/app/"),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    erroMessage: string;
    city: Observable<City[]>;
    location: Observable<string[]>;
    selectedCity: City;
    initialHomeViewData: Observable<HomeView>;
    homeViewCollection: Array<Collection> = [];
    homeViewOccassion: Array<Occassion> = [];
    homeViewBlog: Array<Blog>;
    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.getCityData();
    }

    getCityData() {
        this.city = this.homeService.getCityData();
        this.city.subscribe(comments => {
            this.cityChanged(comments[0]);
            this.getLocation(comments[0].CityName);
        });

    }

    cityChanged(city: City) {
        this.selectedCity = city;
    }

    getLocation(citySelected: string) {
        this.location = this.homeService.getLocation(citySelected);
        this.location.subscribe(comments => {
            this.getInitialHomeData("");
        })
    }

    getInitialHomeData(locationSelected: string) {
        setTimeout(() => {
            this.initialHomeViewData = this.homeService.getInitialHomeData(this.selectedCity, locationSelected);
            this.initialHomeViewData.subscribe(comments => {
                this.homeViewCollection = comments.Collection;
                this.homeViewOccassion = comments.Occasions;
                this.homeViewBlog = comments.Blogs;
            });
        }, 100);
    }

    getSelectedLocation(citySelected: string, index: number) {
        this.city.subscribe(comments => {
            this.selectedCity = comments[index];
        });
        this.getLocation(citySelected);
    }

    getSelectedLocationHomeView(location: string) {
        this.getInitialHomeData(location);
    }
} 