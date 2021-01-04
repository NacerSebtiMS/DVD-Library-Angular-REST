import { Component, OnInit } from '@angular/core';
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

  constructor(public router: Router, private dvdlibrary: DvdService ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.dvdlibrary.getAllDvds().subscribe((response: any) => {
      this.dvds = response;
    });
  }
  /*
  getById(id:number){
    this.dvdlibrary.getDvdById(id).subscribe((response: any) => {
      this.selectedDVD = response;
    });
  }
  */
}
