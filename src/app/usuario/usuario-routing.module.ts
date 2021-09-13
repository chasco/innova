import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';

const routes: Routes = [{ path: '', component: UsuarioComponent,
                          children: [
                            {
                              path: '',
                              component: ListUsuariosComponent
                            }
                          ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
