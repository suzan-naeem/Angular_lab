import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
//dependancy injection
  constructor(el : ElementRef) { 
    el.nativeElement.classList.add('alert', 'alert-warning');
  }

}
