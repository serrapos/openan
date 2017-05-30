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

@NgModule({
  declarations: [
    AppComponent
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
