import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { DvdFormComponent } from './dvd-form/dvd-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DvdListComponent,
    DvdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
