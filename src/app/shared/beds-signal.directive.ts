import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[appBedsSignal]",
})
export class BedsSignalDirective implements OnInit {
  @Input() bed: Number;
  @Input() key: Boolean;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.key) {
      if (Number(this.bed) > 0) {
        this.el.nativeElement.style.backgroundColor = "#357a38";
      } else {
        this.el.nativeElement.style.backgroundColor = "#a31545";
      }
    }
  }
}
