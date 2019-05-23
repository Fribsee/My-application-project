import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const parseString = require('xml2js').parseString;


@Injectable({
  providedIn: 'root'
})
export class BooksearchService {

  goodreadsUrl = 'https://mighty-beach-cg-cors-48446.herokuapp.com/https://www.goodreads.com/search/index.xml?key=fYhL0nwGO7vKIem3TCJ5g&q=';

  // xmlToJson(xml) {
  //   let obj = {};
  //   if (xml.nodeType === 1) { // element
  //       // do attributes
  //       if (xml.attributes.length > 0) {
  //       obj['@attributes'] = {};
  //       for (let j = 0; j < xml.attributes.length; j++) {
  //           const attribute = xml.attributes.item(j);
  //           obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
  //         }
  //       }
  //     } else if (xml.nodeType === 3) { // text
  //       obj = xml.nodeValue;
  //     }
  //   }

    getAuthors(searchTerm: string) {
     return this.http.get(this.goodreadsUrl + searchTerm, { responseType: 'text' }).pipe(
        map(res => {
          let authors;
          parseString(res, (err, result) => {
            if (err) {
              console.error('There was an error getting authors', err);
            }
            console.log('authors', result);
            authors = result;
          });

          return authors;
        })
      );
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


