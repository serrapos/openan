import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdIconModule, MdSelectModule, MdRadioModule } from '@angular/material';
import { MessagesModule, ButtonModule, DataTableModule, SharedModule, InputTextModule, OrderListModule } from 'primeng/primeng';
import { SolrService } from './services/solr.service';
import { RouterModule } from '@angular/router';
import { LoadingModule } from 'ngx-loading';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Custom Components
import { AppComponent } from './app.component';
import { PageComponent } from './layouts/page/page.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SolrPageComponent } from './features/solr/solr-page/solr-page.component';
import { SolrFilterComponent } from './features/solr/solr-filter/solr-filter.component';
import { SolrResultsComponent } from './features/solr/solr-results/solr-results.component';
import { SolrResultItemComponent } from './features/solr/solr-result-item/solr-result-item.component';
import { ResourceTypeComponent } from './features/resourcetypes/resource-type/resource-type.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    MenuComponent,
    HeaderComponent,
    SolrPageComponent,
    SolrFilterComponent,
    SolrResultsComponent,
    SolrResultItemComponent,
    ResourceTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'solrquery',
        component: SolrPageComponent
      },
      {
        path: 'types',
        component: ResourceTypeComponent
      }
    ]),
    HttpModule,
    NgbModule.forRoot(),
    MessagesModule, //PrimeNG
    ButtonModule,
    DataTableModule,
    SharedModule,
    InputTextModule,
    OrderListModule,
    BrowserAnimationsModule,
    MdButtonModule, //Angular Material
    MdCheckboxModule,
    MdInputModule,
    MdIconModule,
    MdSelectModule,
    MdRadioModule,
    LoadingModule
  ],
  providers: [
    SolrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
