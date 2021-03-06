import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";


import 'rxjs/add/operator/map';

@Injectable()
export class CoinMarketCapService {

    constructor(
        private http: Http) {}
    
    getCoinData(limit=100){
        return this.http.get('https://api.coinmarketcap.com/v1/ticker/?limit='+limit)
                  .map(res => res.json());
    }

    getCoinSpecific(name){
        return this.http.get('https://api.coinmarketcap.com/v1/ticker/'+name)
                  .map(res => res.json());
    }
}
