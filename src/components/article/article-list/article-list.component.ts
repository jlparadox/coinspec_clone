import {Component, Input, OnInit} from '@angular/core';
import {ArticleCard} from '../article-card/article-card.component';

export interface ArticleList {
  list: ArticleCard[];
}

@Component({
  selector: 'app-article-list',
  templateUrl: 'article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  @Input() data: ArticleList;
  title = "News / Articles";

  constructor() {
  }

  ngOnInit() {
    this.getSampleData();
  }

  getSampleData(){
    let crypList = ['BTC', 'ETH', 'LTC', 'ETC', 'DOG'];
    let i = 0;
    let itemList:ArticleList = {
        list: [],
    };

    for (let cryp of crypList) {
        let item = new ArticleCard;
        item.title = "Title: " + cryp;
        item.subTitle = "Subtitle: " + cryp;
        item.details = 'details';
        item.image = 'https://placeimg.com/320/240/tech';
        item.description = 'test';
        item.body = 'body test body test body';
        item.url = 'https://en.wikipedia.org/wiki/Standard_test_image';
        item.showFull = false;

        itemList['list'].push(item);
    }

    this.data = itemList;
  }

  onButtonClicked(item) {

  }
}
