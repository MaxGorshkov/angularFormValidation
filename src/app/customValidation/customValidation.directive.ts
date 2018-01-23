import { Directive, ElementRef, Renderer2, ContentChildren, AfterContentInit  } from '@angular/core';

@Directive({ selector: '[appCustomValidation]' })
export class AppCustomValidationDirective implements AfterContentInit  {
    @ContentChildren('model') inputs;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngAfterContentInit () {
        console.log(this.el);
        const _this = this;
        setInterval(() => {
            _this.inputs._results.forEach(element => {
                if (element.invalid) {
                    _this.renderer.addClass((<any>document.getElementsByName(element.name)[0]), 'custom-theme-invalid');
                } else {
                    _this.renderer.removeClass((<any>document.getElementsByName(element.name)[0]), 'custom-theme-invalid');
                }
            });
        }, 1000);
    }
}
