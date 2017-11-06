import { TestBed, inject } from '@angular/core/testing';

import { SolrQueryService } from './solr-query.service';

describe('SolrQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolrQueryService]
    });
  });

  it('should be created', inject([SolrQueryService], (service: SolrQueryService) => {
    expect(service).toBeTruthy();
  }));
});
