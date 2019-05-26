import { Component, OnInit, Input } from '@angular/core';
import { BooksearchService } from '../booksearch.service';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
 @Input() goodreadsResults: Event;

  constructor(public booksearchservice: BooksearchService) {
   }


  ngOnInit() {
  }

}
