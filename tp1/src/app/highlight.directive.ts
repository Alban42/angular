import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnChanges {

  @Input('appHighlight') enabled: boolean = true;
  @Input('color') color: string = 'yellow';

  constructor(private currentElement: ElementRef) {
    this.highlight(this.color);
  }

  private highlight(color: string) {
    this.currentElement.nativeElement.style.backgroundColor = color;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.highlight(this.enabled ? this.color : '');
  }
}
