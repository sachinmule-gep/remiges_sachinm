import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDateComponent } from './material-date.component';

describe('MaterialDateComponent', () => {
  let component: MaterialDateComponent;
  let fixture: ComponentFixture<MaterialDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
