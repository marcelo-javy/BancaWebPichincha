//import { RelojComponent } from './shared/components/reloj/reloj.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'ejemplo1';
  nombreEstudiante: string = 'Marcel Rios';
  edadEstudiante: number = 29;
  horaActual: Date;
  mostrarHora(evento: any){
    console.log(evento);
    this.horaActual = new Date()

    const {target} = evento;
    target.innerHTML = 'Cambio la Hora';
  }
  
  listMarcador:string[] = []

  insertLogMarcador(log:string){
  console.log(log)
  this.listMarcador.unshift(log)
  }
  mostrarInput(phone: string){
  console.log(phone)
  }

  
  //@ViewChild(RelojComponent) crtFirst: RelojComponent
 //@ViewChild('cronometroFirst') crotFirst: RelojComponent;
 //@ViewChild('cronometroSecond') crotSec: RelojComponent;
  //iniciarcronos(){
  //  this.crotFirst.play();
  //  this.crotSec.play();
  //}
//   maximo(){
    
//   let numeros : [-5,0,1,2,3]
//   let max_num:number =  -1000 
//   console.log('Es: '+max_num)
//   for (let ind = 0; ind <4; ind++)  {
//     console.log(ind); // prints indexes: 0, 1, 2, 3
  
//     console.log(numeros[ind].toString); // prints elements: 10, 20, 30, 40
//     if(ind > max_num){
//       max_num = ind
//      }
//   }
//  console.log(max_num)
//   }

}
