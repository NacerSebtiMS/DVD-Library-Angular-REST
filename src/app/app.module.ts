import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { DvdFormComponent } from './dvd-form/dvd-form.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DvdListComponent,
    DvdFormComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
