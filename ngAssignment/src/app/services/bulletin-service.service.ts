import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class BulletinService {
  constructor() { }
  getBulletins(): Observable<Bulletin[]>{
    const bulletins:Bulletin[]= [
      { news_title: 'Bulletin 1 - title text word count more than 20, Bulletin 1 - title text word count more than 20, Bulletin 1 - title text word count more than 20, Bulletin 1 - title text word count more than 20 ', news_date: '2022-03-01T12:00:00Z' },
      { news_title: 'Bulletin 2', news_date: '2022-03-02T14:30:00Z' },
      { news_title: 'Bulletin 3 - title text word count more than 20, Bulletin 1 - title text word count more than 20, Bulletin 1 - title text word count more than 20, Bulletin 1 - title text word count more than 20 ', news_date: '2022-03-01T12:00:00Z' },
      { news_title: 'Bulletin 4', news_date: '2022-03-02T14:30:00Z' },
      { news_title: 'Bulletin 5 - title text word count more than 20, Bulletin 1 - title text word count more than 20, Bulletin 1 - title text word count more than 20, Bulletin 1 - title text word count more than 20 ', news_date: '2022-03-01T12:00:00Z' },
      { news_title: 'Bulletin 6', news_date: '2022-03-02T14:30:00Z' },
      { news_title: 'Bulletin 7', news_date: '2022-03-01T12:00:00Z' },
      { news_title: 'Bulletin 8', news_date: '2022-03-02T14:30:00Z' },
      { news_title: 'Bulletin 9', news_date: '2022-03-01T12:00:00Z' },
      { news_title: 'Bulletin 10', news_date: '2022-03-02T14:30:00Z' },
    ];
    return of(bulletins)
  }
}

export interface Bulletin {
  news_title: string;
  news_date: string; // Should be in RFC 3339 format as mentioned in the task
};

