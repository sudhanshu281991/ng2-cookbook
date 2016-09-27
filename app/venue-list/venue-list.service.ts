import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/observable';
import venueListConstants=require('./venue-list.constants');

@Injectable()
export class VenueListService {
    constructor(private http: Http) { }
     private venueListUrl=venueListConstants.VENUE_LIST_INITIAL_URL;
    getVenueListData(): Observable<any> {
        let venueListParams: any = new URLSearchParams();
        venueListParams.set('City', 'Mumbai');
        venueListParams.set('Location', '');
        venueListParams.set('PageNumber', 1);
        venueListParams.set('PageLength', 35);
        let headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        // return this.http.post(this.venueListUrl, venueListParams, options)
        //     .map(this.extractData)
        //     .catch(this.handleError);
         return this.http.get(this.venueListUrl)
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
