import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSortTableComponent } from './material-sort-table.component';

describe('MaterialSortTableComponent', () => {
  let component: MaterialSortTableComponent;
  let fixture: ComponentFixture<MaterialSortTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSortTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSortTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
