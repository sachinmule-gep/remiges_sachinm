import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.sass']
})
export class CalculatorComponent implements OnInit {

  results = this.el.nativeElement.querySelectorAll('#results');
  input = this.el.nativeElement.querySelector('#input');
  constructor(private el:ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  appendCharacter(character: string): void { 
    console.log(character);
    this.results.value += parseInt(character, 10);
  }

  clearResult():void{
    this.results.value = '';
    console.log(typeof(this.results.value) );
  };
  calculateResult(): void{
    try {
      this.results.value = eval(this.results.value);
      console.log(this.results.value);
    } catch (error) {
      this.results.value = 'Error';
    }
  };

}
