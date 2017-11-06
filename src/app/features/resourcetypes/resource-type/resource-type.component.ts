import { Component, OnInit } from '@angular/core';
import { SolrService } from '../../../services/solr.service';
import { SolrResult } from '../../../model/solr-result';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/partition';

@Component({
  selector: 'openan-resource-type',
  templateUrl: './resource-type.component.html',
  styleUrls: ['./resource-type.component.css']
})
export class ResourceTypeComponent implements OnInit {

  types: Array<any>;
  typesName: Array<string> = [];
  typesCount: Array<string> = [];
  private solrResult: SolrResult;
  errorMessage: string;

  constructor(private solrService: SolrService) { }

  ngOnInit() {
    this.getResourceTypes();
  }

  getResourceTypes() {
    this.solrService.getResourceTypes()
    .map(solrResult => solrResult.facet_counts.facet_fields.type).subscribe(types => {
        this.types = types;
        const [evens, odds] = Observable.from(types).partition(
          value =>  this.types.indexOf(value) % 2 === 0
        );
        odds.subscribe(
          typeCount => this.typesCount.push(typeCount)
        );
        evens.subscribe(
          typeName => this.typesName.push(typeName)
        );
    });
  }
}
