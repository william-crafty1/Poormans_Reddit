import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  getRedditInfo(): Observable<any> {
    return this.http.get('https://www.reddit.com/r/aww/.json');
  }
}
