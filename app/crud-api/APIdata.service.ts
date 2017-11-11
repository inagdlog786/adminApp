import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Headers,RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Products} from './modalProductApi';


@Injectable()
export class APIDataService {
  headers: any;
  private GetRequestURL = 'http://localhost:53891/api/Products/';
  constructor(private http:Http) { }
  private extractData(res:Response){
        let body=res.json();
        return body.fields || {};
    }

  getProductDetails(): Promise<Products[]> {
    return this.http.get(this.GetRequestURL).toPromise().then((response) => <any[]>response.json());
  };

  postProductDetails(products:Products):any{
    let body=JSON.stringify(products);
    let headers=new Headers({'content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});
    return this.http.post(this.GetRequestURL,body,options).toPromise().then((res) => {
    return res.json()});
  }
  putProductDetails(model):any{
    const UpdateUrl=`${this.GetRequestURL}${model.ID}`;
    let body=JSON.stringify(model);
    let headers=new Headers({'content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});
    return this.http.put(UpdateUrl,body,options).toPromise().then((res) => {
    return res.json()});
  }
  deleteProductDetails(ID:number):any {
  const url = `${this.GetRequestURL}/${ID}`;
  return this.http.delete(url, {headers: this.headers}).toPromise().then((res) =>{
    return res.json()});
  }

}
