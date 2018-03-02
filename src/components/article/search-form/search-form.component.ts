import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-article-search-form',
  templateUrl: 'search-form.component.html'
})
export class SearchFormComponent implements OnInit, OnDestroy {

  searchForm = new FormGroup ({
    search: new FormControl()
  });
  
  searchSubs: Subscription;

  @Output() searchChanges: EventEmitter<any>;

  constructor(private formBuilder: FormBuilder) {

    this.searchChanges = new EventEmitter<any>();

    // this.searchForm = this.formBuilder.group({
    //   search: ''
    // });
  }

  ngOnInit() {
    this.searchSubs = this.searchForm
      .valueChanges
      .debounceTime(500)
      .subscribe(value => this.searchChanges.emit(value));
  }

  ngOnDestroy() {

    if (this.searchSubs) {
      this.searchSubs.unsubscribe();
    }
  }
}
