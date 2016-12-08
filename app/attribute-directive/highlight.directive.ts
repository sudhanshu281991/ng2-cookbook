import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective {
    private _defaultColor = 'red';
    constructor(private el: ElementRef) { }
    
    @Input() set defaultColor(colorName: string) {
        this._defaultColor = colorName || this._defaultColor
    }

    @Input('myHighlight') highlightColor: string;


    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
}