import { Injectable } from '@angular/core';
import { MyBooks } from './mybooks.model';



@Injectable({
  providedIn: 'root'
})
export class MybooksService {
  toReadList: MyBooks[] = [];

  // addtoRead(title: string, author: string, url: string, img: string) {
  //   this.toReadList.push(new MyBooks(title, author, img, url));
  //   alert(this.toReadList);
  // }

  constructor() { }
}
