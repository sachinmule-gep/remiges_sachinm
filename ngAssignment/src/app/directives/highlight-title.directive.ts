import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight-title]'
})
export class HighlightTitleDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) { }
   
  private highlight(color:string | null){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color)
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '5px')
  }

  @HostListener('mouseenter') onMouseEnter():void{
    console.log('mouse enter observed')
    this.highlight('yellow');
   }
  
   @HostListener('mouseleave') onMouseLeave():void{
    console.log('mouse enter observed')
    this.highlight(null);
   }
}
