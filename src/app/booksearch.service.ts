import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksearchService {

  goodreadsUrl = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=fYhL0nwGO7vKIem3TCJ5g&q=';

    getBooks(searchTerm: string) {
      return this.http.get(this.goodreadsUrl + searchTerm);
    }


  constructor(private http: HttpClient) {
  }

  // getBooks(searchTerm: string) {
  //   const goodreadsData =
  //     this.http
  //       .get(this.goodreadsUrl + searchTerm)
  //       .subscribe(response => {
  //       this.getAuthors(response);
  //       console.log(goodreadsData);
  //     });
  // }

}


