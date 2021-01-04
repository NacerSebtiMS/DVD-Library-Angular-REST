import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'

import { DvdService } from '../dvd.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title = 'Update a DvD';

  @ViewChild('f', { static: false }) signupForm: NgForm;

  yearPattern = '[0-9]{4}';

  dvd={
    "id": 0,
    "title": "",
    "releaseYear": 0,
    "directorName": "",
    "rating": "",
    "notes": ""
   };

  constructor(public activatedRoute: ActivatedRoute, private dvdlibrary: DvdService) { }

  ngOnInit(): void {
    this.getById( parseInt(this.activatedRoute.snapshot.paramMap.get("id")) );
  }

  onSubmit() {

    this.dvd.title = this.signupForm.value.dvdData.title;
    this.dvd.releaseYear = parseInt(this.signupForm.value.dvdData.year);
    this.dvd.directorName = this.signupForm.value.dvdData.director;
    this.dvd.rating = this.signupForm.value.dvdData.rating;
    this.dvd.notes = this.signupForm.value.dvdData.notes;

    this.dvdlibrary.updateDvd(this.dvd.id, this.dvd.title, this.dvd.releaseYear, this.dvd.directorName, this.dvd.rating, this.dvd.notes)
      .subscribe(
        response => console.log(response),
        err => console.log(err)
       );
  }

  getById(id:number){
    this.dvdlibrary.getDvdById(id).subscribe((response: any) => {
      this.dvd = response;
    });
  }

}
