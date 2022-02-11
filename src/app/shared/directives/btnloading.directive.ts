import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[btnloading]'
})
export class BtnloadingDirective implements OnInit {
loading:boolean= false;
texto:string

@Input() textoEntrada:string;
@Input() isLoading:boolean;

  constructor(private elementRef:ElementRef<HTMLButtonElement>, private renderer: Renderer2) {

    // elementRef.nativeElement.className = 'btn btn-outline-primary'
    // elementRef.nativeElement.innerHTML = 'Modificar'
    
   }
 ngOnInit(){
  this.texto=this.elementRef.nativeElement.innerHTML;
  this.renderer.setProperty(this.elementRef.nativeElement,'innerHTML',this.textoEntrada);
  this.renderer.addClass(this.elementRef.nativeElement,'btn-outline-primary');

 }

   @HostListener('click')
   onClick(){
      console.log('Desde Directive')
      
      if(!this.loading){
        this.renderer.setProperty(this.elementRef.nativeElement,'innerHTML','<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...');
        this.renderer.setProperty(this.elementRef.nativeElement,'disabled',true);
      }else {
        this.renderer.setProperty(this.elementRef.nativeElement,'innerHTML',this.texto);
      }
      this.loading=!this.loading;

   }

  //  @HostListener('mouseenter')
  //  onmouseEnter(){
  //     this.renderer.removeClass(this.elementRef.nativeElement,'btn-outline-primary');
  //     this.renderer.addClass(this.elementRef.nativeElement,'btn-outline-success');
  //     console.log('mouseenter')
  //  }

}

