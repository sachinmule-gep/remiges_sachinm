import { AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Bulletin } from './bulletin';
import { LiveNewsComponent } from './live-news/live-news.component';
import { BulletinService } from './services/bulletin-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ngAssignment';
  cdrStrategy = 'Default';

  currentBulletin:Bulletin = new Bulletin('Current Bulletine', '1985-04-12T23:20:50.52Z');


    //change detection strategy - default
  changeDetectionDefault(){
    this.currentBulletin = new Bulletin('Default Updated Bulletine', '2024-03-01T12:30:00Z');
    if(this.cdrStrategy!=='Default'){
      this.cdrStrategy = 'Default';
    }
  }

  //change detection strategy - onPush
  changeDetectionOnPush(){
    this.currentBulletin = new Bulletin('OnPush Updated Bulletine', '2024-03-01T12:30:00Z');
    if(this.cdrStrategy!=='OnPush'){
      this.cdrStrategy = 'OnPush';
    }
  }


  @ViewChild(LiveNewsComponent) liveNewsComponent!: LiveNewsComponent;
  bulletins:Bulletin[]=[];

  constructor(private bulletinService:BulletinService, private cdr:ChangeDetectorRef){}

  ngOnInit(): void {}
  
  ngAfterViewInit(): void {
    this.bulletinService.getBulletins().subscribe((bulletins)=>{
      this.bulletins = bulletins;
      this.liveNewsComponent.bulletinCycle();

      this.cdr.detectChanges();
    });    
      
  }

}
