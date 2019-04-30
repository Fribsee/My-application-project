import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BestsellersService {

  private url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AuVsSQoz49SlbsT4jA4GsALfWWhznQ4e';

  constructor(private http: HttpClient) { }

  getBestsellers() {
    return this.http.get(this.url);
  }
}

