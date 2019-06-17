import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksearchService } from '../booksearch.service';
import { MybooksService } from '../mybooks.service';
import { DomSanitizer } from '@angular/platform-browser';




@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() goodreadsResults: any;
   sanitizedUrl: any;

   addtoRead(title: any) {
    this.mybooksService.toReadList.push(title);
    alert(this.mybooksService.toReadList);
  }

  constructor(public booksearchservice: BooksearchService, private sanitizer: DomSanitizer, private mybooksService: MybooksService) {
   }

  ngOnInit() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('Notes://MYSERVER/C1256D3B004057E8');
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
