import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AcumuladorComponent } from './components/acumulador/acumulador.component';
import { RelojComponent } from './components/reloj/reloj.component';
import { CardComponent } from './components/card/card.component';
import { BtnloadingDirective } from './directives/btnloading.directive';

const componentes = [ AcumuladorComponent,
  RelojComponent,
  CardComponent,
  BtnloadingDirective,];

@NgModule({
  declarations: [...componentes, AcumuladorComponent],
  exports: componentes,
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
})
export class SharedModule { }
