import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent implements OnInit {
  //valorInicial: number = 10;
  @Input() minuto: number = 10;
  @Input() segundo: number = 10;
  reloj : string;
  interval : any;
  pauses : boolean;
 // @Input('acm') acumulador: number = 0;
//@Output() evtClick: EventEmitter<string> = new EventEmitter<string>();
 @Output() evtHistorial: EventEmitter<string> = new EventEmitter<string>();
  
  
  constructor() { }

  ngOnInit(): void {
    this.reloj = this.parseEtiquetaReloj();
  }
  changeValue(valor:number){
    //this.contador = this.contador + valor
    //this.evtClick.emit("Este es el valor: "+valor)
  }

  play(){
    //this.contador = this.contador + 1
    //this.evtClick.emit("Contador: "+valor)
   // this.functionNr1(valor);
   this.pauses = false
   this.interval = setInterval (() => {
     if (this.pauses){
       return
     }
    this.segundo +=1;
    if(this.segundo == 10){
      this.segundo = 0
      this.minuto += 1
     }
     //console.log(this.segundo)
    this.reloj = this.parseEtiquetaReloj(); 
  }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }
  stop() {
    clearTimeout(this.interval);
    this.minuto = 0;
    this.segundo= 0;
    this.reloj=this.parseEtiquetaReloj();
    //this.contador = this.valorInicial
    //this.evtClick.emit("Contador: "+ this.valorInicial)
  }
  emitirHistorial(){
    this.evtHistorial.emit(this.reloj)
  }
  parseEtiquetaReloj(){
    return `${this.minuto.toString().padStart(2, '0')}:${this.segundo.toString().padStart(2, '0')}`;
  }
  logAcumulador2:string[] = []
  insertLogAcumulador2(log:string){
    console.log(log)
    this.logAcumulador2.push(log)
  }

}
