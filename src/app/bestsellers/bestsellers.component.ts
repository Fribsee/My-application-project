import { Component, OnInit } from '@angular/core';
import { BestSellersService } from '../bestsellers.service';
import { MybooksService } from '../mybooks.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestSellersComponent implements OnInit {
  public bestsellers: any = [];

  addtoRead(title: any) {
    this.mybooksService.toReadList.push(title);
    alert(this.mybooksService.toReadList);

  }

  constructor(private bestSellersService: BestSellersService, private mybooksService: MybooksService) {

  }

  ngOnInit() {
    this.bestSellersService.getBestsellers()
    .subscribe(data => this.bestsellers = data);
  }

}
