import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class DataService {
 private _loginListUrl = 'http://localhost:53891/api/Login';
  constructor(private _http:Http) { }
  getloginDetails(): Observable<any[]>{
    return this._http.get(this._loginListUrl)
    .map((response:Response) => <any[]>response.json())
    .catch(this.handleError);
  };
  private handleError(error:Response){
    console.error(error);
    return Observable.throw(error.json().error || 'server Error');
  };

  getDataLists(): any[]{
    return [
      {
          'ID': 1,
          'UserName': 'Nagarjuna',
          'Password': 'pwd'
      },
      {
          'ID': 2,
          'UserName': 'tamarada',
          'Password': 'tamarada'
      },
      {
          'ID': 3,
          'UserName': 'test',
          'Password': 'sdasd'
      }
    ];
  };
  
  cars= [
    'Ford', 'Cheverloet', 'Buick'
  ];
  myData(){
    return '@ 2017 All Rights Recived From Nagarjuna';
  }

}
