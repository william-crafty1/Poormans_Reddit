import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RedditListComponent } from './reddit-list/reddit-list.component';
import { RedditSingleResultComponent } from './reddit-single-result/reddit-single-result.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditListComponent,
    RedditSingleResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
