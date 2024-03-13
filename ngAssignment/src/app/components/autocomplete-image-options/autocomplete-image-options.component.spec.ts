import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteImageOptionsComponent } from './autocomplete-image-options.component';

describe('AutocompleteImageOptionsComponent', () => {
  let component: AutocompleteImageOptionsComponent;
  let fixture: ComponentFixture<AutocompleteImageOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteImageOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteImageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
