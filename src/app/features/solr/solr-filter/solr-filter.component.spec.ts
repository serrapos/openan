import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolrFilterComponent } from './solr-filter.component';

describe('SolrFilterComponent', () => {
  let component: SolrFilterComponent;
  let fixture: ComponentFixture<SolrFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolrFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolrFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
