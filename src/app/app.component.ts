import { Component } from '@angular/core';
import { SearchResult } from './models/search-result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';
  searchResults: SearchResult;

  
}
