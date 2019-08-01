import { Directive, ElementRef, OnInit, Renderer2, HostListener, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCheckboxToggle]'
})
export class CheckboxToggleDirective implements OnInit {

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  ngOnInit(){
  }
  @HostListener('click', ['$event']) onClick($event){
    setTimeout(()=>{
      this.elRef.nativeElement.checked = true;

    },1000)
    console.log(this.elRef.nativeElement);

}
}
