import { TipoCuentaComponent } from './tipo-cuenta/tipo-cuenta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // catalogo/tipo-cuenta
  {path: 'tipo-cuenta', component:TipoCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
