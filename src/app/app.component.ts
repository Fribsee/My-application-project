import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Project';
  public goodreadsResults;
  public libResults;

  resultsSent(event: Event) {
    this.goodreadsResults = event;
  }

  searchSent(event: Event) {
    this.libResults = event;
  }
}
