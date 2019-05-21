import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BooksearchService } from 'src/app/booksearch.service';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {
  public bookSearch: any;

  form = new FormGroup ({
    search: new FormControl(),
  });

  onClick() {
   this.booksearchservice.getBooks(this.bookSearch);
   alert(this.bookSearch);
  }
  constructor(public booksearchservice: BooksearchService) { }

  ngOnInit()  {

    }
  }

