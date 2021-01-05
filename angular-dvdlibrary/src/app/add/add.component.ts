import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DvdService } from '../dvd.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title = 'Create a DvD';

  @ViewChild('f', { static: false }) signupForm: NgForm;

  defaultRating = 'G';

  yearPattern = '[0-9]{4}';

  response;

  year:number;

  dvd={
    "id": 0,
    "title": "",
    "releaseYear": 0,
    "directorName": "",
    "rating": "",
    "notes": ""
   };

  constructor(private dvdlibrary: DvdService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.dvd.title = this.signupForm.value.dvdData.title;
    this.dvd.releaseYear = parseInt(this.signupForm.value.dvdData.year);
    this.dvd.directorName = this.signupForm.value.dvdData.director;
    this.dvd.rating = this.signupForm.value.dvdData.rating;
    this.dvd.notes = this.signupForm.value.dvdData.notes;

    this.dvdlibrary.createDvd(this.dvd.title, this.dvd.releaseYear, this.dvd.directorName, this.dvd.rating, this.dvd.notes)
      .subscribe(
        response => alert("DVD added!"),
        err => alert("Error: "+err)
       );
  }

  valid(expr){
    //return expr.match(this.yearPattern);
    return new RegExp(this.yearPattern).test(expr);
  }

}
