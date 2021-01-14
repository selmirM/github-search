import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { SearchResult } from "../models/search-result"

@Injectable({
  providedIn: 'root'
})
export class ResultService {
private result = new BehaviorSubject<SearchResult>({total_count: null, incomplete_results: false, items: [] });
cast = this.result.asObservable();

  constructor() { }

  updateResult(newResult) {
    this.result.next(newResult);
  }
}
