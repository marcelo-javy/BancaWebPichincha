import { PerfilModule } from './perfil/perfil.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
  },
  {path:'catalogo', loadChildren: () => import('./catalogo/catalogo.module').then(module => module.CatalogoModule)
  },
  {path:'perfil', loadChildren: () => import('./perfil/perfil.module').then(module => module.PerfilModule)
  },
  
  {
    path: '', redirectTo: '/home/pag-principal',
    pathMatch: 'full' //full (redirige segun path estricto) - prefix (segun el path o mas segmento)
  },
  {
    path: '**', 
    redirectTo: '/home/pag-principal',
    //component: NotFoundComponent //redireccionar a algun componente de error
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
