import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {

  estados: any = [];
  sucursales: any = [];
  usuarios: any = [];
  
  constructor(private us: UsuarioService) { }

  ngOnInit(): void {
    this.us.getStates().subscribe(res => {
      this.estados = res;
    });
    this.us.getSucursales().subscribe(res => {
      this.sucursales = res;
    });
    this.us.getUsuarioByState('ACTIVO').subscribe(res => {
      this.usuarios = res;
    });

  }

  trackUsuario(index: number, usuario: any){
    return usuario.id;
  }

  changeSucursal(event: any) {
    
    this.us.getUsuarioBySucursal(event.target.value).subscribe( res => {
      this.usuarios = res;
      
    });
    
  }

  changeState(event: any) {
    this.us.getUsuarioByState(event.target.value).subscribe( res => {
      this.usuarios = res;
    })
  }



}
