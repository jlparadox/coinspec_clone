import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ArticleCard} from '../../components/article/article-card/article-card.component';
import {ArticleList} from '../../components/article/article-list/article-list.component';
import {ArticleService} from '../../providers/article/article.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  articleList: ArticleList;
  searchTouched: boolean = false;

  constructor(public navCtrl: NavController, private articleService: ArticleService) {
    this.articleList = {
      list: []
    };
  }

  ngOnInit() {
  }


}
