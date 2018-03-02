import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class HttpService {

  baseUrl: string;

  constructor(private http: HttpClient) {

    this.baseUrl = 'http://localhost:3000/';
  }

  get(url, params): Observable<any> {

    return this.http
      .get(`${this.baseUrl}${url}`, {
        params: params
      });
  }
}
