import { Component, OnInit } from '@angular/core';
import { BestSellersService } from '../bestsellers.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestSellersComponent implements OnInit {
  public bestsellers: any = [];
  constructor(private bestSellersService: BestSellersService) { }

  ngOnInit() {
    this.bestSellersService.getBestsellers()
    .subscribe(data => this.bestsellers = data);
  }

}
