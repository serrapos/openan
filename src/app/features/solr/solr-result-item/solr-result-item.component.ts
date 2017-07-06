import { Component, OnInit, Input } from '@angular/core';
import { Doc } from '../../../model/doc';

@Component({
  selector: 'openan-solr-result-item',
  templateUrl: './solr-result-item.component.html',
  styleUrls: ['./solr-result-item.component.css']
})
export class SolrResultItemComponent implements OnInit {

  @Input() doc: Doc;

  constructor() { }

  ngOnInit() {
  }

}
