import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass'],
})
export class CalculatorComponent implements OnInit {
  results: string = '';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  appendCharacter(character: string): void {
    console.log(character);
    this.results += character;
  }

  clearResult(): void {
    this.results = '';
    console.log(typeof this.results);
  }
  calculateResult(): void {
    try {
      this.results = eval(this.results);
      console.log(this.results);
    } catch (error) {
      this.results = 'Error';
    }
  }
}
