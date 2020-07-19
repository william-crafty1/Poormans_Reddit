import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../models/child';


@Component({
  selector: 'app-reddit-single-result',
  templateUrl: './reddit-single-result.component.html',
  styleUrls: ['./reddit-single-result.component.css']
})
export class RedditSingleResultComponent implements OnInit {
  
  @Input() result: Child;
  count = 0;

  constructor() { }

  ngOnInit() {
    this.result.permalink = `https://www.reddit.com${this.result.permalink}`
  }

  upVote(){
    this.count++;
  }

  downVote(){
    this.count--;
  }

}
