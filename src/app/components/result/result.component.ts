import { Component, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/search-result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  results: SearchResult
  constructor() { }

  ngOnInit(): void {
  }

}
