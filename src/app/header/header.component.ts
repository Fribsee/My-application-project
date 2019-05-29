import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { BooksearchService } from '../booksearch.service';
import { OpenLibraryService } from '../open-library.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  searchTerm: any;
  goodreadsResults: any = [];
  libResults: any = [];
  form = new FormGroup ({
    search: new FormControl(),
  });

  @Output() sendResults = new EventEmitter();
  @Output() sendlibResults = new EventEmitter();



onClick() {
  this.searchTerm = this.form.get('search').value;
  this.goodreadsResults = this.booksearchservice.getBooks(this.searchTerm);
  // this.openlibraryservice.getResults(this.searchTerm).subscribe(data => {console.log('Lib data', data); });
  this.openlibraryservice.getResults(this.searchTerm);
  this.booksearchservice.getBooks(this.searchTerm).subscribe(data => {console.log('goodreads data', data); });
  this.sendResults.emit(this.goodreadsResults);
  this.sendlibResults.emit(this.libResults);
}

constructor(public booksearchservice: BooksearchService, public openlibraryservice: OpenLibraryService) { }


ngOnInit()  {

  }
}
