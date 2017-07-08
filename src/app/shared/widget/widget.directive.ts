import { Directive, ElementRef, OnInit } from '@angular/core';
declare var jQuery: any;

@Directive({
  selector: '[widget]'
})

export class WidgetDirective implements OnInit {
  constructor(el: ElementRef) {

  }
  ngOnInit(): void {
  }
}
