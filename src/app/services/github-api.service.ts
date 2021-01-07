import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { SearchResult } from '../models/search-result';
@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getGit({searchItem, searchBy}) : Observable<SearchResult> {
    return this.http.get<SearchResult>(`https://api.github.com/search/${searchBy}?q=${searchItem}`);
  }
}
