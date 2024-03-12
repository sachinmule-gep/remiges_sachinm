import { Component, OnInit, Input } from '@angular/core';

export interface Bulletin {
  news_title: string;
  news_date: string; // Should be in RFC 3339 format as mentioned in the task
}

@Component({
  selector: 'app-live-news',
  templateUrl: './live-news.component.html',
  styleUrls: ['./live-news.component.sass']
})
export class LiveNewsComponent implements OnInit {

  @Input() bulletin : Bulletin[]=[]; // input declaration
  currentBulletin !: Bulletin ;
  

  constructor() { }

  ngOnInit(): void {
    this.bulletinCycle();
  }

  bulletinCycle(){
    let index=0;
    setInterval(()=>{
      this.currentBulletin = this.bulletin[index];
      index = (index + 1) % this.bulletin.length;
    },5000);
  }

}
