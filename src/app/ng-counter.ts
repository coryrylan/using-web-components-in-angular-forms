import { Directive, OnInit, forwardRef, HostBinding, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: 'x-counter',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterDirective),
      multi: true
    }
  ]
})
export class CounterDirective implements ControlValueAccessor  {
  onChange: any = () => {};
  onTouched: any = () => {};

  private _value: number;

  get value() {
    return this._value;
  }

  set value(val) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(this._value);
      this.onTouched();
      this.elementRef.nativeElement.value = val;
    }
  }

  constructor(private elementRef: ElementRef) { }

  @HostListener('valueChange', ['$event.detail'])
  listenForValueChange(value) {
    this.value = value;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
