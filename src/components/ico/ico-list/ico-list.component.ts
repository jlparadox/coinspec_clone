import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

export class ICO {
  name: string;
  symbol?:string;
  imgUrl?: string;
  url?: string;
  dateStart?: string;
  dateEnd?: string;
  rating?: number;
}


@Component({
  selector: 'app-ico-list',
  templateUrl: 'ico-list.component.html'
})
export class IcoListComponent implements OnInit {

  //articleList: ArticleList;
  searchTouched: boolean = false;
  title: string = "ICO list";
  icos:any;
  icoList:ICO[] = [];

  constructor(public navCtrl: NavController) {
     this.getSampleData();
  }

  ngOnInit() {
  }

  getSampleData(){
    // Let's populate this page with some filler content for funzies
    this.icos = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.icoList = [];
    for (let i = 1; i < 11; i++) {
      this.icoList.push({
        name: this.icos[Math.floor(Math.random() * this.icos.length)],
        symbol: 'Item ' + i,
        dateStart: '01/01/2018',
        dateEnd: '01/01/2019',
        rating: i
      });
    }
  }


}
