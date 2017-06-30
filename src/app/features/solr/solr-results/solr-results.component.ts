import { Component, OnInit } from '@angular/core';
import { Doc } from '../../../model/doc';

@Component({
  selector: 'openan-solr-results',
  templateUrl: './solr-results.component.html',
  styleUrls: ['./solr-results.component.css']
})
export class SolrResultsComponent implements OnInit {

  docs: Doc[];

  constructor() { }

  ngOnInit() {
  }

}
