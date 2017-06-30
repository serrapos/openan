import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdIconModule, MdSelectModule, MdRadioModule } from '@angular/material';
import { MessagesModule, ButtonModule, DataTableModule, SharedModule, InputTextModule, OrderListModule } from 'primeng/primeng';
import { SolrService } from './services/solr.service';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PageComponent } from './layouts/page/page.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SolrPageComponent } from './features/solr/solr-page/solr-page.component';
import { SolrFilterComponent } from './features/solr/solr-filter/solr-filter.component';
import { SolrResultsComponent } from './features/solr/solr-results/solr-results.component';
import { SolrResultItemComponent } from './features/solr/solr-result-item/solr-result-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    MenuComponent,
    HeaderComponent,
    SolrPageComponent,
    SolrFilterComponent,
    SolrResultsComponent,
    SolrResultItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
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
    MdRadioModule
  ],
  providers: [
    SolrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
