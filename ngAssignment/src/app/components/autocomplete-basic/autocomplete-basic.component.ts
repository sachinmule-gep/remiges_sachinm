import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-basic',
  templateUrl: './autocomplete-basic.component.html',
  styleUrls: ['./autocomplete-basic.component.sass'],
})
export class AutocompleteBasicComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() {}

  ngOnInit(): void {}
}
