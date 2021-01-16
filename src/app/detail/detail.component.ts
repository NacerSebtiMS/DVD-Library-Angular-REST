import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { DvdService } from '../dvd.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  dvdID:number;

  dvd={
    "id": "",
    "title": "",
    "releaseYear": "",
    "directorName": "",
    "rating": "",
    "notes": ""
   };

  constructor(public activatedRoute: ActivatedRoute, private dvdlibrary: DvdService) { }

  ngOnInit(): void {
    this.dvdID = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));

    this.getById(this.dvdID);
  }

  getById(id:number){
    this.dvdlibrary.getDvdById(id).subscribe((response: any) => {
      this.dvd = response;
    });
  }

}
