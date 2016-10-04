import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions,URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/observable';
import homeConstants = require('./home.constant');
import {City} from './model/city';
import {HomeView} from './model/home';

@Injectable()
export class HomeService {
    constructor(private http: Http) { }
    private homeCityUrl = homeConstants.HOME_CITY_URL;
    private homeLocationUrl = homeConstants.HOME_LOCATION_URL;
    private homeInitialUrl = homeConstants.HOME_INITIAL_URL;

    getCityData(): Observable<City[]> {
        return this.http.get(this.homeCityUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getLocation(cityName: string): Observable<string[]> {
        return this.http.get(this.homeLocationUrl+cityName)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getInitialHomeData(selectedCity: City, locationSelected: string): Observable<HomeView> {
        let homeViewParams:any=new URLSearchParams();
        homeViewParams.set('City', selectedCity.CityName);
        homeViewParams.set('MinPrice', selectedCity.MinPrice);
        homeViewParams.set('MaxPrice', selectedCity.MaxPrice);
        homeViewParams.set('MinCapacity', selectedCity.MinCapacity);
        homeViewParams.set('MaxCapacity', selectedCity.MaxCapacity);
        homeViewParams.set('Location', locationSelected=locationSelected === "All"|| locationSelected === "" ? "" : locationSelected);
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.http.post(this.homeInitialUrl, homeViewParams, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}