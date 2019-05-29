import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  // @Input() goodreadsResults;
  @Input() libResults: any;

  constructor() { }

  ngOnInit() {
  }

}
