import { Component, OnInit } from '@angular/core';
import { BestSellersService } from '../bestsellers.service';
import { MybooksService } from '../mybooks.service';
import { MyBooks } from '../mybooks.model';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestSellersComponent implements OnInit {
  public bestsellers: any = [];

    addtoList(title: string, author: string, img: string, url: string, list: string) {
    this.mybooksService.toReadList.push(new MyBooks(title, author, img, url, list));
  }
  //   addCurrent(title: string, author: string, img: string, url: string, list: string) {
  //   this.mybooksService.currentReadList.push(new MyBooks(title, author, img, url, list));
  // }
  //   addRead(title: string, author: string, img: string, url: string, list: string) {
  //   this.mybooksService.haveReadList.push(new MyBooks(title, author, img, url, list));
  // }

  constructor(private bestSellersService: BestSellersService, private mybooksService: MybooksService) {

  }

  ngOnInit() {
    this.bestSellersService.getBestsellers()
    .subscribe(data => this.bestsellers = data);
  }

}
