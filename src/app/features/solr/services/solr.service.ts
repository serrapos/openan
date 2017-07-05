import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SolrResult } from '../../../model/solr-result';

@Injectable()
export class SolrService {
  constructor(private http: Http) { }

  search(solrQuery: string): Observable<SolrResult> {
    const urlSolr:string = 'http://opencmshispano.com/handleSolrSelect?wt=json&' + solrQuery;
    return this.http
      .get(urlSolr)
      .map((r: Response) => r.json() as SolrResult)
      .catch((error: any) => {
          console.error('An friendly error occurred', error);
          return Observable.throw(error.message || error);
      });
  }

}
