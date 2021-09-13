import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';



@NgModule({
  declarations: [
    UsuarioComponent,
    ListUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
