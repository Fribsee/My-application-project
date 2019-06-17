import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { BooksearchService } from '../booksearch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  searchTerm: any;
  goodreadsResults: any = [];
  defaultResults: any = [];
  form = new FormGroup ({
    search: new FormControl(),
  });

  @Output() sendResults = new EventEmitter();



onClick() {
  this.searchTerm = this.form.get('search').value;
  this.goodreadsResults = this.booksearchservice.getBooks(this.searchTerm);
  this.booksearchservice.getBooks(this.searchTerm).subscribe(data => {console.log('goodreads data', data); });
  this.sendResults.emit(this.goodreadsResults);
}

constructor(public booksearchservice: BooksearchService) { }


ngOnInit()  {

  }
}
