import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from 'src/app/models/search-result';
import { ResultService } from 'src/app/services/result.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  constructor(private resultScv: ResultService) { }
  @Input() users: SearchComponent

  ngOnInit(): void {
    this.resultScv.cast.subscribe(result => {
      this.users = result?.items;
    })
  }

  showResult() {
    console.log(this.users)
  }
}
