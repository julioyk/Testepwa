import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(public http: HttpClient) { }
  getShows(): Observable<object>{
    return this.http.get('http://api.tvmaze.com/show').pipe((res: any) => {
      console.log('res', res);
      return res;
    })
  }
}
