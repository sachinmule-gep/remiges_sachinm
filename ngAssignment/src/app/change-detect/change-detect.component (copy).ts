import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Bulletin } from '../bulletin';

@Component({
  selector: 'app-change-detect',
  templateUrl: './change-detect.component.html',
  styleUrls: ['./change-detect.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChangeDetectComponent implements OnInit {

  bulletin_default : Bulletin;
  bulletin_onpush : Bulletin;
  
  constructor() {
    this.bulletin_default = new Bulletin('Title text', new Date());
    this.bulletin_onpush = new Bulletin('Title text', new Date());
  }
  
  ngOnInit(): void {}

  changeDetectionDefault(){
    console.log('executing component')
    this.bulletin_default.news_title += 'Updated';
  }

  changeDetectionOnPush(){
    console.log('executing component')
    this.bulletin_onpush.news_title += 'Updated'
  }

}
