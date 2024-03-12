import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTableDynamicComponent } from './material-table-dynamic.component';

describe('MaterialTableDynamicComponent', () => {
  let component: MaterialTableDynamicComponent;
  let fixture: ComponentFixture<MaterialTableDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTableDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTableDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
