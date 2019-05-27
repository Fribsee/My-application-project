import { Component, OnInit, Input } from '@angular/core';
import { BooksearchService } from '../booksearch.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
 @Input() goodreadsResults;

  constructor(public booksearchservice: BooksearchService, private sanitizer: DomSanitizer) {
   }
   sanitizedUrl: any;


  ngOnInit() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('Notes://MYSERVER/C1256D3B004057E8');
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
