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
  submitted = false;
  docs: Doc[];
  solrResult: SolrResult;
  errorMessage: any;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.solrService.search(this.urlSolr, this.query);
    this.solrService.solrResultObservable$.subscribe(
        solrResult => (this.solrResult = solrResult, this.docs = solrResult.response.docs),
        error =>  this.errorMessage = <any>error);
  }


}
