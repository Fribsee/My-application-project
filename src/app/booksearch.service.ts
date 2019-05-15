import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BooksearchService {

  userSearch: any;
  searchUrl: any;
  googSearchUrl: any;
  amazonUrl: any;

  getBook() {
    this.searchUrl = 'https://www.goodreads.com/search/index.xml?key=fYhL0nwGO7vKIem3TCJ5g&q=' + this.userSearch;
    this.amazonUrl = 'https://www.amazon.com/s?k=' + this.userSearch;
    }
  getBooks() {
    this.googSearchUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + this.userSearch + '&callback=handleResponse';
  }
    constructor(private http: HttpClient) { }
      getSearchResults() {
        return this.http.get(this.searchUrl);
      }

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


}
