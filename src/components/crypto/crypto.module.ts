import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

/* components */
import {CurrencyListComponent} from './currency-list/currency-list.component'


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CurrencyListComponent
  ],
  exports: [
    SharedModule,
    CurrencyListComponent
  ],
  providers: []
})
export class CryptoModule {
}