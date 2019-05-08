import { Component, OnInit } from '@angular/core';
import { BooksearchService } from 'src/app/booksearch.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {



  constructor(private booksearchservice: BooksearchService) {  }


  ngOnInit() {

  }

}
