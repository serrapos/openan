import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Message } from 'primeng/primeng';

import { SolrResult } from '../../../model/solr-result';
import { Response } from '../../../model/response';
import { Doc } from '../../../model/doc';
import { QueryParams } from '../../../model/query-params';
import { SolrService } from '../../../services/solr.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'openan-solr-filter',
  templateUrl: './solr-filter.component.html',
  styleUrls: ['./solr-filter.component.css']
})
export class SolrFilterComponent implements OnInit {

    solrResult: SolrResult;
    errorMessage: any;
    docs: Doc[];
    query: string;
    queryParams: QueryParams[];
    newNameParam: string;
    newValueParam: string;
    maxResultsAllows: number[];
    paramTypes: string[];
    limits: number;
    orderBy: string;
    typeOrder: string;

    constructor(private solrService: SolrService) { }

    ngOnInit(): void {
        this.queryParams = [];
        this.query = '';
        this.newNameParam = 'fq';
        this.maxResultsAllows = [10, 50, 100, 500];
        this.paramTypes = ['fq', 'q'];
        this.limits = 100;
        this.orderBy = 'score';
        this.typeOrder = 'asc';
    }

    addItem() {
        const newParam: QueryParams = {name: this.newNameParam, value: this.newValueParam};
        this.queryParams.push(newParam);
        this.generateQuery();
        this.newValueParam = '';
    }

    deleteQueryParam(index) {
        this.queryParams.splice(index,1);
    }

    searchSolr() {
        this.solrService.search(this.query);
    }

    generateQuery() {
        this.query = '';
        for (let p of this.queryParams) {
            this.query += '&' + p.name + '=' + p.value;
        }
    }

}
