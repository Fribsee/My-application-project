import { Injectable } from '@angular/core';
import { MyBooks } from './mybooks.model';



@Injectable({
  providedIn: 'root'
})
export class MybooksService {
  toReadList: MyBooks[] = [];
  currentReadList: MyBooks[] = [];
  haveReadList: MyBooks[] = [];


  constructor() { }
}
