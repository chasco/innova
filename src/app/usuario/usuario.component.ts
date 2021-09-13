import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AuthInterceptor } from '../shared/authconfig.interceptor';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private as: AuthService) { }

  ngOnInit(): void {
  }

  toggle() {
    var element = document.getElementById('sidebar')!;
    element.classList.toggle('active');
    var element = document.getElementById('content')!;
    element.classList.toggle('active');
  }

  logOut() {
    this.as.logOut();
  }

}
