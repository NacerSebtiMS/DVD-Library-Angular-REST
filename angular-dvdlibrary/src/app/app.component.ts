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

  dvds=[];

  search = {};

  constructor(public router: Router, private dvdlibrary: DvdService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.dvds = [];
    this.dvdlibrary.getAllDvds().subscribe((response: any) => {
      if(Array.isArray(response)){
          this.dvds = response;
        } else {
          this.dvds.push(response);
        } 
    });
  }

  getSearch(search:any){
    this.dvds = [];
    if(search.category === "title"){
      this.dvdlibrary.getDvdByTitle(search.term).subscribe((response:any) => {
        if(Array.isArray(response)){
          this.dvds = response;
        } else {
          this.dvds.push(response);
        }      
       });
    } else if(search.category === "year"){
      this.dvdlibrary.getDvdByYear(search.term).subscribe((response:any) => {
        if(Array.isArray(response)){
          this.dvds = response;
        } else {
          this.dvds.push(response);
        } 
       });
    } else if(search.category === "director"){
      this.dvdlibrary.getDvdByDirector(search.term).subscribe((response:any) => {
        if(Array.isArray(response)){
          this.dvds = response;
        } else {
          this.dvds.push(response);
        } 
       });
    } else if(search.category === "rating"){
      this.dvdlibrary.getDvdByRating(search.term).subscribe((response:any) => {
        if(Array.isArray(response)){
          this.dvds = response;
        } else {
          this.dvds.push(response);
        } 
       });
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
