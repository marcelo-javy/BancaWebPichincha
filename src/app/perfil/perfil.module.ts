import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';


@NgModule({
  declarations: [
    DatosPersonalesComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
