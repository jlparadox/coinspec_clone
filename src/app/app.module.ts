import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule}   from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ICOPage } from '../pages/ICOs/ico';


import {ComponentsModule} from '../components/components.module';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

const materialModules = [
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,  
    MatButtonToggleModule,
    MatListModule,  
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
];

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ICOPage,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ComponentsModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ICOPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
