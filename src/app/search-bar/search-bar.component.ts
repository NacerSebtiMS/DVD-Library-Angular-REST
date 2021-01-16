import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @ViewChild('f', { static: false }) signupForm: NgForm;

  @Output() selectedSearch = new EventEmitter<Object>();

  defaultCategory = "default";
  defaultTerm = "Search Term";

  displayCategory = false;
  displayTerm = false;

  out = {
    "category": "",
    "term": ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.displayCategory = false;
    if(this.signupForm.value.category === "default"){
      this.displayCategory = true;
    } else {
      this.out = {
        "category": this.signupForm.value.category,
        "term": this.signupForm.value.term
      };
      this.selectedSearch.emit(this.out);
    }
  }

}
