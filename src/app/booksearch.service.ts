import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';



@Injectable({
  providedIn: 'root'
})
export class BooksearchService {

  goodreadsUrl = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=fYhL0nwGO7vKIem3TCJ5g&q=';
  // goodreadsReviewUrl = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/book/show/50.xml?key=fYhL0nwGO7vKIem3TCJ5g';
  // the 50 is the book ID.  Need to use switchmap to be able to insert the book id from the first call LifecycleHooksChildrenFirst.
  goodreadsData: any;
    getBooks(searchTerm: string) {
      return this.http.get(this.goodreadsUrl + searchTerm);
    }


  constructor(private http: HttpClient) {
  }


}




