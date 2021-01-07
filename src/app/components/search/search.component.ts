import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchResult } from 'src/app/models/search-result';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Output() searchResult = new EventEmitter<SearchResult>();

  searchOptions: string[] = ["users", "topics"];

  searchGroupForm: FormGroup;
  constructor(private githubApiScv: GithubApiService ,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchGroupForm = this.formBuilder.group(
      {
        searchItem: null,
        searchBy: null
      }
    )
  }

  searchGithub() {
      this.githubApiScv.getGit(this.searchGroupForm.value)
      .subscribe(res => {
        this.searchResult.emit(res);
      });
  }

}
