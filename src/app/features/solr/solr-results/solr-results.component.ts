import { Component, OnInit } from '@angular/core';
import { Doc } from '../../../model/doc';
import { SolrService } from '../services/solr.service';
import { SolrResult } from '../../../model/solr-result';
import { Response } from '../../../model/response';

@Component({
  selector: 'openan-solr-results',
  templateUrl: './solr-results.component.html',
  styleUrls: ['./solr-results.component.css']
})
export class SolrResultsComponent implements OnInit {

  docs: Doc[];
  solrResult: SolrResult;
  errorMessage: any;
  query: string;

  constructor(private solrService: SolrService) { }

  ngOnInit() {
    this.query = 'q=opencms';
    this.searchSolr();
  }

  searchSolr() {
    this.solrService.search(this.query);
    this.solrService.solrResultObservable$.subscribe(
        solrResult => (this.solrResult = solrResult, this.docs = solrResult.response.docs),
        error =>  this.errorMessage = <any>error);
  }

}
