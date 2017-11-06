import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SolrResult } from '../model/solr-result';
import { Doc } from '../model/doc';

@Injectable()
export class SolrQueryService {
  solrResult: SolrResult;
  errorMessage: any;
  query: string;
  private getJsonParam = 'wt=json&';
  private solrQueryResourceTypes = 'fq=type:*&facet=true&facet.field=type';
  private errorMessageSource = new Subject<String>();
  errorMessageObservable$ = this.errorMessageSource.asObservable();
  private solrResultSource = new Subject<SolrResult>();
  solrResultObservable$ = this.solrResultSource.asObservable();

  constructor(private http: Http) { }

  search(urlSolrBase: string, solrQuery: string) {
      const url: string = urlSolrBase + '?' + this.getJsonParam + solrQuery;
      this.http
        .get(url)
        .map((r: Response) => r.json() as SolrResult).subscribe(
          solrResult => (this.solrResultSource.next(solrResult)),
          error =>  this.errorMessageSource.next(error));
  }

  getResourceTypes(urlSolrBase: string): Observable<SolrResult> {
      const url: string = urlSolrBase + this.getJsonParam + this.solrQueryResourceTypes;
      return this.http
        .get(url)
        .map((r: Response) => r.json() as SolrResult);
  }

}
