import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SolrQueryComponent } from './views/components/solr-query/solr-query.component';
import { SolrQueryService } from './services/solr-query.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    SolrQueryComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [SolrQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
