import { Component, OnInit } from '@angular/core';
import { CryptoCompareService } from '../../../providers/cryptocompare/cryptocompare.service';
import { CoinMarketCapService } from '../../../providers/coinmarketcap/coinmarketcap.service';

export class Coin {
  name?: string;
  symbol?:string;
  imgUrl?: string;
  url?: string;
  price?: string;
  change?: string;
  rank?: number;
}

@Component({
  selector: 'app-currency-list',
  templateUrl: 'currency-list.component.html'
})
export class CurrencyListComponent implements OnInit {
  title:string = "Cryptocurrencies";
  baseMediaUrl:string = "https://www.cryptocompare.com";
  coinList:Coin[] = [];

  constructor(
    private cryptoCompareService: CryptoCompareService,
    private coinMarketCapService: CoinMarketCapService
    ) { }

  ngOnInit() {
    //this.getCoinData();
    this.getSampleData();
  }

  getCoinData(){
    this.coinMarketCapService.getCoinData().subscribe(
            data => {
              data.forEach(coin => {
                let item = new Coin;
                item.name = coin['name'];
                item.symbol = coin['symbol'];
                item.price = coin['price_usd'];
                item.change = coin['percent_change_24h'];
                item.rank = coin['rank'];
              });
          },
          err => {
              console.log(err);
          }
    );
    /* //detailed using cryptocompare
    this.cryptoCompareService.getCoinList().subscribe(
                  object => {
                    Object.keys(object['Data']).forEach(key => {
                        let item = new Coin;
                        item.name = object['Data'][key]['CoinName'];
                        item.symbol = object['Data'][key]['Symbol'];
                        item.imgUrl = this.baseMediaUrl + object['Data'][key]['ImageUrl'];
                        item.url = object['Data'][key]['Url'];
                        this.coinMarketCapService.getCoinSpecific(item.name).subscribe(
                          coin => {
                            item.price = coin['price_usd'];
                            item.change = coin['24h_volume_usd'];
                            item.rank = coin['rank'];
                          });
                        console.log(item);
                        //this.coinList.push(item);
                    });
                },
      ); */
  }

  getSampleData(){
    let crypList = ['BTC', 'ETH', 'LTC', 'ETC', 'DOG'];
    let i = 0;
    for (let cryp of crypList) {
        i++;
        let item = new Coin;
        item.name = cryp;
        item.symbol = cryp;
        item.price = '$10';
        item.change = '15%';
        item.rank = i;
        this.coinList.push(item);
    }
  }

}
