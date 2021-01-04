import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @ViewChild('f', { static: false }) signupForm: NgForm;

  @Output() selectedSearch = new EventEmitter<JSON>();

  defaultCategory = "default";
  defaultTerm = "Search Term";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const out = {
      "category": this.signupForm.value.category,
      "term": this.signupForm.value.term
    };
    this.selectedSearch.emit(out);
  }

}
