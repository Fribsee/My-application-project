import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BooksearchService } from 'src/app/booksearch.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {

  form = new FormGroup ({
    search: new FormControl(),
  });

  onClick() {
   this.booksearchservice.userSearch = this.form.get('search').value;
   this.booksearchservice.getBook();
  }
  constructor(private booksearchservice: BooksearchService) { }

  ngOnInit() {
  }

}
