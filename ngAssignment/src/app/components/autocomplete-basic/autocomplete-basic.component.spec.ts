import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteBasicComponent } from './autocomplete-basic.component';

describe('AutocompleteBasicComponent', () => {
  let component: AutocompleteBasicComponent;
  let fixture: ComponentFixture<AutocompleteBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
