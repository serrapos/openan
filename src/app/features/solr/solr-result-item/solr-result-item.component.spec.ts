import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolrResultItemComponent } from './solr-result-item.component';

describe('SolrResultItemComponent', () => {
  let component: SolrResultItemComponent;
  let fixture: ComponentFixture<SolrResultItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolrResultItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolrResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
