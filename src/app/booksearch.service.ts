import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksearchService {

  userSearch: any;
  goodreadsData: any;
  goodreadsUrl = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=fYhL0nwGO7vKIem3TCJ5g&q=';


  xmlToJson(xml) {
    let obj = {};
    if (xml.nodeType === 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
        obj['@attributes'] = {};
        for (let j = 0; j < xml.attributes.length; j++) {
            const attribute = xml.attributes.item(j);
            obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
          }
        }
      } else if (xml.nodeType === 3) { // text
        obj = xml.nodeValue;
      }
    }


  constructor(private http: HttpClient) {
    this.http
    .get(this.goodreadsUrl + this.userSearch)
    .subscribe(response => this.goodreadsData = this.xmlToJson(response));
  }
  // getSearchResults() {
  //       return this.http.get(this.searchUrl);
  //     }

  // getBooks(searchTerm: string) {
  //   let goodreadsUrl = 'https://thing/?s=';
  //   http
  //     .get(goodreadsUrl + searchTerm)
  //     .subscribe(response => {
  //       this.xmlToJson(response)
  //     });
  // }

  // getBook(searchTerm: string) {

  // }

}


