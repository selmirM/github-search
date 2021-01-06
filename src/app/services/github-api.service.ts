import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getGit({searchItem, searchBy}) {
    return this.http.get(`https://api.github.com/search/${searchBy}?q=${searchItem}`);
  }
}
