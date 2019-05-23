import { Component, OnInit } from '@angular/core';
import { BooksearchService } from '../booksearch.service';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
public bookResults: any = [];

  constructor(public booksearchservice: BooksearchService) {
   }


  ngOnInit() {
  }
}
