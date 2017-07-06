import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Message } from 'primeng/primeng';

import { SolrResult } from '../../../model/solr-result';
import { Response } from '../../../model/response';
import { Doc } from '../../../model/doc';
import { QueryParams } from '../../../model/query-params';
import { SolrService } from '../services/solr.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'openan-solr-page',
  templateUrl: './solr-page.component.html',
  styleUrls: ['./solr-page.component.css']
})
export class SolrPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
