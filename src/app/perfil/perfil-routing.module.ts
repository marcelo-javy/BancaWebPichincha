import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // perfil/datos-personales
  {path: 'datos-personales', component:DatosPersonalesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
