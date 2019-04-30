import { Component, OnInit } from '@angular/core';
import { BestsellersService } from '../bestsellers.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  public bestsellers: any = [];
  constructor(private bestsellersService: BestsellersService) { }

  ngOnInit() {
    this.bestsellersService.getBestsellers()
    .subscribe(data => this.bestsellers = data);
  }

}
