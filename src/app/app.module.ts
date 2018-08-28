import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableService } from './service/table.service';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
	HttpClientModule,
	AppRoutingModule,
	FormsModule
  ],
  providers: [
	TableService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
