import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolrQueryComponent } from './solr-query.component';

describe('SolrQueryComponent', () => {
  let component: SolrQueryComponent;
  let fixture: ComponentFixture<SolrQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolrQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolrQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
