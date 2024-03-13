import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnInit,
} from '@angular/core';
import { Bulletin } from '../bulletin';

@Component({
  selector: 'app-change-detect',
  templateUrl: './change-detect.component.html',
  styleUrls: ['./change-detect.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush, // change detection strategy declaration
})
export class ChangeDetectComponent implements OnInit, DoCheck {
  @Input() bulletin!: Bulletin; // input declaration

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  changeDetectionDefault() {
    console.log('Change detection strategy default');
    this.cdr.detectChanges();
  }

  changeDetectionOnPush() {
    console.log('Change detection strategy onpush');
    this.cdr.detectChanges();
  }

  // Detect and act upon changes that Angular can't or won't detect on its own.
  ngDoCheck(): void {
    this.changeDetectionDefault();
    this.changeDetectionOnPush();
  }
}
