import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ArticleCard} from '../../components/article/article-card/article-card.component';
import {ArticleList} from '../../components/article/article-list/article-list.component';
import {ArticleService} from '../../providers/article/article.service';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

  articleList: ArticleList;
  searchTouched: boolean = false;
  @Input() headerTitle: string;

  constructor(public navCtrl: NavController, private articleService: ArticleService) {
    this.articleList = {
      list: []
    };
  }

  ngOnInit() {
  }

  onSearchChanges(data) {
    console.log('data', data);

    this.searchTouched = true;

    this.articleService
        .findArticles(data)
        .then(response => this.articleList = this.initArticleListFromData(response.data))
        .catch(err => console.error('error', err));
  }

  initArticleListFromData(data): ArticleList {

        return {
            list: data.map(datum => {

            const item: ArticleCard = {
                title: datum.headline,
                subTitle: [
                datum.writer,
                datum.author
                ].join(', '),
                details: `${datum.publisher} ${datum.pubDtPH} ${datum.pubTimePH}`,
                body: datum.body
            };

            return item;
            })
        };
  }


}
