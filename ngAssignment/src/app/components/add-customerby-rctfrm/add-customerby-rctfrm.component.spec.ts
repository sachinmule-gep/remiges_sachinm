import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerbyRctfrmComponent } from './add-customerby-rctfrm.component';

describe('AddCustomerbyRctfrmComponent', () => {
  let component: AddCustomerbyRctfrmComponent;
  let fixture: ComponentFixture<AddCustomerbyRctfrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerbyRctfrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerbyRctfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
