import { Component, OnInit, Input } from '@angular/core';
import { OpenLibraryService } from '../open-library.service';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  libResults = this.openlibraryservice.results;


  constructor(private openlibraryservice: OpenLibraryService) { }

  ngOnInit() {
  }

}
