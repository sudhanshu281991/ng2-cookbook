import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/observable';
import venueListConstants=require('./venue-list.constants');

/**
 * 
 * 
 * @export
 * @class VenueListService
 */
@Injectable()
export class VenueListService {
    constructor(private http: Http) { }
     private venueListUrl=venueListConstants.VENUE_LIST_INITIAL_URL;
     
    /**
     * 
     * 
     * @returns {Observable<any>}
     * 
     * @memberOf VenueListService
     */
    getVenueListData(): Observable<any> {
        let venueListParams: any = new URLSearchParams();
        venueListParams.set('City', 'Mumbai');
        venueListParams.set('Location', '');
        venueListParams.set('PageNumber', 1);
        venueListParams.set('PageLength', 35);
        let headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.http.post(this.venueListUrl, venueListParams, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    /**
     * 
     * 
     * @private
     * @param {Response} res
     * @returns
     * 
     * @memberOf VenueListService
     */
    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    
    /**
     * 
     * 
     * @private
     * @param {*} error
     * @returns
     * 
     * @memberOf VenueListService
     */
    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
