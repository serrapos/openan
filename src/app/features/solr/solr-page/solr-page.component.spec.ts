import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolrPageComponent } from './solr-page.component';

describe('SolrPageComponent', () => {
  let component: SolrPageComponent;
  let fixture: ComponentFixture<SolrPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolrPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolrPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
