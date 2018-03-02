import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

/* components */
import {IcoListComponent} from './ico-list/ico-list.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    IcoListComponent
  ],
  exports: [
    SharedModule,
    IcoListComponent
  ],
  providers: []
})
export class IcoModule {
}