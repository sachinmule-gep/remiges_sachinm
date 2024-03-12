import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTableExpandableComponent } from './material-table-expandable.component';

describe('MaterialTableExpandableComponent', () => {
  let component: MaterialTableExpandableComponent;
  let fixture: ComponentFixture<MaterialTableExpandableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTableExpandableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTableExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
