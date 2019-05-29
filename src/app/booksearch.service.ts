import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BooksearchService {

  goodreadsUrl = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=fYhL0nwGO7vKIem3TCJ5g&q=';
  goodreadsData: any;
    getBooks(searchTerm: string) {
      return this.http.get(this.goodreadsUrl + searchTerm);
    }


  constructor(private http: HttpClient) {
  }


}




