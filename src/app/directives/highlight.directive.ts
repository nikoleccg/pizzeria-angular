import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = 'black'
    this.element.nativeElement.style.color = 'white'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = ''
    this.element.nativeElement.style.color = '#b41e04'
  }

  constructor(
    private element: ElementRef
  ) { }

}
