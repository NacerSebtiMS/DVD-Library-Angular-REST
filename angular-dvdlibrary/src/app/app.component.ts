import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DvdService } from './dvd.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-dvdlibrary';

  dvds = [];

  search = {};

  constructor(public router: Router, private dvdlibrary: DvdService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.dvdlibrary.getAllDvds().subscribe((response: any) => {
      this.dvds = response;
    });
  }

  getSearch(search:JSON){
    this.search = search;
    if(search.category === "title"){
      this.dvds = this.dvdlibrary.getDvdByTitle(search.term);
    } else if(search.category === "year"){
      this.dvds = this.dvdlibrary.getDvdByYear( parseInt(search.term) );
    } else if(search.category === "director"){
      this.dvds = this.dvdlibrary.getDvdByDirector(search.term);
    } else if(search.category === "rating"){
      this.dvds = this.dvdlibrary.getDvdByRating(search.term);
    }

  }

  /*
  getById(id:number){
    this.dvdlibrary.getDvdById(id).subscribe((response: any) => {
      this.selectedDVD = response;
    });
  }
  */

}
