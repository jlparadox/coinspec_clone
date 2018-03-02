import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export class ArticleCard {
  title?: string;
  subTitle?: string;
  details?: string;
  image?: string;
  description?: string;
  body?: string;
  url?: string;
  showFull?: boolean;
}

@Component({
  selector: 'app-article-card',
  templateUrl: 'article-card.component.html'
})
export class ArticleCardComponent implements OnInit {

  @Input() data: ArticleCard;
  @Output() buttonClicked: EventEmitter<any>;

  constructor() {

    this.buttonClicked = new EventEmitter();
  }

  ngOnInit() {
  }

  onButtonClicked($event) {

    this.data.showFull = !this.data.showFull;
    this.buttonClicked.emit($event);
  }
}
