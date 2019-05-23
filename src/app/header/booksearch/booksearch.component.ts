import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { BooksearchService } from '../../booksearch.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {
  goodreadsData: any;
  results: Observable<any>;
  form = new FormGroup ({
    search: new FormControl(),
  });

  onClick() {
  //  this.booksearchservice.getBooks(this.form.get('search').value);
  this.results = this.booksearchservice.getAuthors(this.goodreadsData);
  }
  constructor(public booksearchservice: BooksearchService) { }

  ngOnInit()  {
    this.goodreadsData = this.form.get('search').valueChanges;

    }
  }

