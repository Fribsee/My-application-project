import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {

  form = new FormGroup ({
    search: new FormControl(),
  });

  getSearch() {
    return this.form.get('search').value;
  }

  onClick() {
    console.log(this.getSearch());
  }

  constructor() { }

  ngOnInit() {
  }

}
