import { NgModule } from '@angular/core';

/* component modules */
import {ArticleModule} from './article/article.module';
import {CryptoModule} from './crypto/crypto.module';
import {IcoModule} from './ico/ico.module';
import {SharedModule} from './shared/shared.module';
import {DashboardComponent} from './dashboard/dashboard.component';

/* services */
import { CryptoCompareService } from '../providers/cryptocompare/cryptocompare.service';
import { CoinMarketCapService } from '../providers/coinmarketcap/coinmarketcap.service';

import {HeaderComponent} from './header/header.component';

@NgModule({
	declarations: [DashboardComponent],
	imports: [
        SharedModule,
        ArticleModule,
        CryptoModule,
        IcoModule
        ],
	exports: [
        DashboardComponent,
        SharedModule,
        ArticleModule,
        CryptoModule,
        IcoModule
        ],
        providers: [
        CryptoCompareService,
        CoinMarketCapService
        ]
})
export class ComponentsModule {}
