import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { AdventureTimeService } from './adventure-time.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	HttpClientModule
  ],
  providers: [AdventureTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
