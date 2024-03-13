import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSelectedValueComponent } from './autocomplete-selected-value.component';

describe('AutocompleteSelectedValueComponent', () => {
  let component: AutocompleteSelectedValueComponent;
  let fixture: ComponentFixture<AutocompleteSelectedValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteSelectedValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSelectedValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
