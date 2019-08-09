import { Component, OnInit } from '@angular/core';
import { MybooksService } from '../mybooks.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {
  toRead = this.mybooksService.readList;


  constructor(private mybooksService: MybooksService) {

  }

  ngOnInit() {
  }
}
