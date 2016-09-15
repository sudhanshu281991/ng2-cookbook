import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';
import homeConstants = require('./home.constant');
import {City} from './model/city';



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
        return this.http.get(this.homeLocationUrl + cityName)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getInitialHomeData(selectedCity: City, locationSelected: string): Observable<any> {
        let body: string = JSON.stringify({
            "City": selectedCity.CityName,
            "MinPrice": selectedCity.MinPrice,
            "MaxPrice": selectedCity.MaxPrice,
            "MinCapacity": selectedCity.MinCapacity,
            "MaxCapacity": selectedCity.MaxCapacity,
            "Location": locationSelected
        });
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.http.post(this.homeInitialUrl, body, options)
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