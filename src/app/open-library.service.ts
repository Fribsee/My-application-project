import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {

results: any = [];
  openLibUrl = 'http://openlibrary.org/search.json?q=';

  constructor(private http: HttpClient) { }

  getResults(searchTerm: string) {
    return this.http.get(this.openLibUrl + searchTerm).subscribe(response => {
      this.results = response; });
  }
}
