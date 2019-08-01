import { Directive, ElementRef, NgZone, Renderer2, HostListener, OnInit } from '@angular/core';


@Directive({
  selector: '[appResizeEvent]'
})
export class ResizeEventDirective implements OnInit {

  constructor(private zone: NgZone, private elRef: ElementRef,private renderer: Renderer2) { }


  ngOnInit(){
  }

  // @HostListener ('window:resize',['$event']) onresize($event){
  //    this.zone.runOutsideAngular(()=>{
  //      if($event.target.innerWidth < 768){
  //         this.renderer.setStyle(this.elRef.nativeElement,'display','block');
  //      }else{
  //       this.renderer.setStyle(this.elRef.nativeElement,'display','none');
  //     }
  //    })
  // }

}
