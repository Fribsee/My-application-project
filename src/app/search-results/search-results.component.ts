import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksearchService } from '../booksearch.service';
import { MybooksService } from '../mybooks.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MyBooks } from '../mybooks.model';




@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(public booksearchservice: BooksearchService, private sanitizer: DomSanitizer, private mybooksService: MybooksService) {
   }
  @Input() goodreadsResults: any;
   sanitizedUrl: any;


  addtoRead(title: string, author: string, img: string, url: string) {
  this.mybooksService.toReadList.push(new MyBooks(title, author, img, url));
}
  addCurrent(title: string, author: string, img: string, url: string) {
  this.mybooksService.currentReadList.push(new MyBooks(title, author, img, url));
}
  addRead(title: string, author: string, img: string, url: string) {
  this.mybooksService.haveReadList.push(new MyBooks(title, author, img, url));
}


  ngOnInit() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('Notes://MYSERVER/C1256D3B004057E8');
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
