import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";

import {
  HttpService
} from '../../providers/app/http.service';


import { HomePage } from '../../pages/home/home';

import { HeaderComponent } from '../header/header.component';
import { SearchFormComponent } from '../article/search-form/search-form.component';

//material
import {
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatGridListModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

const materialModules = [
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
];

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    //BrowserAnimationsModule,
    NoopAnimationsModule,
    materialModules,
    ReactiveFormsModule,
    IonicModule.forRoot(HeaderComponent)
  ],
  declarations: [HeaderComponent, SearchFormComponent],
  exports: [
    HttpModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    //BrowserAnimationsModule,
    NoopAnimationsModule,
    materialModules,
    ReactiveFormsModule,
    SearchFormComponent,
    HeaderComponent,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HeaderComponent,
    SearchFormComponent
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    HttpService
  ]
})
export class SharedModule { }
