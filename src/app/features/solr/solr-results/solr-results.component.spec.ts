import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolrResultsComponent } from './solr-results.component';

describe('SolrResultsComponent', () => {
  let component: SolrResultsComponent;
  let fixture: ComponentFixture<SolrResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolrResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolrResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
