import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DvdListComponent } from './dvd-list/dvd-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EditFromComponent } from './edit-from/edit-from.component';
import { CreateFromComponent } from './create-from/create-from.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DvdListComponent,
    SearchBarComponent,
    EditFromComponent,
    CreateFromComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
