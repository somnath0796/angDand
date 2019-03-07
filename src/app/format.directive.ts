import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[format]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})

export class FormatDirective {
    //Injecting the ElementRef and Renderer into the Directive.
    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    onFocus() {
        //setElementStyle(element to be formatted, 'property', 'value')
        this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', 'bold');
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
    }

    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', 'normal');
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
    }
}