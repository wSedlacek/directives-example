import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[exampleHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  public backgroundColor = '';

  #color = 'yellow';

  @Output()
  public readonly colorChanged = new EventEmitter<string>();

  @Input('exampleHighlight')
  public set color(value: string) {
    if (value !== '') {
      this.#color = value;
    }
  }

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this.highlight(this.#color);
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this.highlight('');
  }

  private highlight(color: string) {
    this.colorChanged.next(color);
    this.backgroundColor = color;
  }
}
