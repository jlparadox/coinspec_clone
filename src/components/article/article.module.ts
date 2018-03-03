import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

//components
import {SearchFormComponent} from './search-form/search-form.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleCardComponent} from './article-card/article-card.component';

//services
import {
  ArticleService
} from '../../providers/article/article.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    //SearchFormComponent,
    ArticleListComponent,
    ArticleCardComponent
  ],
  exports: [
    SharedModule,
    ArticleCardComponent,
    ArticleListComponent,
    //SearchFormComponent,
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule {
}
