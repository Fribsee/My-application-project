import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksearchService {
  userSearch: any;
  searchUrl: any;



 getBook() {
  this.searchUrl = 'https://www.goodreads.com/search/index.xml?key=fYhL0nwGO7vKIem3TCJ5g&q=' + this.userSearch;
 }


  constructor() { }
}
