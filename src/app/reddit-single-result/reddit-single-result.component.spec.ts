import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditSingleResultComponent } from './reddit-single-result.component';

describe('RedditSingleResultComponent', () => {
  let component: RedditSingleResultComponent;
  let fixture: ComponentFixture<RedditSingleResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditSingleResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditSingleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
