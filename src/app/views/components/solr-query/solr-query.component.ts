import { Component, OnInit } from '@angular/core';
import { SolrResult } from '../../../model/solr-result';
import { Doc } from '../../../model/doc';
import { SolrQueryService } from '../../../services/solr-query.service';

@Component({
  selector: 'app-solr-query',
  templateUrl: './solr-query.component.html',
  styleUrls: ['./solr-query.component.scss']
})
export class SolrQueryComponent implements OnInit {

  constructor(private solrService: SolrQueryService) { }

  urlSolr = 'http://www.opencmshispano.com/handleSolrSelect';
  query = 'fq=type:image';
  finalQuery = 'fq=type:image';
  submitted = false;
  docs: Doc[];
  solrResult: SolrResult;
  errorMessage: any;
  page = 1;
  pageSize = 10;
  sort = 'contentdate desc';
  site = '/sites/default/';

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    const start: number = (this.page - 1) * this.pageSize;
    this.finalQuery = this.query + '&fq=parent-folders:"' + this.site + '"&start=' + start + '&rows=' + this.pageSize + '&sort=' + this.sort;
    this.solrService.search(this.urlSolr, this.finalQuery);
    this.solrService.solrResultObservable$.subscribe(
        solrResult => (this.solrResult = solrResult, this.docs = solrResult.response.docs),
        error =>  this.errorMessage = <any>error);
  }


}
