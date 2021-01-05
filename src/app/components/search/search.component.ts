import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  searchOptions: string[] = ["users", "topics"];

  searchGroupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchGroupForm = this.formBuilder.group(
      {
        searchItem: null,
        searchBy: null
      }
    )
  }

  searchGithub() {
    
  }

}
