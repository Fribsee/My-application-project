import { Component, OnInit } from '@angular/core';
import { BooksearchService } from '../booksearch.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor(public booksearchservice: BooksearchService) {
  }


  ngOnInit() {
  }

}
