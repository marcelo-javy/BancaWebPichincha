import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPrincipalComponent } from './pag-principal/pag-principal.component';

const routes: Routes = [
  // home/pag-principal
  {path: 'pag-principal', component:PagPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
