import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';
import { Main } from '../models/main';
import { Children } from '../models/children';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.css']
})
export class RedditListComponent implements OnInit {
  data: Main;
  children: Children[];
  inputValue: string;

  constructor(private redditService: RedditService) { }

  ngOnInit(): void {
    this.inputValue = 'aww';
    this.redditService.getRedditInfo(this.inputValue).subscribe((response: Main) => {
      this.children = response.data.children;
    });
  }

  getRedditList() {
    this.redditService.getRedditInfo(this.inputValue).subscribe((response: Main) => {
      this.children = response.data.children;
      console.log(this.children);
    });
  }

}
