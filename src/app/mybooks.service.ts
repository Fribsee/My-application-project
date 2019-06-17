import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MybooksService {
  toReadList: any = [];

  addtoRead(title: any) {
    this.toReadList.push(title);
    alert(this.toReadList);

  }

  constructor() { }
}
