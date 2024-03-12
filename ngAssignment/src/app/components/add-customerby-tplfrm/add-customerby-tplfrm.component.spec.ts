import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerbyTplfrmComponent } from './add-customerby-tplfrm.component';

describe('AddCustomerbyTplfrmComponent', () => {
  let component: AddCustomerbyTplfrmComponent;
  let fixture: ComponentFixture<AddCustomerbyTplfrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCustomerbyTplfrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerbyTplfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
