import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Message } from 'primeng/primeng';

import { SolrResult } from './model/solr-result';
import { Response } from './model/response';
import { Doc } from './model/doc';
import { QueryParams } from './model/query-params';
import { SolrService } from './services/solr.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    solrResult: SolrResult;
    errorMessage: any;
    docs: Doc[];
    query: string;
    queryParams: QueryParams[];
    newNameParam: string;
    newValueParam: string;

    constructor(private solrService: SolrService) { }

    ngOnInit(): void {
        this.queryParams = [];
        this.query = '';
    }

    addItem() {
        const newParam: QueryParams = {name: this.newNameParam, value: this.newValueParam};
        this.queryParams.push(newParam);
        this.generateQuery();
        this.newNameParam = '';
        this.newValueParam = '';
    }

    deleteQueryParam(index) {
        this.queryParams.splice(index,1);
    }

    searchSolr() {
        this.solrService.search(this.query)
                   .subscribe(
                     solrResult => (this.solrResult = solrResult, this.docs = solrResult.response.docs),
                     error =>  this.errorMessage = <any>error);
    }

    generateQuery() {
        this.query = '';
        for (let p of this.queryParams) {
            this.query += '&' + p.name + '=' + p.value;
        }
    }
}
