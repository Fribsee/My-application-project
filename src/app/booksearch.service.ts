import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksearchService {

  userSearch: any;
  searchUrl: any;




 getBook() {
  this.searchUrl = 'https://www.goodreads.com/search/index.xml?key=fYhL0nwGO7vKIem3TCJ5g&q=' + this.userSearch;
 }
 
//  https://www.googleapis.com/books/v1/volumes?q=piglets&callback=handleResponse

  constructor(private http: HttpClient) {}

  getSearchResults() {
    return this.http.get(this.searchUrl);

  }
}

