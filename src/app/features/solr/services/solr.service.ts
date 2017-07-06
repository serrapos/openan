import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SolrResult } from '../../../model/solr-result';
import { Doc } from '../../../model/doc';

@Injectable()
export class SolrService {
  solrResult: SolrResult;
  errorMessage: any;
  query: string;
  private errorMessageSource = new Subject<String>();
  errorMessageObservable$ = this.errorMessageSource.asObservable();
  private solrResultSource = new Subject<SolrResult>();
  solrResultObservable$ = this.solrResultSource.asObservable();

  constructor(private http: Http) { }

  search(solrQuery: string) {
    const urlSolr:string = 'http://opencmshispano.com/handleSolrSelect?wt=json&' + solrQuery;
    this.http
      .get(urlSolr)
      .map((r: Response) => r.json() as SolrResult).subscribe(
        solrResult => (this.solrResultSource.next(solrResult)),
        error =>  this.errorMessageSource.next(error));
  }

}
