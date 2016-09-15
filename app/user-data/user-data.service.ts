import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {User} from '../shared/models/user';
import {Observable} from 'rxjs/observable';

@Injectable()

export class UserDataService{
    constructor(private http:Http){}

    private userDataUrl='./app/data/user-data.json';
    getUserData(): Observable<User[]>  {
        return this.http.get(this.userDataUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
  private extractData(res:Response){
        let body=res.json();
        return  body.data ||{};
    }
    private handleError(error:any){
         let errMsg = (error.message) ? error.message: error.status ? `${error.status} - ${error.statusText}` : 'Server error';
         console.error(errMsg);
         return Observable.throw(errMsg);
    }
}