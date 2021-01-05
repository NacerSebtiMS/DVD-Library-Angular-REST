import { Component, OnInit, Input } from '@angular/core';
//import {MatDialog} from '@angular/material/dialog';

import { DvdService } from '../dvd.service';

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DvdListComponent implements OnInit {

  @Input() dvds = [];
  //public dialog: MatDialog, 
  constructor(private dvdlibrary: DvdService) { }

  ngOnInit(): void {
  }

  onDelete(id:number){
    /*
    const dialog = "<mat-dialog-content>Are you sure you want to delete?</mat-dialog-content>"
      + "<mat-dialog-actions>"
      + "<button mat-button mat-dialog-close>Cancel</button>"
      + "<button mat-button [mat-dialog-close]='true'>Delete</button>"
      + "</mat-dialog-actions>"
    const dialogRef = this.dialog.open(dialog);

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'true'){
        this.dvdlibrary.deleteDvd(id)
        .subscribe(
          response => console.log(response),
          err => console.log(err)
         );
      }
    });*/

    if(confirm("Are you sure to delete DVD?")){
      this.dvdlibrary.deleteDvd(id)
        .subscribe(
          response => alert("DVD deleted!"),
        err => alert("Error: "+err)
         );
    }
  }
}
