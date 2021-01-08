import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/search-result';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor() { }
  @Input() users: SearchComponent
  ngOnInit(): void {
  }
}
